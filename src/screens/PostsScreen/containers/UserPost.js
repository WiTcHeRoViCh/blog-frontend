import React, { Component } from 'react';
import { connect } from 'react-redux';
import RenderUserPost from '../components/RenderUserPost';
import AuthWrapper from '../../../components/AuthWrapper';

export default class UserPost extends Component {

    componentDidMount(){
        const postParams = this.props.match.postParams;
    }

    render(){
        const { match } = this.props;

        return (
            <RenderUserPost />
        )
    }
}

// export default AuthWrapper(connect(null, null)(UserPost))
