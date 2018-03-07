import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import Users from '../screens/UsersScreen/containers/Users';
import User from '../screens/UsersScreen/containers/User';
import CurrentUser from '../screens/UsersScreen/containers/CurrentUser';

import { GET_USER_WITH_POSTS } from '../actions/actionTypes';
import { getUsers } from '../actions/userActions';
import { getUserWithPosts } from '../actions/postActions';


class UserRoutes extends Component {

    render(){
        const {
            user,
            users,
            currentUser,
            getUsers,
            getUserWithPosts,
            getUserWithPostsStatus
        } = this.props;

        return (
            <div>
                <Route exact path='/users' render={props => <Users
                    users={users}
                    getUsers={getUsers}
                    {...props} />}
                />
                <Route exact path='/users/:userParams' render={props => <User
                    getUserWithPosts={getUserWithPosts}
                    getUserWithPostsStatus={getUserWithPostsStatus}
                    user={user}
                    {...props}
                />} />
                <Route exact path='/me' render={props => <CurrentUser
                    currentUser={currentUser}
                    {...props}
                />} />
            </div>
        );
    }
}

const mapStateToProps = ({ userReducer, currentUserReducer }) => {
    return {
        users: userReducer.users,
        user: userReducer.user,
        getUserWithPostsStatus: userReducer[`${GET_USER_WITH_POSTS}`],

        currentUser: currentUserReducer.currentUser,
    };
};
const mapDispatchToProps = dispatch => bindActionCreators({
    getUsers, getUserWithPosts,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserRoutes));
