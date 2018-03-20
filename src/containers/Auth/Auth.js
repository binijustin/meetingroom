import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
//import {authStart}  from '../../store/actions/actionTypes'; 
import Login from '../../components/Login/Login';
import Aux from '../../hoc/Auxiliary/Auxiliary';

import { Redirect } from 'react-router-dom';

class Auth extends Component {
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
        // const controlForm = {
        //     ...this.state.controls
        // }//get the keys shallow copy
        // const updateFromElement = { ...controlForm[identifier] };
        // updateFromElement.value = event.target.value;
        // updateFromElement.touched = true;
        // controlForm[identifier] = updateFromElement; // put the updated copy 

        // let formIsValid = true;
        // for (let inputIdentifier in updatedOrderForm) {
        //     formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        // }
        //this.setState({ controls: controlForm }); //set state
        const updatedControls = {
            ...this.state.controls,
            [identifier]: {
                ...this.state.controls[identifier],
                value: event.target.value,
                touched: true
            }
        };


        this.setState( { controls: updatedControls } );
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

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to="/dashboard" />
        }

        return (
            <Aux>
                {authRedirect}
                {errorMessage}
                {view}
            </Aux>
        );
    };
}

//configuration which kind of infomation we need
const mapStateToProps = state => {
    return {
        token: state.auth.token,
        username: state.auth.username,
        isAuthenticated: state.auth.token !== null,
        error: state.auth.error,
        authRedirectPath: state.auth.authRedirectPath,
        loading: state.auth.loading
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (un, pass) => dispatch(actionCreators.loginUser(un, pass))
    };

};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);