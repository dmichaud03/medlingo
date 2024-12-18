import { NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import db from '@/db/drizzle';
import { courses } from '@/db/schema';

export const GET = async () => {
    try {
        // Extract courseId from params
        const { courseId } = params();

        // Fetch the course from the database
        const lesson = await db.query.courses.findFirst({
            where: eq(courses.id, courseId),
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