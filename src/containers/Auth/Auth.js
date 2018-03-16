import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';

class Auth extends Component {
    state = {
        controls: {
            email: {
                value: '',
                valid: false,
                touched: false
            },
            password: {
                value: '',
                valid: false,
                touched: false
            },
            userName: {
                value: '',
                valid: false,
                touched: false
            },
            fullName: {
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
        this.props.onAuth(this.state.controls.userName.value, this.state.controls.fullName.value);
        // localStorage.setItem('myData', 'qqq');
        // localStorage.setItem ('fullname', 'www');

    }

    render() {

        return (

            <form onSubmit={this.onSubmit}>
                {this.props.fullName}
                <input type="text"
                    onChange={(event) => this.inputChangedHandler(event, 'userName')}
                    value={this.state.userName} />
                <input type="text"
                    onChange={(event) => this.inputChangedHandler(event, 'fullName')}
                    value={this.state.fullName} />
                <input type="submit" value="submit" />
            </form>


        );
    };
}

//configuration which kind of infomation we need
const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userName: state.auth.username,
        fullName: state.auth.fullname
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (un, fn) => dispatch({ type: actionTypes.AUTH_START, userName: un, fullName: fn })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);