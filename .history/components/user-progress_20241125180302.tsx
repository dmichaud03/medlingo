import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";


type Props = {
    activeCourse: {imageSrc: string; title: string };// TODO: Replace with Database types
    hearts: number;
    points: number;
    hasActiveSubscription: boolean;
};

export const UserProgress = ({ activeCourse }: Props) => {
    return (
        <div className="flex items-center justify-between gap-x-2 w-full">
            <Link href="/courses">
                <Button>
                    <Image
                        src={activeCourse.imageSrc}
                        alt={activeCourse.title}
                        className="rounded-md border"
                        width={32}
                        height={32}
                        />
                </Button>
            </Link>
        </div>
    );
};