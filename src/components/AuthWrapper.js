import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignInForm from '../screens/SignInScreen/containers/SignInForm';

export default function (WrappedComponent) {

    class Wrapper extends Component {

        checkToken(){
            const localStorageToken = localStorage.getItem('token');
            const reducerToken = this.props.token;

            return ((localStorageToken === reducerToken) && reducerToken && localStorageToken );
        }

        render() {
            return (
                this.checkToken() ?
                    <WrappedComponent {...this.props} /> :
                    <SignInForm />
            );

        }
    }

    const mapStateToProps = ({ currentUserReducer }) => {
        return {
            currentUser: currentUserReducer.currentUser,
            token: currentUserReducer.token,
        };
    };

    return connect(mapStateToProps, null)(Wrapper);
};