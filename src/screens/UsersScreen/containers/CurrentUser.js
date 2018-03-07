import React, { Component } from 'react';
import RenderUser from '../components/RenderUser';
import AuthWrapper from '../../../components/AuthWrapper';
import { withRouter } from 'react-router-dom';


class CurrentUser extends Component {

    render(){
        const { currentUser, match } = this.props;

        return (
            currentUser.isOnline && <RenderUser user={currentUser} url={match.url} />
        )
    }
}

export default withRouter(AuthWrapper(CurrentUser));
