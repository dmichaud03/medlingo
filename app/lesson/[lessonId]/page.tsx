import { redirect } from "next/navigation";

import { getLesson, getUserProgress, getUserSubscription } from "@/db/queries";

import { Quiz } from "../quiz";

type Props = {
    params: {
        lessonId: string; // Next.js treats dynamic route params as strings
    };
};

const LessonIdPage = async ({ params }: Props) => {
    const lessonId = parseInt(params.lessonId, 10); // Convert lessonId to a number

    if (isNaN(lessonId)) {
        redirect("/learn"); // Redirect if lessonId is invalid
        return null;
    }

    // Fetch data concurrently
    const [lesson, userProgress, userSubscription] = await Promise.all([
        getLesson(lessonId),
        getUserProgress(),
        getUserSubscription(),
    ]);

    // Handle missing data
    if (!lesson || !userProgress) {
        redirect("/learn");
        return null;
    }

    const initialPercentage =
        (lesson.challenges.filter((challenge) => challenge.completed).length /
            lesson.challenges.length) *
        100;

    return (
        <Quiz
            initialLessonId={lesson.id}
            initialLessonChallenges={lesson.challenges}
            initialHearts={userProgress.hearts}
            initialPercentage={initialPercentage}
            userSubscription={userSubscription}
        />
    );
};

export default LessonIdPage;