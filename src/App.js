import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'typeface-roboto';
import Aux from './hoc/Auxiliary/Auxiliary';
import Auth from './containers/Auth/Auth';
import MeetingRoom from './containers/MeetingRoom/MeetingRoom';
class App extends Component {

  render() {
    return (
      <Aux>
        <Switch>
        <Route path="/meetingroom" component={MeetingRoom} />
          <Route path="/" component={Auth} />
        </Switch>

      </Aux>
    );
  }
}

export default App;
