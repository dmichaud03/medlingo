import { auth } from "@clerk/nextjs/server";

const adminIds = [
    "user_2p6Id5uGQs6RPGhR5kH1h18DtuW",
];

export const IsAdmin = () => {
    const { userId } = auth();

    if (!userId) {
        return false;
    }

    return adminIds.indexOf(userId) !== -1;
};