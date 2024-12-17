import { challenges } from "@/db/schema";

type Props = {
    id: number;
    imageSrc: string | null;
    audioSrc: string | null;
    text: string;
    shortcut: string;
    selected?: Boolean;
    onClick: () => void;
    disabled?: boolean;
    status?: "correct" | "wrong" | "none",
    type: typeof challenges.$inferSelect["type"];
    
};


export const Card = ({
    id,
    imageSrc,
    audioSrc,
    text,
    shortcut,
    onClick,
    status,
    disabled,
    type,
}: Props) => {

    return (
        <div
        onClick={() => {}}
        className={cn(
            "h-full border-2 rounded-xl border-b-4 hover:bg-black/5 p-4 lg:p-6 cursor-pointer active:border-b-2"
        )}
    >
        Card
        </div>
    );
};