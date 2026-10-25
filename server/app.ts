import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes";
import otpRoutes from "./routes/otp.routes";
import messagesRoutes from "./routes/messages.routes";

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", otpRoutes);
app.use("/api", messagesRoutes);

export default app;