const LearnPage = () => {
    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress 
                    activeCourse={{ title: "Anatomy & Physiology", imageSrc: "/anatomy.jpeg"}}
                    hearts={5}
                    points={100}
                    hasActiveSubscription={false} />
            </StickyWrapper>
           <FeedWrapper>
            <Header title="Anatomy & Physiology" />
           </FeedWrapper>
        </div>
    );
}

export default LearnPage;