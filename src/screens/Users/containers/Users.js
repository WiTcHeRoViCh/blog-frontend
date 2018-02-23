import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import RenderUsers from '../components/RenderUsers';
import { bindActionCreators } from 'redux';
import { setUsers } from '../../../actions';


class Users extends Component {

    componentDidMount() {
        this.props.setUsers("http://localhost:3002/users", "GET");
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
    setUsers
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Users);
