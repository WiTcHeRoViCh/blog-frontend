import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RenderUsers from '../components/RenderUsers';
import { getUsers } from '../../../actions/userActions';
import AuthWrapper from '../../../components/AuthWrapper';


class Users extends Component {

    componentDidMount() {
        this.props.getUsers('http://localhost:3002/users', 'GET');
    }

    render(){
        const { users } = this.props;

        return (
            <RenderUsers users={users} />
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.userReducer.users,
    };
};
const mapDispatchToProps = dispatch => bindActionCreators({
    getUsers,
}, dispatch);

export default AuthWrapper(connect(mapStateToProps, mapDispatchToProps)(Users));
