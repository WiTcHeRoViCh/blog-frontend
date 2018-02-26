import React, { Component } from 'react';

export default class RenderUser extends Component {
    render(){
        const { user } = this.props;
        const displayUser = user ?
            <div>{user.username}</div> :
            <div>User not found</div>;

        return (
            <div>
                {displayUser}
            </div>
        )
    }
}