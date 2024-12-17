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
        <div>
            Card
        </div>
    );
};