import { Server } from "socket.io";
import type { Server as HttpServer } from "http";
import jwt from "jsonwebtoken";
import { parseCookie } from "cookie";
import { ObjectId } from "mongodb";
import { users, messages } from "./db";
import { getJwtSecret } from "./utils/token";

export function setupSocket(server: HttpServer) {
    const io = new Server(server, {
        cors: { origin: "http://localhost:5173", credentials: true },
    });

    // Runs once per connection: reads the login cookie, same check as requireAuth
    io.use((socket, next) => {
        try {
            const token = parseCookie(socket.handshake.headers.cookie || "").token;
            if (!token) return next(new Error("Not logged in"));

            const payload = jwt.verify(token, getJwtSecret()) as { userId: string };
            socket.data.userId = payload.userId;
            next();
        } catch {
            next(new Error("Invalid session"));
        }
    });

    io.on("connection", (socket) => {
        const myId = socket.data.userId as string;

        // Each user gets a private "room" named after their id,
        // so the server can send things to one person
        socket.join(myId);
        (async () => {
            try {
                const waiting = await messages.distinct("senderId", { receiverId: myId, deliveredAt: null });
                if (waiting.length === 0) return;

                const now = new Date();
                await messages.updateMany(
                    { receiverId: myId, deliveredAt: null },
                    { $set: { deliveredAt: now } }
                );
                waiting.forEach((senderId) =>
                    io.to(senderId).emit("messages_delivered", { to: myId, deliveredAt: now })
                );
            } catch (e) {
                console.error(e);
            }
        })();

        socket.on("send_message", async ({ to, text }) => {
            try {
                if (typeof text !== "string" || !ObjectId.isValid(to)) return;

                const cleanText = text.trim();
                if (cleanText.length === 0 || cleanText.length > 2000) return;

                const receiver = await users.findOne({ _id: new ObjectId(to) });
                if (!receiver) return;

                const receiverOnline = (io.sockets.adapter.rooms.get(to)?.size ?? 0) > 0;

                const message = {
                    senderId: myId, // from the cookie, never from the browser
                    receiverId: to,
                    text: cleanText,
                    createdAt: new Date(),
                    deliveredAt: receiverOnline ? new Date() : null,
                    readAt: null,
                };
                const result = await messages.insertOne(message);

                // Send to the receiver and back to the sender
                io.to(to).to(myId).emit("new_message", { _id: result.insertedId, ...message });
            } catch (e) {
                console.error(e);
            }
        });

        socket.on("mark_read", async ({ from }) => {
            try {
                if (!ObjectId.isValid(from)) return;

                const now = new Date();
                await messages.updateMany(
                    { senderId: from, receiverId: myId, deliveredAt: null },
                    { $set: { deliveredAt: now } }
                );
                const result = await messages.updateMany(
                    { senderId: from, receiverId: myId, readAt: null },
                    { $set: { readAt: now } }
                );

                if (result.modifiedCount > 0) {
                    io.to(from).emit("messages_read", { by: myId, readAt: now });
                }
            } catch (e) {
                console.error(e);
            }
        });
    });
}