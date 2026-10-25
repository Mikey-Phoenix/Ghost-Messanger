import bcrypt from "bcrypt";
import { randomInt } from "node:crypto";
import { otps } from "../db";
import { transporter } from "./mailer";

export async function sendOtp(email: string) {
    const code = randomInt(1000, 10000).toString(); // 4 digits
    const codeHash = await bcrypt.hash(code, 10);

    // Replace any older code for this email
    await otps.deleteMany({ email });
    await otps.insertOne({
        email,
        codeHash,
        attempts: 0,
        sentAt: new Date(),
        expiresAt: new Date(Date.now() + 10 * 60 * 1000), // 10 minutes
    });

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Your verification code",
        text: `Your code is ${code}. It expires in 10 minutes.`,
    });
}