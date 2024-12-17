import { cn } from "@/lib/utils";

type Props = {
    title: string;
    id: number;
    imageSrc: string;
    onclick: (id: number) => void;
    disabled?: boolean;
    active?: boolean;

};

export const Card = ( {
    title,
    id,
    imageSrc,
    disabled,
    onclick,
    active,
}: Props) => {
    return (
        <div 
            onClick={() => onclick(id)}
            className={cn(
                "h-full border-2 rounded-xl border-b-4 hover:bg-black/5 cursor-pointer active:border-b-2 flex flex-col items-center justify-between p-3 pb-6 min-h-[217px] min-w-[200px]"
            
            )}
            >
            Card
        </div>
    );
};