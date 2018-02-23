import React, { Component } from 'react';

export default class RenderSignInForm extends Component {
    render(){
        const { handleChange, handleSubmit } = this.props;
        const { username, password } = this.props.data;

        return (
            <form className="sign_in_form" onSubmit={handleSubmit}>
                <input
                    type={'text'}
                    name={'username'}
                    placeholder={'Write username'}
                    value={username}
                    onChange={handleChange}
                />
                <input
                    type={'password'}
                    name={'password'}
                    placeholder={'Write password'}
                    value={password}
                    onChange={handleChange}
                />
                <input type="submit" value={"Sign in"} />
            </form>
        );
    }
}