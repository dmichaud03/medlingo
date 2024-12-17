type Props = {
    value: number;
    variant: "points" | "hearts";
};

export const ResultCard = ({ value, variant }: Props) => {
    return (
        <div>
            {variant}
        </div>
    );
};