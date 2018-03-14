import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import './Auth.css'
import TextField from 'material-ui/TextField';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignIitems: 'center',
        background: '#eeeeee',
        height: '100vh',
    },
    formControl: {
        margin: theme.spacing.unit,
    },
    withoutLabel: {
        marginTop: theme.spacing.unit * 3,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
      },
});

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
            }
        }
    }


    render() {
        const { classes } = this.props;
        return (

            <div className="fullscreen">
                <div className="form-wrapper">
                    <h2 className="text-center">Meeting Room Solution </h2>
                    <form>
                        <TextField
                            id="email"
                            label="Email"
                            type="email"
                            className={classes.formControl}
                            fullWidth
                            
                            margin="normal"
                        />

                          <TextField
                            id="password"
                            label="Password"
                            type="password"
                            className={classes.textField}
                            margin="normal"
                        />

                       
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    </form>
                    <div className="row">
                        <div className="col">
                            <p className="text-primary pointer">View Meeting Rooms</p>
                        </div>
                        <div className="col-4">
                            <p className="text-primary pointer">Register</p>
                        </div>
                    </div>

                </div>
            </div >



        );
    };
}

Auth.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Auth);