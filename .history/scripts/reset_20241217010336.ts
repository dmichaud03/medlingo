import 'dotenv/config';
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "../db/schema";


// Make sure to access the connection string correctly from environment variables
const sql = neon(process.env.DATABASE_URL!); // Ensure DATABASE_URL is set correctly
const db = drizzle(sql, { schema });

const main = async () => {
    try {
        console.log("Seeding database");

        // Clear existing data
        await db.delete(schema.courses);
        await db.delete(schema.userProgress);
        await db.delete(schema.units);
        await db.delete(schema.lessons);
        await db.delete(schema.challenges);
        await db.delete(schema.challengeOptions);
        await db.delete(schema.challengeProgress);
        await db.delete(schema.userSubscription);


        console.log("Resetting finished");
    } catch (error) {
        console.error(error);
        throw new Error("Failed to reset the database");
    }
};

main();