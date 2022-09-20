import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import getMostOccur from '../utils/getMostOccur';
import getMostDaysBetweenTweets from '../utils/getMostDaysBetweenTweets';
import './style.css';

const GET_TWEETS_FOR_USER_QUERY = gql`
  query ($userName: String) {
    tweetsByUserName(userName: $userName) {
        id
        createdAt
        text
        user {
            id
            userName
        }
    }
  }
`;

export default class Tweets extends Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.trigger !== nextProps.trigger) {
      return true;
    }
    return false;
  }

  render() {
    const { userName } = this.props;
    return <Query query={GET_TWEETS_FOR_USER_QUERY} variables={{ userName }}>
      {({ data, loading, error }) => {
        const { tweetsByUserName } = data;

        if (loading || !tweetsByUserName) {
          return <div className="loader">Loading ...</div>;
        }
        if (error) return <div>Please try again!</div>;

        return (
          <div className="stats-boxes">
            <div className="stats-box-row-1">
              <div className="stats-box">
                <div className="stats-box-heading">Most popular hashtag</div>
                <div id="most-popular-hashtag" className="stats-box-info">{getMostOccur(tweetsByUserName, "popularHashTag")}</div>
              </div>
              <div className="stats-box-right stats-box">
                <div className="stats-box-heading">Most Tweets in one days</div>
                <div id="most-tweets" className="stats-box-info">{getMostOccur(tweetsByUserName, "tweetsInOneDay")}</div>
              </div>
            </div>
            <div>
              <div className="stats-box">
                <div className="stats-box-heading">Longest Tweet ID</div>
                <div id="longest-tweet-id" className="stats-box-info">{getMostOccur(tweetsByUserName, "tweetIdPrefix")}</div>
              </div>
              <div className="stats-box-right stats-box">
                <div className="stats-box-heading">Most days between Tweets</div>
                <div id="most-days" className="stats-box-info">{getMostDaysBetweenTweets(tweetsByUserName)}</div>
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  }
}