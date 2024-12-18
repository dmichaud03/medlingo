import { NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import db from '@/db/drizzle';
import { units } from '@/db/schema';
import { params } from 'next/navigation';

export const GET = async () => {
    try {
        // Extract unitId from params
        const { unitId } = params();

        // Fetch the unit from the database
        const unit = await db.query.units.findFirst({
            where: eq(units.id, unitId),
        });

        // If no course is found, return a 404 response
        if (!course) {
            return NextResponse.json(
                { data: null, error: 'Course not found' },
                { status: 404 }
            );
        }

        // Return the course data
        return NextResponse.json({ data: course, error: null });
    } catch (error) {
        // Handle any unexpected errors
        return NextResponse.json(
            { data: null, error: 'Internal Server Error' },
            { status: 500 }
        );
    }
};