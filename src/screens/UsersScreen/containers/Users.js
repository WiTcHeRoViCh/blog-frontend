import React, { Component } from 'react';
import RenderUsers from '../components/RenderUsers';

class Users extends Component {
    componentDidMount() {
        const { getUsers } = this.props;

        getUsers();
    }

    render(){
        const { users } = this.props;

        return (
            <RenderUsers users={users} />
        );
    }
}

export default Users;
