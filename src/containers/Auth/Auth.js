import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
//import {authStart}  from '../../store/actions/actionTypes'; 
import Login from '../../components/Login/Login';
import Aux from '../../hoc/Auxiliary/Auxiliary';
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
        const controlForm = {
            ...this.state.controls
        }//get the keys shallow copy
        const updateFromElement = { ...controlForm[identifier] };
        updateFromElement.value = event.target.value;
        updateFromElement.touched = true;
        controlForm[identifier] = updateFromElement; // put the updated copy 

        // let formIsValid = true;
        // for (let inputIdentifier in updatedOrderForm) {
        //     formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        // }
        this.setState({ controls: controlForm }); //set state
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.onAuth(this.state.controls.username.value, this.state.controls.password.value);
    }

    render() {

        return (
            <Aux>
                {this.props.username}
                <Login
                    submit={this.onSubmit}
                    changed={this.inputChangedHandler}
                />
            </Aux>
        );
    };
}

//configuration which kind of infomation we need
const mapStateToProps = state => {
    return {
        token: state.auth.token,
        username: state.auth.username,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (un, pass) => dispatch(actionCreators.loginUser(un, pass))
    };

};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);