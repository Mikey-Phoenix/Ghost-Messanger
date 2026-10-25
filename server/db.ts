import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.ATLAS_URI!);
const db = client.db("messanger-app");

export const users = db.collection("users");
export const otps = db.collection("otps");

export async function connectDb() {
    await client.connect();
    await users.createIndex({ email: 1 }, { unique: true });
    await users.createIndex({ username: 1 }, { unique: true });
    await otps.createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 });
}