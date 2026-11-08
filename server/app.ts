import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes";
import otpRoutes from "./routes/otp.routes";
import messagesRoutes from "./routes/messages.routes";
import googleRoutes from "./routes/google.routes";

const app = express();
app.set("trust proxy", 1); // Render sits behind a proxy; needed for secure cookies
app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:5173", credentials: true }));
// app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", otpRoutes);
app.use("/api", messagesRoutes);
app.use("/api", googleRoutes);

export default app;