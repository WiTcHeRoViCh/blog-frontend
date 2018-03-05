import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import UserRouters from './UserRoutes';
import PostRoutes from './PostRoutes';

import AutoSignInWrapper from '../components/AutoSignInWrapper';

class ContentRouter extends Component {
    render(){
        return (
            <div>
                <UserRouters />
                <PostRoutes />
            </div>
        )
    }
}

export default withRouter(AutoSignInWrapper(ContentRouter));
