import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import RenderForm from '../components/RenderSignUpForm';
import { singUpUser } from "../../../actions/authActions";
import { SIGN_UP_USER } from "../../../actions/actionTypes";


class SignUpForm extends Component {
    state = {
        username: '',
        password: '',
        password_confirmation: '',

        redirectToSignInPath: false,
    };

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({[name]: value})
    };

    handleSubmit = e => {
        e.preventDefault();

        if (this.isValid()){
            this.props.singUpUser(this.state);
            this.setState({ redirectToSignInPath: true });
        } else {
            console.log("no valid");
            //do smt when is no valid
        }
    };

    isValid = () => {//change this validation func in future
        const { password, password_confirmation, username } = this.state;

        return ((password && password_confirmation && username.length > 0) && (password === password_confirmation));
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
