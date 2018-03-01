import React, { Component, Fragment } from 'react';
import AuthWrapper from '../../../components/AuthWrapper';
import RenderUserPosts from '../components/RenderUserPosts';

export default class UserPosts extends Component {

    render(){
        console.log("props", this.props);
        const { user, match } = this.props;

        return (
            <RenderUserPosts user={user} url={match.url} />
        );
    }
}
