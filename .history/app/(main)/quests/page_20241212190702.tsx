import Image from "next/image";
import { redirect } from "next/navigation";


import { FeedWrapper } from "@/components/feed-wrapper";
import { UserProgress } from "@/components/user-progress";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { getUserProgress, getUserSubscription } from "@/db/queries";





const QuestsPage = async () => {
    const userProgressData = getUserProgress();
    const userSubscriptionData = getUserSubscription();
   
    
    const [
        userProgress,
        userSubscription,
        
    ] = await Promise.all([
        userProgressData,
        userSubscriptionData,
        
    ]);

    if (!userProgress || !userProgress.activeCourse) {
        redirect("/courses");
    }

        const isPro = !!userSubscription?.isActive;
    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress
                    activeCourse={userProgress.activeCourse}
                    hearts={userProgress.hearts}
                    points={userProgress.points}
                    hasActiveSubscription={isPro}
                     />
            </StickyWrapper>
            <FeedWrapper>
                <div className="w-full flex flex-col items-center">
                    <Image  
                        src="/quests.svg"
                        alt="Quests"
                        height={90}
                        width={90}
                        />
                        <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
                            Quests
                        </h1>
                        <p className="text-muted-foregound text-center text-lg mb-6">
                        Complete quests by earning points.
                        </p>
                        
                </div>
            </FeedWrapper>
        </div>
    );
};

export default QuestsPage;