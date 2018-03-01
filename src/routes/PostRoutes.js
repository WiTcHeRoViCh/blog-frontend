import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import UserPosts from '../screens/PostsScreen/containers/UserPosts';
import UserPost from '../screens/PostsScreen/containers/UserPost';
import { getUserPosts } from '../actions/userActions';


class PostRoutes extends Component {
    componentDidMount() {
    }

    render() {
        const { user } = this.props;

        return (
            <div>
                <Route
                    path='/users/:userParams/posts'
                    render={props => (
                        <UserPosts
                            match={props.match}
                            location={props.location}
                            history={props.history}
                            user={user}
                        />
                    )}
                />
                <Route exact path='/users/:userParams/posts/:postParams' component={UserPost} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    getUserPosts,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostRoutes);
