import React, { Component } from 'react';
import Tweets from '../Tweets';
import { Route } from 'react-router-dom';
import history from '../utils/history';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: "", trigger: false, error: null };
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    const { userName, trigger } = this.state;
    const trimUserName = userName?.trim();
    if (!trimUserName) {
      this.setState({ userName: trimUserName, error: "Invalid user name!" })
    } else {
      this.setState({ userName: trimUserName, trigger: !trigger, error: null })
      history.push("/tweets")
    }
  }

  handleOnChange = (e) => {
    this.setState({ userName: e.target.value, error: null })
  }

  render() {
    const { userName, trigger, error } = this.state;
    return (
    <div>
      <p className="tweets-analysis-service">Tweets Analysis Service </p>
      <form id="input-form" onSubmit={this.handleOnSubmit}>
        <div className="error-message">{error}</div>
        <div className="username-input-box"><input id="input-box" className="enter-user-name" onChange={this.handleOnChange} value={userName} placeholder={"Enter user name"}/></div>
        <div onClick={this.handleOnSubmit} className="submit-button"><span className="submit-button-text">SUBMIT</span></div>
      </form>
      <Route exact path='/tweets' render={() => (<Tweets userName={userName} trigger={trigger} />)} />
    </div>)
  }

}

export default App;