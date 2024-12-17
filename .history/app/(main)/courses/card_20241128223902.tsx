type Props = {
    title: string;
    id: number;
    imageSrc: string;
    onclick: (id: number) => void;
    disabled?: boolean;
    active?: boolean;

};

export const Card - ( {}: Props) => {
    return (
        <div>
            Card
        </div>
    );
};