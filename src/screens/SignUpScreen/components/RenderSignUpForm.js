import React, { Component } from 'react';

import { styles } from '../../../constants';

import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import '../../../styles/AuthStyles/SignInUp.css';

export default class RenderForm extends Component {

    render() {
        const { handleChange, handleSubmit } = this.props;
        const {
            username,
            password,
            password_confirmation,

            usernameValid=true,
            passwordValid=true,
            password_confirmationValid=true,
        } = this.props.date;
        const errorText = 'This field is require';

        return (
            <div className='formPosition'>
                <div className='formBox'>
                    <MuiThemeProvider>
                        <AppBar title='Sign up' iconElementLeft={<div />} />
                    </MuiThemeProvider>

                    <form className='sign__form' onSubmit={handleSubmit}>
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

                            <TextField
                                floatingLabelText='Confirm password'
                                onChange={handleChange}
                                name={'password_confirmation'}
                                defaultValue={password_confirmation}
                                type='password'
                                errorText={password_confirmationValid ? '' : errorText}
                                fullWidth
                            />

                            <FlatButton
                                label='Sign up'
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
        )
    }
}