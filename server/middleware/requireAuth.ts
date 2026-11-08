import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";
import { getJwtSecret } from "../utils/token";

export function requireAuth(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies?.token;

    if (!token) {
        return res.status(401).json({ error: "Not logged in" });
    }

    try {
        const payload = jwt.verify(token, getJwtSecret()) as { userId: string };
        res.locals.userId = payload.userId;
        next();
    } catch {
        return res.status(401).json({ error: "Session expired. Please log in again." });
    }
}