import "./config"; // must stay first
import app from "./app";
import { connectDb } from "./db";

async function start() {
    await connectDb();
    app.listen(5000, () => console.log("Server running on port 5000"));
}

start();








// import express from "express";
// import cors from "cors";
// import bcrypt from "bcrypt";
// import dotenv from "dotenv";
// import { MongoClient } from "mongodb";
// import { randomInt } from "node:crypto";
// import nodemailer from "nodemailer";

// const adjectives = ["happy", "swift", "brave", "calm", "bright", "clever", "gentle", "lucky"];
// const nouns = ["lion", "river", "falcon", "panda", "comet", "maple", "tiger", "ocean"];

// dotenv.config({ path: "./config.env" });

// const app = express();
// app.use(cors());
// app.use(express.json());

// const client = new MongoClient(process.env.ATLAS_URI!);
// const db = client.db("messanger-app");
// const users = db.collection("users");


// function generateUsername(): string {
//     const adjective = adjectives[randomInt(adjectives.length)];
//     const noun = nouns[randomInt(nouns.length)];
//     const number = randomInt(1000, 10000); // 4 digits
//     return `${adjective}${noun}${number}`;
// }



// app.post("/api/signup", async (req, res) => {
//     const { email, password } = req.body;

//     const missing: string[] = [];
//     if (!email) missing.push("email");
//     if (!password) missing.push("password");

//     if (missing.length > 0) {
//         return res.status(400).json({
//             error: `Missing required field(s): ${missing.join(", ")}`,
//             missing,
//         });
//     }

//     if (password.length < 8) {
//         return res.status(400).json({ error: "Password must be at least 8 characters" });
//     }

//     try {
//         const passwordHash = await bcrypt.hash(password, 10);

//         for (let attempt = 0; attempt < 5; attempt++) {
//             const username = generateUsername();

//             try {
//                 await users.insertOne({ email, username, passwordHash, createdAt: new Date() });
//                 await sendOtp(email);
//                 return res.status(201).json({ message: "Account created", username });
//             } catch (e: any) {
//                 if (e.code === 11000) {
//                     if (e.keyPattern?.email) {
//                         return res.status(409).json({ error: "Email already in use" });
//                     }
//                     continue; // username clash: try a new random one
//                 }
//                 throw e; // anything else goes to the outer catch
//             }
//         }

//         return res.status(500).json({ error: "Could not generate a username, please try again" });
//     } catch (e) {
//         console.error(e);
//         return res.status(500).json({ error: "Something went wrong 1" });
//     }
// });


// app.post("/api/login", async (req, res) => {
//     const { email, password } = req.body;

//     if (!email || !password) {
//         return res.status(400).json({ error: "Email and password are required" });
//     }

//     try {
//         const user = await users.findOne({ email });

//         // Same message for "no such email" and "wrong password",
//         // so nobody can use this route to discover which emails have accounts
//         if (!user) {
//             return res.status(401).json({ error: "Incorrect email or password" });
//         }

//         const passwordMatches = await bcrypt.compare(password, user.passwordHash);
//         if (!passwordMatches) {
//             return res.status(401).json({ error: "Incorrect email or password" });
//         }

//         if (!user.verified) {
//             return res.status(403).json({ error: "Please verify your email first" });
//         }

//         return res.json({ message: "Logged in", username: user.username });
//     } catch (e) {
//         console.error(e);
//         return res.status(500).json({ error: "Something went wrong" });
//     }
// });

// app.post("/api/verify-otp", async (req, res) => {
//     const { email, code } = req.body;

//     if (!email || !code) {
//         return res.status(400).json({ error: "Email and code are required" });
//     }
//     if (!/^\d{4}$/.test(String(code))) {
//         return res.status(400).json({ error: "Code must be 4 digits" });
//     }

//     try {
//         const record = await otps.findOne({ email });

//         if (!record || record.expiresAt < new Date()) {
//             return res.status(400).json({ error: "Code expired. Please request a new one." });
//         }

//         if (record.attempts >= 5) {
//             await otps.deleteOne({ _id: record._id });
//             return res.status(429).json({ error: "Too many attempts. Please request a new code." });
//         }

//         const valid = await bcrypt.compare(String(code), record.codeHash);

//         if (!valid) {
//             await otps.updateOne({ _id: record._id }, { $inc: { attempts: 1 } });
//             return res.status(400).json({ error: "Incorrect code" });
//         }

//         await users.updateOne({ email }, { $set: { verified: true } });
//         await otps.deleteOne({ _id: record._id });
//         return res.json({ message: "Email verified" });
//     } catch (e) {
//         console.error(e);
//         return res.status(500).json({ error: "Something went wrong 2" });
//     }
// });

// app.post("/api/resend-otp", async (req, res) => {
//     const { email } = req.body;

//     if (!email) {
//         return res.status(400).json({ error: "Email is required" });
//     }

//     try {
//         const user = await users.findOne({ email });
//         if (!user || user.verified) {
//             return res.status(400).json({ error: "Cannot send a code for this account" });
//         }

//         const existing = await otps.findOne({ email });
//         if (existing?.sentAt && Date.now() - existing.sentAt.getTime() < 30 * 1000) {
//             return res.status(429).json({ error: "Please wait before requesting another code" });
//         }

//         await sendOtp(email);
//         return res.json({ message: "New code sent" });
//     } catch (e) {
//         console.error(e);
//         return res.status(500).json({ error: "Something went wrong 3" });
//     }
// });

// async function start() {
//     await client.connect();
//     await users.createIndex({ email: 1 }, { unique: true });
//     await users.createIndex({ username: 1 }, { unique: true });
//     await otps.createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 });
//     app.listen(5000, () => console.log("Server running on port 5000"));
// }

// const otps = db.collection("otps");

// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
//     tls: { rejectUnauthorized: false },
// });

// async function sendOtp(email: string) {
//     const code = randomInt(1000, 10000).toString(); // 4 digits
//     const codeHash = await bcrypt.hash(code, 10);

//     // Replace any older code for this email
//     await otps.deleteMany({ email });
//     await otps.insertOne({
//         email,
//         codeHash,
//         attempts: 0,
//         sentAt: new Date(),
//         expiresAt: new Date(Date.now() + 10 * 60 * 1000), // 10 minutes
//     });

//     await transporter.sendMail({
//         from: process.env.EMAIL_USER,
//         to: email,
//         subject: "Your verification code",
//         text: `Your code is ${code}. It expires in 10 minutes.`,
//     });
// }

// start();