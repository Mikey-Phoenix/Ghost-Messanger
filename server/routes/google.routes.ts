import { Router } from "express";
import { OAuth2Client } from "google-auth-library";
import { users } from "../db";
import { generateUsername } from "../utils/username";
import { setAuthCookie } from "../utils/token";

const router = Router();
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

router.post("/google", async (req, res) => {
    const { credential } = req.body;

    if (typeof credential !== "string") {
        return res.status(400).json({ error: "Missing Google credential" });
    }

    try {
        // Google's library checks the signature, expiry, and that the token was made for YOUR app
        const ticket = await googleClient.verifyIdToken({
            idToken: credential,
            audience: process.env.GOOGLE_CLIENT_ID,
        });
        const payload = ticket.getPayload();

        if (!payload?.email || !payload.email_verified) {
            return res.status(401).json({ error: "Your Google email is not verified" });
        }

        const googleId = payload.sub; // Google's permanent id for this person
        const email = payload.email;

        let userId: string | undefined;
        const existing = await users.findOne({ $or: [{ googleId }, { email }] });

        if (existing) {
            const update: any = { $set: { googleId, verified: true } };

            // Safety: if this email was registered with a password but never verified,
            // someone else may have registered it. Remove that password.
            if (!existing.verified && existing.passwordHash) {
                update.$unset = { passwordHash: "" };
            }

            await users.updateOne({ _id: existing._id }, update);
            userId = existing._id.toString();
        } else {
            for (let attempt = 0; attempt < 5; attempt++) {
                try {
                    const result = await users.insertOne({
                        email,
                        username: generateUsername(),
                        googleId,
                        verified: true,
                        createdAt: new Date(),
                    });
                    userId = result.insertedId.toString();
                    break;
                } catch (e: any) {
                    if (e.code === 11000 && !e.keyPattern?.email) continue; // username clash: retry
                    throw e;
                }
            }
        }

        if (!userId) {
            return res.status(500).json({ error: "Could not create your account, please try again" });
        }

        setAuthCookie(res, userId);
        return res.json({ message: "Logged in" });
    } catch (e) {
        console.error(e);
        return res.status(401).json({ error: "Google sign-in failed" });
    }
});

export default router;