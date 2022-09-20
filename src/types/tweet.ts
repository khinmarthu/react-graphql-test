type IUser = {
    id: string;
    userName: string;
}

export type ITweet = {
    id: string;
    createdAt: string;
    text: string;
    user: IUser
};

export const differentTypes = ["popularHashTag", "tweetsInOneDay", "tweetIdPrefix"];

export type ITypes = typeof differentTypes[number];