import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class extends Component {
    render(){
        const { users } = this.props;
        const usersList = users.map( user => {
            return <li key={user._id}><Link to={`/users/${user._id}`}>{user.username}</Link></li>;
        });

        return (
            <ul>{usersList}</ul>
        );
    }
}