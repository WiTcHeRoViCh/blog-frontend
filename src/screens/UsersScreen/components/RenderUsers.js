import React, { Component } from 'react';

export default class RenderUsers extends Component {
    render(){
        const { users } = this.props;
        const usersList = users.map((user, id) => {
            return <li key={id}>{user.username}</li>
        });

        return (
            <ul>{usersList}</ul>
        )
    }
}