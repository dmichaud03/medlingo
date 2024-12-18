import { redirect } from "next/navigation";
import { getLesson, getUserProgress, getUserSubscription } from "@/db/queries";
import { Quiz } from "../quiz";

type Params = Promise<{ lessonId: string }>;

export default async function LessonIdPage(props: { params: Params }) {
    const params = await props.params; // Resolve the params Promise
    const lessonId = parseInt(params.lessonId, 10); // Convert lessonId to number

    // Redirect if lessonId is invalid
    if (isNaN(lessonId)) {
        redirect("/learn");
        return null;
    }

    // Fetch data concurrently
    const [lesson, userProgress, userSubscription] = await Promise.all([
        getLesson(lessonId),
        getUserProgress(),
        getUserSubscription(),
    ]);

    // Redirect if data is missing
    if (!lesson || !userProgress) {
        redirect("/learn");
        return null;
    }

    // Calculate initial percentage
    const initialPercentage =
        (lesson.challenges.filter((challenge) => challenge.completed).length /
            lesson.challenges.length) *
        100;

    // Render the Quiz component
    return (
        <Quiz
            initialLessonId = {"lesson.id"}initialLessonChallenges = {"lesson.challenges"}
          initialHearts = {"userProgress.hearts"}
        initialPercentage = {"initialPercentage"}
          userSubscription = {"userSubscription"}
        />
    );
}