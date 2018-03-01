import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthWrapper from '../../../components/AuthWrapper';
import { getUserPosts } from '../../../actions/postActions';
import RenderUserPosts from  '../components/RenderUserPosts';

class UserPosts extends Component {

    componentDidMount(){
        const userParam = this.props.match.params.userParams;

        this.props.getUserPosts(userParam);
    }

    render(){
        const { user, match } = this.props;

        return (
            <RenderUserPosts user={user} url={match.url} />
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


export default AuthWrapper(connect(mapStateToProps, mapDispatchToProps)(UserPosts));