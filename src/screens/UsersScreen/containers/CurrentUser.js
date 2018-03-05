import React, { Component } from 'react';
import RenderUser from '../components/RenderUser';

export default class User extends Component {

    render(){
        const { currentUser, match } = this.props;

        return (
            currentUser.isOnline && <RenderUser user={currentUser} url={match.url} />
        )
    }
}
