import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/index';
//import {authStart}  from '../../store/actions/actionTypes'; 
import Login from '../../components/Login/Login';
import Aux from '../../hoc/Auxiliary/Auxiliary';

import { Redirect } from 'react-router-dom';

class Auth extends Component {

    componentDidUpdate() {
        if (this.props.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }

    state = {
        controls: {
            password: {
                value: '',
                valid: false,
                touched: false
            },
            username: {
                value: '',
                valid: false,
                touched: false
            },
        },

    }




    inputChangedHandler = (event, identifier) => {
        const updatedControls = {
            ...this.state.controls,
            [identifier]: {
                ...this.state.controls[identifier],
                value: event.target.value,
                touched: true
            }
        };


        this.setState({ controls: updatedControls });
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.onAuth(this.state.controls.username.value, this.state.controls.password.value);
    }


    render() {

        let view = (
            <Login
                submit={this.onSubmit}
                changed={this.inputChangedHandler}
                username={this.state.controls.username.value}
                password={this.state.controls.password.value}
            />
        )

        if (this.props.loading) {
            view = (<p>loading</p>)
        }

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }



        return (
            <Aux>
                {errorMessage}
                {view}
            </Aux>
        );
    };
}

//configuration which kind of infomation we need
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        error: state.auth.error,
        loading: state.auth.loading,


        username: state.auth.username,
        firstname: state.auth.firstname,
        lastname: state.auth.lastname,
        middlename: state.auth.middlename,
        mobileno: state.auth.mobileno,
        userId: state.auth.userId,
        emplId: state.auth.emplId,
        emailaddress: state.auth.emailaddress,
        userrole: state.auth.userrole,
        usertype: state.auth.usertype,
        token: state.auth.token,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (un, pass) => dispatch(actionCreators.loginUser(un, pass))
    };

};

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
