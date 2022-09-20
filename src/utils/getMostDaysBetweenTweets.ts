import { ITweet } from '../types/tweet';

/**
    * Retrieves the most number of days between tweets by the given user.
    * This should always be rounded down to the complete number of days, i.e. if the time is 12 days & 3 hours, this
    * method should return 12.
    * If there are no tweets for the given user, this method should return 0.
*/

const sortDate = (tweets: ITweet[]) => tweets.sort((a,b): number => {
    const first: any = new Date(b.createdAt);
    const second: any = new Date(a.createdAt);
    return first - second;
});

export default (tweets: ITweet[]): number => {
    let maxDays = 0;
    if (tweets.length > 0) {
        const newTweets = sortDate(tweets);
        for (let i = 0; i < newTweets.length; i++ ) {
            const first: any = new Date(newTweets[i].createdAt);
            const second: any = new Date(newTweets[i+1]?.createdAt);
            const betweenTweets = first - second;
            const days = Math.floor(betweenTweets/(1000*(60*60)*24));
            if (maxDays < days) maxDays = days;
        }
    }
    return maxDays;
}