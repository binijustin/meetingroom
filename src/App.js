import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Auth from './containers/Auth/Auth';
import Layout from './hoc/Layout/Layout';
import MeetingRoom from './containers/MeetingRoom/MeetingRoom';
import EventBuilder from './containers/EventBuilder/EventBuilder';

class App extends Component {
  state = {
    auth: false
  }

  render() {
    console.log(this.props.isAuthenticated);

    let routes = (
      <Switch>
        {/* <Route path="/roomlist" component={Auth} /> */}
        <Route path="/" exact component={Auth} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/dashboard" component={MeetingRoom} />
          <Route path="/manage-event" component={EventBuilder} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <div className="App">
        {routes}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
}

export default connect(mapStateToProps)(App);
