import { getCourses } from "@/db/queries";

const CoursePage = async () => {
    const data = await getCourses();
    return (
        <div className="h-full max-w-[912px] px-3 mx-auto">
            <h1 className="text-2xl font-bold text-neutral-700">
            Nursing Courses
            </h1>
            {JSON.stringify(data)}
        </div>
    );
};

export default CoursePage;