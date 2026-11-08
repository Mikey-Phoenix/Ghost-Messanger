import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

async function main(): Promise<void> {
    const uri = process.env.ATLAS_URI;
    if (!uri) {
        throw new Error("ATLAS_URI is not set in config.env");
    }

    const client = new MongoClient(uri);

    try {
        await client.connect();

        const collections = await client.db("messanger-app").collections();
        collections.forEach((collection) => console.log(collection.collectionName));
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();