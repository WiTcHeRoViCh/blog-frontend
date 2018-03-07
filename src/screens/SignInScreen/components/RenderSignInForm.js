import React, { Component } from 'react';

import { styles } from '../../../constants';

import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import '../../../styles/AuthStyles/SignInUp.css';


export default class RenderSignInForm extends Component {
    render(){
        const { handleChange, handleSubmit } = this.props;
        const { username, password, usernameValid=true, passwordValid=true } = this.props.data;
        const errorText = 'This field is require';

        return (
            <div className='formPosition'>
                <div className='formBox'>
                    <MuiThemeProvider>
                        <AppBar title='Sign in' iconElementLeft={<div />} />
                    </MuiThemeProvider>

                    <form className='sign__form' onSubmit={handleSubmit} autoComplete='off'>
                        <MuiThemeProvider>
                            <TextField
                                floatingLabelText='Write username'
                                onChange={handleChange}
                                name={'username'}
                                defaultValue={username}
                                errorText={usernameValid ? '' : errorText}
                                fullWidth
                            />

                            <TextField
                                floatingLabelText='Write password'
                                onChange={handleChange}
                                name={'password'}
                                defaultValue={password}
                                type='password'
                                errorText={passwordValid ? '' : errorText}
                                fullWidth
                            />

                            <FlatButton
                                label='Sign in'
                                labelPosition='before'
                                style={styles.submitButton}
                                containerElement='label'
                            >
                                <input type='submit' style={styles.submitInput} />
                            </FlatButton>
                        </MuiThemeProvider>
                    </form>
                </div>
            </div>
        );
    }
}