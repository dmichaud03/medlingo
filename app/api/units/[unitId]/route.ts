import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import db from "@/db/drizzle";
import { courses } from "@/db/schema";

// API Route to Fetch Course Data
export async function GET(request: NextRequest, context: { params: { courseId: string } }) {
  try {
    const { courseId } = context.params; // Access the courseId from params

    // Fetch the course from the database
    const course = await db.query.courses.findFirst({
      where: eq(courses.id, courseId),
    });

    // If no course is found, return a 404 response
    if (!course) {
      return NextResponse.json(
        { data: null, error: "Course not found" },
        { status: 404 }
      );
    }

    // Return the course data
    return NextResponse.json({ data: course, error: null });
  } catch (error) {
    // Handle any unexpected errors
    console.error(error);
    return NextResponse.json(
      { data: null, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
