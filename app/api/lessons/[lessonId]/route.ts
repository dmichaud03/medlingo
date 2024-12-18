import { NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import  db  from '@/db/drizzle'
import { lessons } from '@/db/schema';
import { params } from 'next/navigation';

export const GET = async () => {
    try {
        // Extract lessonId from params
        const { lessonId } = params();

        // Fetch the lesson from the database
        const lesson = await db.query.lessons.findFirst({
            where: eq(lessons.id, lessonId),
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