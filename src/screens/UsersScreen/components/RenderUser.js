import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class RenderUser extends Component {
    render(){
        const { user, url } = this.props;

        return (
            <div>
                <div>{user.username}</div>

                <Link to={`${url}/posts`}>{user.username} posts</Link>
            </div>
        );
    }
}