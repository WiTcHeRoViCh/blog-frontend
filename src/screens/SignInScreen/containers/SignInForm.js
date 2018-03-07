import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import RenderSignInForm from '../components/RenderSignInForm';

import { signInUser } from '../../../actions/authActions';
import { SIGN_IN_USER } from '../../../actions/actionTypes';

import '../../../styles/App.css';


class SignInForm extends Component {
    state = {
        username: '',
        password: '',

        redirectToMePath: false,

        usernameValid: undefined,
        passwordValid: undefined,
    };
    initialState = { ...this.state };

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        const isValid = value.length;

        this.setState({[name]: value, [`${name}Valid`]: isValid});
    };

    handleSubmit = e => {
        e.preventDefault();

        if (this.isValid()){
            const userInf = {
                username: this.state.username,
                password: this.state.password,
            };
            this.props.signInUser(userInf);

            this.setState({ redirectToMePath: true });
        }
    };

    isValid = () => {
        const { usernameValid, passwordValid } = this.state;

        return (usernameValid && passwordValid);
    };

    render(){
        const { redirectToMePath } = this.state;
        const { successSignIn } = this.props;

        return (
            <div>
                <RenderSignInForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    data={this.state}
                />

                {redirectToMePath && successSignIn && <Redirect to='/me' />}
            </div>
        );
    }
}

const mapStateToProps = ({ currentUserReducer }) => {
    return {
        successSignIn: currentUserReducer[`${SIGN_IN_USER}`].success,
    };
};


const mapDispatchToProps = dispatch => bindActionCreators({
    signInUser,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignInForm));
