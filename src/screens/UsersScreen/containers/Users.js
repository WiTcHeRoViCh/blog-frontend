import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RenderUsers from '../components/RenderUsers';
import { getUsers } from '../../../actions/userActions';


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
        users: state.users.users,
    }
};
const mapDispatchToProps = dispatch => bindActionCreators({
    getUsers
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Users);
