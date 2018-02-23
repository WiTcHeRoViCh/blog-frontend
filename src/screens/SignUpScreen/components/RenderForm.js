import React, { Component } from 'react';

export default class RenderForm extends Component {

    render() {
        const { handleChange, handleSubmit } = this.props;
        const { username, password, password_confirmation } = this.props.date;

        return (
            <form className="sign_up_form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder={"Write username"}
                    name={"username"}
                    value={username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder={"Write password"}
                    name={"password"}
                    value={password}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder={"Repeat password"}
                    name={"password_confirmation"}
                    value={password_confirmation}
                    onChange={handleChange}
                />

                <input type="submit" value="Sing up" />
            </form>
        )
    }
}