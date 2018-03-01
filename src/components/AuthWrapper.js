import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignInForm from '../screens/SignInScreen/containers/SignInForm';
import { getCurrentUser } from '../actions/authActions';

export default function (WrappedComponent) {

    class Wrapper extends Component {
        componentDidMount() {
            !this.isCurrentUser() ?
                this.props.getCurrentUser() :
                null;
        }

        isCurrentUser(){
            const { currentUser } = this.props;

            return currentUser.isOnline;
        }

        render() {
            return (
                this.isCurrentUser() ?
                    <WrappedComponent {...this.props} /> :
                    null
            );

        }
    }

    const mapStateToProps = ({ currentUserReducer }) => {
        return {
            currentUser: currentUserReducer.currentUser,
            token: currentUserReducer.token,
        };
    };

    const mapDispatchToProps = dispatch => bindActionCreators({
        getCurrentUser,
    }, dispatch);

    return connect(mapStateToProps, mapDispatchToProps)(Wrapper);
};