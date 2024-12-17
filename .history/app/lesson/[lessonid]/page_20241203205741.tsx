import { getLesson, getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";

import { Quiz } from "../quiz";

type Props = {
    params: {
        lessonId: number;
    };
};

const LessonIdPage = async ({ params }: Props) => {
    // Ensure `lessonId` is an integer
    const lessonId = parseInt(params.lessonId.toString(), 10);
    if (isNaN(lessonId)) {
        redirect("/learn");
    }

    // Fetch lesson and user progress in parallel
    const [lesson, userProgress] = await Promise.all([
        getLesson(lessonId),
        getUserProgress(),
    ]);

    // Redirect if data is not available
    if (!lesson || !userProgress) {
        redirect("/learn");
    }

    // Calculate initial completion percentage
    const initialPercentage =
        (lesson.challenges.filter((challenge) => challenge.completed).length /
            lesson.challenges.length) *
        100;

    // Render the Quiz component with data
    return (
        <Quiz
            initialLessonId={lesson.id}
            initialLessonChallenges={lesson.challenges}
            initialHearts={userProgress.hearts}
            initialPercentage={initialPercentage}
            userSubscription={null}
        />
    );
};

export default LessonIdPage;
