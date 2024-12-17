import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";

const LearnPage = () => {
    return (
        <div className="flex  gap-[48px] px-6">
              <FeedWrapper>
               My feed
            </FeedWrapper>
            <StickyWrapper>
                My Sticky Wrapper
            </StickyWrapper>
          
        </div>
    );
}

export default LearnPage;