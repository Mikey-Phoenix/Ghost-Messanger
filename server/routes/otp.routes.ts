import { Router } from "express";
import bcrypt from "bcrypt";
import { users, otps } from "../db";
import { sendOtp } from "../utils/otp";
import { setAuthCookie } from "../utils/token";

const router = Router();

router.post("/verify-otp", async (req, res) => {
    const { email, code } = req.body;

    if (!email || !code) {
        return res.status(400).json({ error: "Email and code are required" });
    }
    if (!/^\d{4}$/.test(String(code))) {
        return res.status(400).json({ error: "Code must be 4 digits" });
    }

    try {
        const record = await otps.findOne({ email });

        if (!record || record.expiresAt < new Date()) {
            return res.status(400).json({ error: "Code expired. Please request a new one." });
        }

        if (record.attempts >= 5) {
            await otps.deleteOne({ _id: record._id });
            return res.status(429).json({ error: "Too many attempts. Please request a new code." });
        }

        const valid = await bcrypt.compare(String(code), record.codeHash);

        if (!valid) {
            await otps.updateOne({ _id: record._id }, { $inc: { attempts: 1 } });
            return res.status(400).json({ error: "Incorrect code" });
        }

        // await users.updateOne({ email }, { $set: { verified: true } });
        // await otps.deleteOne({ _id: record._id });
        // return res.json({ message: "Email verified" });
        const user = await users.findOneAndUpdate(
            { email },
            { $set: { verified: true } },
            { returnDocument: "after" }
        );
        await otps.deleteOne({ _id: record._id });

        if (user) {
            setAuthCookie(res, user._id.toString()); // log them in right after verifying
        }

        return res.json({ message: "Email verified" });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: "Something went wrong 2" });
    }
});

router.post("/resend-otp", async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: "Email is required" });
    }

    try {
        const user = await users.findOne({ email });
        if (!user || user.verified) {
            return res.status(400).json({ error: "Cannot send a code for this account" });
        }

        const existing = await otps.findOne({ email });
        if (existing?.sentAt && Date.now() - existing.sentAt.getTime() < 30 * 1000) {
            return res.status(429).json({ error: "Please wait before requesting another code" });
        }

        await sendOtp(email);
        return res.json({ message: "New code sent" });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: "Something went wrong 3" });
    }
});

export default router;