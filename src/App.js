import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';

import * as actionCreators from './store/actions/index';

import Auth from './containers/Auth/Auth';
import Layout from './hoc/Layout/Layout';
import MeetingRoom from './containers/MeetingRoom/MeetingRoom';
import EventBuilder from './containers/EventBuilder/EventBuilder';
import Logout from './containers/Auth/Logout/Logout';


class App extends Component {


  componentWillMount() {
    console.log("will mount");
    const cookies = new Cookies();
    var _101 = cookies.get('_101');
    var tkn = cookies.get('tkn');

    if (_101 && tkn) {
      this.props.loginCookies(_101, tkn);
    }
  }



  render() {

    let routes = (
      <Switch>
        {/* <Route path="/roomlist" component={Auth} /> */}
        <Route path="/" exact component={Auth} />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        
        <Layout>
        <Switch>
            <Route path="/" exact component={MeetingRoom} />
            <Route path="/manage-event" component={EventBuilder} />
            <Route path="/logout" component={Logout} />
            <Route  render={() => <p>q</p>} />
      
        </Switch>
        </Layout>
      );
    }



    return (
      <div className="App">
        {routes}

        {/* <Switch>
          <Route path="/" exact component={Auth} />
          <Layout>
            <Route path="/dashboard" component={MeetingRoom} />
            <Route path="/manage-event" component={EventBuilder} />
            <Route path="/logout" component={Logout} />

          </Layout>
        </Switch> */}

      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    loginCookies: (_101, tkn) => dispatch(actionCreators.loginCookies(_101, tkn))
  };

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

