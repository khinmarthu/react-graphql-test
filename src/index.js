import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Router } from 'react-router-dom';
import history from './utils/history';

import App from './App';

import './style.css';

const TWEETS_URL = 'https://app.codescreen.com/api/assessments/gql/tweets';
const httpLink = new HttpLink({
  uri: TWEETS_URL,
  headers: {
    authorization: `Bearer 8c5996d5-fb89-46c9-8821-7063cfbc18b1`,
  },
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={history}>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
