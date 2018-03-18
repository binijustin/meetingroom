import React, { Component } from 'react';
import './App.css';
import { BrowserRouter , Route } from 'react-router-dom';

import Auth from './containers/Auth/Auth';
import MeetingRoom from './containers/MeetingRoom/MeetingRoom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={Auth} />
          <Route path="/home" exact component={MeetingRoom} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
