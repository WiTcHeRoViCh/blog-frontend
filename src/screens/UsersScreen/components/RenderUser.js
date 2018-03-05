import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class RenderUser extends Component {
    render(){
        const { user, url } = this.props;
        const displayCurrentUserMenu = (
            <div>
                <h3>Your page</h3>
                <Link to='#'>Edit profile</Link>
            </div>
        );

        return (
            <div>
                { user.hasOwnProperty('isOnline') && user.isOnline && displayCurrentUserMenu }
                <div>{user.username}</div>

                <Link to={`${url}/posts`}>{user.username} posts</Link>
            </div>
        );
    }
}