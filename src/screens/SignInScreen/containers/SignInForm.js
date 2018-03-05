import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import RenderSignInForm from '../components/RenderSignInForm';

import { signInUser } from '../../../actions/authActions';

class SignInForm extends Component {
    state = {
        username: '',
        password: '',
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
        } else {
            console.log('no valid');
            // do smt when is no valid
        }

        this.setState(this.initialState);
    };

    isValid = () => {//change this validation func in future
        const { username, password } = this.state;

        return (username.length > 0 && password.length > 0)
    };

    render(){
        return (
            <div>
                <RenderSignInForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    data={this.state}
                />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    signInUser
}, dispatch);

export default withRouter(connect(null, mapDispatchToProps)(SignInForm));
