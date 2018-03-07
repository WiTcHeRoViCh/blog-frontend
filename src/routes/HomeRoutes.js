import React  from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import Home from '../screens/HomeScreen/components/Home';
import { getUsersPosts } from '../actions/postActions';

const HomeRoutes = props => (
    <Route exact path='/' render={() => <Home {...props} />} />
);

const mapStateToProps = ({ postReducer }) => {
    return {
        posts: postReducer.posts,
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    getUsersPosts,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeRoutes));
