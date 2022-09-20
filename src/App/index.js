import React, { Component } from 'react';
import Tweets from '../Tweets';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style.css';

class App extends Component {
  render() {
    return <Router>
        <div>
          <p className="tweets-analysis-service">Tweets Analysis Service </p>
          {/* 
           TODO Navigate to the Tweets component, passing in the user name that was entered into the user name input box.
           This must be implemented as a Form. 
           The id of the form must be "input-form".
           The id of the user name input box must be "input-box".
           Note we use <div> below for display purposes only.
          */}
          <div className="username-input-box"><span className="enter-user-name">Enter user name</span></div>
          <div onClick={this.onSubmit} className="submit-button"><span className="submit-button-text">SUBMIT</span></div>
          <Route exact path='/tweets' component={Tweets} />
        </div>
      </Router>
  }

}

export default App;