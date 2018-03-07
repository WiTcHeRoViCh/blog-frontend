import React, { Component } from 'react';
import RenderUsers from '../components/RenderUsers';
import AuthWrapper from '../../../components/AuthWrapper';


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

export default AuthWrapper(Users);
