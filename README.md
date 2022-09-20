# React-CodeScreen-Tweets-GraphQL
React GraphQL tweets assessment.

## Application Overview

The CodeScreen Tweets Analysis Service is a `React` application that allows users to display certain statistics about the tweets posted by a given user name.

It uses the following libraries / technologies - don't hesitate to refer to the docs if you need to:

* [React](https://reactjs.org/) - JavaScript library for building user interfaces.
* [GraphQL](https://graphql.org/) - Data query and manipulation language & runtime for APIs.
* [Apollo Client](https://www.apollographql.com/client/) - GraphQL client for React.
* [Cypress](https://www.cypress.io/) - End to End front-end testing framework.
<br><br>

The application landing page contains a Form consisting of an input text box and a submit button:
<br><br>

![App Homepage](/public/app_homepage.png)
<br><br>
Once you enter a user name into the input box and submit the form, various statistics about the tweets posted by that user should be displayed:

![App Stats Display](/public/app_stats_display.png)
<br><br>
The full tweets data set, for a given user name, is retrieved from the CodeScreen Tweets GraphQL API. <br><br>
This API is a service that contains one endpoint,`POST` https://app.codescreen.com/api/assessments/gql/tweets, which returns the details of all tweets for a given user. The user name is passed in as a GraphQL variable called `userName`.

For authentication, you need to send your API token in the `Authorization HTTP header` using the [Bearer authentication scheme](https://tools.ietf.org/html/draft-ietf-oauth-v2-bearer-20#section-2.1). Your API token is `8c5996d5-fb89-46c9-8821-7063cfbc18b1`.

When you send an `HTTP POST` request to the endpoint above, the response will be a `200 OK`, which includes a body containing a list of tweet data in `JSON` format. 
<br><br> 

An example response is the following:

    {
        "errors": [],
        "data": {
            "tweetsByUserName": [
                {
                    "id": "0b88c8e3-5ade-48a3-a5a0-8ce356c02d2a",
                    "createdAt": "2018-02-03T10:15:30",
                    "text": "Chrome or Firefox? #Browsers",
                    "user": {
                        "id": "75343078-b5dd-306f-a3f9-8203a3915144",
                        "userName": "joe_smith"
                    }
                },
                {
                    "id": "ac6b6139-d204-4171-982e-3cfc9f528e0d",
                    "createdAt": "2018-02-03T10:25:36",
                    "text": "Bought a real Christmas tree, smells a lot more christmassy! #Xmas",
                    "user": {
                        "id": "75343078-b5dd-306f-a3f9-8203a3915144",
                        "userName": "joe_smith"
                    }
                }
            ]
        }
    }

The full GraphQL schema can be viewed [here](src/Tweets/tweetsSchema.graphqls).

This application uses the `Apollo Client` to interact with the Tweets GraphQL API. This has been already set up for you, see [index.js](src/index.js).

<br>

**Note** that if no tweets are found for the given user, the following should be displayed:

![App Stats Display](/public/app_stats_display_no_user.png)
<br><br>

## Your Task

This assessment is broken into the following **three** tasks:

**1.** Implement the functionality to navigate to the [Tweets component](src/Tweets/index.js) when the Form is submitted, see [App/index.js](src/App/index.js).<br><br>
**2.** Implement the GraphQL query in [Tweets/index.js](src/Tweets/index.js) to return all tweets data for the user name that was entered.<br><br>
**3.** Implement ALL the methods in [Tweets/index.js](src/Tweets/index.js) to calculate the various statistics about the tweets posted by the user name that was entered.

All tests in the [Tweets.spec.js](cypress/integration/Tweets.spec.js) test file should pass if your solution has been implemented correctly.

## Requirements
The [Tweets.spec.js](cypress/integration/Tweets.spec.js) file should not be modified. If you would like to add your own E2E tests, you
can add these in a separate file in the `cypress/integrations` folder.

You may also add your own unit test files, using the [Jest](https://jestjs.io/) framework, inside the `src` folder.

All required styling is already in place, so there is no need to add or modify any of the existing `CSS` files.

The `package.json` file should only be modified to add any third-party dependencies required for your solution. None of the existing dependencies and versions should be changed. Note that other dependencies (that are not currently in `package.json`) are not required to implement a working solution.

## Running
Run `npm install` to install all dependencies, then run `npm start` to build and launch the React application locally.<br> Navigate to http://localhost:3000/. The app will automatically reload if you change any of the source files.

## Tests
Run `npm run cy:test` to run the Cypress E2E test files. These should all pass if your solution has been implemented correctly.

##

This test should take no longer than 2 hours to complete successfully.

Good luck!

## License

At CodeScreen, we strongly value the integrity and privacy of our assessments. As a result, this repository is under exclusive copyright, which means you **do not** have permission to share your solution to this test publicly (i.e., inside a public GitHub/GitLab repo, on Reddit, etc.). <br>

## Submitting your solution

Please push your changes to the `main branch` of this repository. You can push one or more commits. <br>

Once you are finished with the task, please click the `Complete task` link on <a href="https://app.codescreen.com/candidate/645c4df4-d271-4eb6-8393-6e22ced0c190" target="_blank">this screen</a>.