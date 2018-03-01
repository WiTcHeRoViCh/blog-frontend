import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RenderUser from '../components/RenderUser';
import { getUser } from '../../../actions/userActions';
import AuthWrapper from '../../../components/AuthWrapper';
import { GET_USER } from '../../../actions/actionTypes';

class User extends Component {

    componentDidMount(){
        const userParam = this.props.match.params.userParams;

        this.props.getUser(userParam);
    }

    render(){
        const { user, getUserStatus, match } = this.props;
        const { success, failure } = getUserStatus;

        const displayUser = (
            (failure) ?
                <div>User not found</div> :
                (success) ?
                    <RenderUser user={user} url={match.url} /> :
                    <div>Rendering...</div>
        );

        return (
            displayUser
        )
    }
}

const mapStateToProps = ({ userReducer }) => {
    return {
        user: userReducer.user,
        getUserStatus: userReducer[`${GET_USER}`],
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    getUser,
}, dispatch);

export default AuthWrapper(connect(mapStateToProps, mapDispatchToProps)(User));