import React, { Component } from 'react';
import { connect } from 'react-redux';
import RenderForm from '../components/RenderForm';
import { singUpUser } from "../../../actions/userActions";
import { bindActionCreators } from "redux";


class SignUpForm extends Component {
    state = {
        username: '',
        password: '',
        password_confirmation: '',
    };
    initialState = { ...this.state };

        handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({[name]: value})
    };

    handleSubmit = e => {
        e.preventDefault();

        if (this.isValid()){
            this.props.singUpUser(this.state);
        } else {
            console.log("no valid");
            //do smt when is no valid
        }

        this.setState(this.initialState);
    };

    isValid = () => {//change this validation func in future
        const { password, password_confirmation, username } = this.state;

        return ((password && password_confirmation && username.length > 0) && (password === password_confirmation));
    };

    render(){
        return(
            <div>
                <RenderForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    date={this.state}
                />
            </div>
        )
    };
}

const mapDispatchToProps = dispatch => bindActionCreators({
    singUpUser
}, dispatch);

export default connect(null, mapDispatchToProps)(SignUpForm);
