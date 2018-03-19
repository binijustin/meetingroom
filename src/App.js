import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Auth from './containers/Auth/Auth';
import MeetingRoom from './containers/MeetingRoom/MeetingRoom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/home" component={MeetingRoom} />
          <Route path="/" component={Auth} />
        </Switch>
      </div>
    );
  }
}

export default App;
