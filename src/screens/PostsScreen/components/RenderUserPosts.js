import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class extends Component {
    render(){
        const { user, url } = this.props;
        const userPosts = user.posts.map( post => (
                <div key={post._id}>
                    <h3><Link to={`${url}/${post._id}`}>{post.title}</Link></h3>
                    <div>{post.text}</div>
                </div>
            )
        );

        return (
            <div>
                <div>{user.username} posts:</div>

                <div>
                    {userPosts}
                </div>
            </div>
        )
    }
}