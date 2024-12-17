import { cache } from "react";
import db from "@/db/drizzle";

export const getCourses = cache(async () => {
    const result = await db.select().from(courses);

    return data;
});