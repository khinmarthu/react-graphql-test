import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import './style.css';

const GET_TWEETS_FOR_USER_QUERY = gql`
    //TODO Implement query
  `;

export default class Tweets extends Component {
  
  //TODO Retrieve the user name passed to this component after clicking the Submit button.

  render() {
    return <Query query={GET_TWEETS_FOR_USER_QUERY} variables={{userName : userName}}>
      {({ data, loading }) => {
        const { tweetsByUserName } = data;

        if (loading || !tweetsByUserName) {
          return <div className="loader">Loading ...</div>;
        }

        return (
          <div className="stats-boxes">
            <div className="stats-box-row-1">
              <div className="stats-box">
                <div className="stats-box-heading">Most popular hashtag</div>
                <div id="most-popular-hashtag" className="stats-box-info">{this.getMostPopularHashTag(tweetsByUserName)}</div>
              </div>
              <div className="stats-box-right stats-box">
                <div className="stats-box-heading">Most Tweets in one days</div>
                <div id="most-tweets" className="stats-box-info">{this.getMostTweetsInOneDay(tweetsByUserName)}</div>
              </div>
            </div>
            <div>
              <div className="stats-box">
                <div className="stats-box-heading">Longest Tweet ID</div>
                <div id="longest-tweet-id" className="stats-box-info">{this.getLongestTweetIdPrefix(tweetsByUserName)}</div>
              </div>
              <div className="stats-box-right stats-box">
                <div className="stats-box-heading">Most days between Tweets</div>
                <div id="most-days" className="stats-box-info">{this.getMostDaysBetweenTweets(tweetsByUserName)}</div>
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  }

  /**
    * Retrieves the most popular hash tag tweeted by the given user.
    * Note that the string returned by this method should not include the hashtag itself.
    * For example, if the most popular hash tag is "#React", this method should return "React".
    * If there are no tweets for the given user, this method should return "N/A".
  */
  getMostPopularHashTag(tweets) {
    //TODO Implement
  }

  /**
    * Retrieves the highest number of tweets that were created on any given day by the given user.
    * A day's time period here is defined from 00:00:00 to 23:59:59
    * If there are no tweets for the given user, this method should return 0.
  */
  getMostTweetsInOneDay(tweets) {
    //TODO Implement
  }

  /**
    * Finds the first 6 characters of the ID of the longest tweet for the given user.
    * For example, if the ID of the longest tweet is "0b88c8e3-5ade-48a3-a5a0-8ce356c02d2a",
    * then this function should return "0b88c8".
    * You can assume there will only be one tweet that is the longest.
    * If there are no tweets for the given user, this method should return "N/A".
  */
  getLongestTweetIdPrefix(tweets) {
    //TODO Implement
  }

  /**
    * Retrieves the most number of days between tweets by the given user.
    * This should always be rounded down to the complete number of days, i.e. if the time is 12 days & 3 hours, this
    * method should return 12.
    * If there are no tweets for the given user, this method should return 0.
  */
  getMostDaysBetweenTweets(tweets) {
    //TODO Implement
  }

}