import { ObjectId } from "mongodb";
import { Router } from "express";
import bcrypt from "bcrypt";
import { users, otps } from "../db";
import { generateUsername } from "../utils/username";
import { sendOtp } from "../utils/otp";
import { setAuthCookie, clearAuthCookie } from "../utils/token";
import { requireAuth } from "../middleware/requireAuth";

const router = Router();

router.post("/signup", async (req, res) => {
    const { email, password } = req.body;

    const missing: string[] = [];
    if (!email) missing.push("email");
    if (!password) missing.push("password");

    if (missing.length > 0) {
        return res.status(400).json({
            error: `Missing required field(s): ${missing.join(", ")}`,
            missing,
        });
    }

    if (password.length < 8) {
        return res.status(400).json({ error: "Password must be at least 8 characters" });
    }

    try {
        const passwordHash = await bcrypt.hash(password, 10);

        for (let attempt = 0; attempt < 5; attempt++) {
            const username = generateUsername();

            try {
                await users.insertOne({ email, username, passwordHash, verified: false, createdAt: new Date() });
                await sendOtp(email);
                return res.status(201).json({ message: "Account created", username });
            } catch (e: any) {
                if (e.code === 11000) {
                    if (e.keyPattern?.email) {
                        return res.status(409).json({ error: "Email already in use" });
                    }
                    continue; // username clash: try a new random one
                }
                throw e; // anything else goes to the outer catch
            }
        }

        return res.status(500).json({ error: "Could not generate a username, please try again" });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: "Something went wrong 1" });
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    try {
        const user = await users.findOne({ email });

        // Same message for "no such email" and "wrong password",
        // so nobody can use this route to discover which emails have accounts
        if (!user) {
            return res.status(401).json({ error: "Incorrect email or password" });
        }

        const passwordMatches = await bcrypt.compare(password, user.passwordHash);
        if (!passwordMatches) {
            return res.status(401).json({ error: "Incorrect email or password" });
        }

        if (!user.verified) {
            return res.status(403).json({ error: "Please verify your email first" });
        }

        // return res.json({ message: "Logged in", username: user.username });
        setAuthCookie(res, user._id.toString());
        return res.json({ message: "Login successful", username: user.username });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: "Something went wrong" });
    }
});

router.get("/me", requireAuth, async (req, res) => {
    try {
        const user = await users.findOne(
            { _id: new ObjectId(res.locals.userId) },
            { projection: { passwordHash: 0 } } // never send the hash
        );

        if (!user) {
            return res.status(401).json({ error: "Account not found" });
        }

        return res.json({ email: user.email, username: user.username });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: "Something went wrong" });
    }
});

router.post("/logout", (___, res) => {
    clearAuthCookie(res);
    return res.json({ message: "Logged out" });
});

router.delete("/account", requireAuth, async (req, res) => {
    const { password } = req.body;

    if (!password) {
        return res.status(400).json({ error: "Password is required to delete your account" });
    }

    try {
        const user = await users.findOne({ _id: new ObjectId(res.locals.userId) });

        if (!user) {
            clearAuthCookie(res);
            return res.status(404).json({ error: "Account not found" });
        }

        const passwordMatches = await bcrypt.compare(password, user.passwordHash);
        if (!passwordMatches) {
            return res.status(403).json({ error: "Incorrect password" });
        }

        await users.deleteOne({ _id: user._id });
        await otps.deleteMany({ email: user.email }); // remove any leftover codes

        clearAuthCookie(res); // log them out at the same time
        return res.json({ message: "Account deleted" });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: "Something went wrong" });
    }
});

export default router;