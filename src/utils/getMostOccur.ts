import { format } from 'date-fns'
import { ITweet, ITypes, differentTypes } from '../types/tweet';

const [popularHashTag, tweetsInOneDay, tweetIdPrefix] = differentTypes;
const getBy = {
    /**
        * Retrieves the most popular hash tag tweeted by the given user.
        * Note that the string returned by this method should not include the hashtag itself.
        * For example, if the most popular hash tag is "#React", this method should return "React".
        * If there are no tweets for the given user, this method should return "N/A".
    */
    [popularHashTag]: (tweet: ITweet): string | undefined => {
        const hashtag = tweet.text?.match(/#([^\s]+)[\s|$]?/);
        return hashtag?.[1];
    },
    /**
        * Retrieves the highest number of tweets that were created on any given day by the given user.
        * A day's time period here is defined from 00:00:00 to 23:59:59
        * If there are no tweets for the given user, this method should return 0.
    */
    [tweetsInOneDay]: (tweet: ITweet): string => {
        return format(new Date(tweet.createdAt), 'yyyy-MM-dd');
    },
    /**
        * Finds the first 6 characters of the ID of the longest tweet for the given user.
        * For example, if the ID of the longest tweet is "0b88c8e3-5ade-48a3-a5a0-8ce356c02d2a",
        * then this function should return "0b88c8".
        * You can assume there will only be one tweet that is the longest.
        * If there are no tweets for the given user, this method should return "N/A".
    */
    [tweetIdPrefix]: (tweet: ITweet): string => {
        return tweet.id;
    }
}

const getCount = {
    [tweetIdPrefix]: (acc: {[key: string]: number}, tag: string, tweet?: ITweet): void => {
        acc[tag] = tweet?.text.length || 0;
    },
    default(acc: {[key: string]: number}, tag: string) {
        if (acc[tag] >= 0) acc[tag]++;
        else acc[tag] = 1;
    }
}

const getResultBy = {
    [popularHashTag]: (group: {[key: string]: number}, popular: string): string => {
        return popular || "N/A";
    },
    [tweetsInOneDay]: (group: {[key: string]: number}, popular: string): number => {
        return popular ? group[popular] : 0;
    },
    [tweetIdPrefix]: (group: {[key: string]: number}, popular: string): string => {
        return popular?.slice(0, 6) || 'N/A';
    }
}

export default (tweets: ITweet[], type: ITypes): string | number => {
    let popular: string = '';
    const group = tweets.reduce((acc: {[key: string]: number}, tweet: ITweet) => {
      const tag = getBy[type](tweet);
      if (tag) {
        const curType = getCount[type] ? type: 'default';
        getCount[curType](acc, tag, tweet);

        if (!acc[popular] || acc[tag] > acc[popular]) popular = tag;
      }
      return acc;
    }, {});
    return getResultBy[type](group, popular);
  }