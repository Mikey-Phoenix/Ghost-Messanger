import jwt from "jsonwebtoken";
import type { Response } from "express";

const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;

export function getJwtSecret(): string {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error("JWT_SECRET is not set in config.env");
    }
    return secret;
}

export function setAuthCookie(res: Response, userId: string) {
    const token = jwt.sign({ userId }, getJwtSecret(), { expiresIn: "7d" });

    res.cookie("token", token, {
        httpOnly: true,                                  // page scripts can't read it
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",   // HTTPS only once deployed
        maxAge: SEVEN_DAYS,
    });
}

export function clearAuthCookie(res: Response) {
    res.clearCookie("token", {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
    });
}