import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import UserPosts from '../screens/PostsScreen/containers/UserPosts';

import { getUserWithPosts, addUserPost, deleteUserPost, editUserPost } from '../actions/postActions';

class PostRoutes extends Component {

    render() {
        const { currentUser } = this.props;

        return (
            <div>
                <Route exact
                    path='/users/:userParams/posts'
                    render={props => (
                        <UserPosts
                            {...this.props}
                            {...props}
                        />
                    )}
                />

                <Route exact
                    path='/me/posts'
                    render={props => (
                        <UserPosts
                            {...this.props}
                            {...props}
                            user={currentUser}
                        />
                    )} />
            </div>
        );
    }
}

const mapStateToProps = ({ userReducer, currentUserReducer }) => {
    return {
        user: userReducer.user,

        currentUser: currentUserReducer.currentUser,
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    getUserWithPosts, addUserPost, deleteUserPost, editUserPost
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostRoutes));
