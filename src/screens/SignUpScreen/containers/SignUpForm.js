import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import RenderForm from '../components/RenderSignUpForm';

import { singUpUser } from '../../../actions/authActions';
import { SIGN_UP_USER } from '../../../actions/actionTypes';

import '../../../styles/App.css';

class SignUpForm extends Component {
    state = {
        username: '',
        password: '',
        password_confirmation: '',

        redirectToSignInPath: false,

        usernameValid: undefined,
        passwordValid: undefined,
        password_confirmationValid: undefined,
    };

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        const isValid = value.length;

        this.setState({[name]: value, [`${name}Valid`]: isValid});
    };

    handleSubmit = e => {
        e.preventDefault();

        if (this.isValid()) {
            const {username, password, password_confirmation} = this.state;
            const signUpParams = {
                username,
                password,
                password_confirmation,
            };

            this.props.singUpUser(signUpParams);
            this.setState({redirectToSignInPath: true});
        }
    };

    isValid = () => {
        const { passwordValid, password_confirmationValid, usernameValid } = this.state;

        return (password_confirmationValid && passwordValid && usernameValid);
    };

    render(){
        const { redirectToSignInPath } = this.state;
        const { successSignUp } = this.props;

        return(
            <div>
                <RenderForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    date={this.state}
                />

                {redirectToSignInPath && successSignUp && <Redirect to='/sign_in' />}
            </div>
        )
    };
}

const mapStateToProps = ({ userReducer }) => {
    return {
        successSignUp: userReducer[`${SIGN_UP_USER}`].success,
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    singUpUser
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
