import { NextResponse } from "next/server";

import db from "@/db/drizzle";
import { challenges } from "@/db/schema";

export const GET = async () => {
    const data = await db.query.lessons.findMany();

    return NextResponse.json(data);
};

export const POST = async (req: Request) => {

    const body = await req.json();

    const data = await db.insert(challenges).values({
        ...body,
    }).returning();

    return NextResponse.json(data[0]);
};