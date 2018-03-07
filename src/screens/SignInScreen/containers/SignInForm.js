import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import RenderSignInForm from '../components/RenderSignInForm';

import { signInUser } from '../../../actions/authActions';
import { SIGN_IN_USER } from '../../../actions/actionTypes';


class SignInForm extends Component {
    state = {
        username: '',
        password: '',

        redirectToMePath: false,
    };
    initialState = { ...this.state };

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({[name]: value});
    };

    handleSubmit = e => {
        e.preventDefault();

        if (this.isValid()){
            this.props.signInUser(this.state);

            this.setState({ redirectToMePath: true });
        } else {
            console.log('no valid');
            // do smt when is no valid
        }
    };

    isValid = () => {//change this validation func in future
        const { username, password } = this.state;

        return (username.length > 0 && password.length > 0)
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
