import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { SIGN_IN_USER } from '../actions/actionTypes';


export default function (WrappedComponent) {

    class Wrapper extends Component {
        static propTypes = {
            failureSignIn: PropTypes.bool.isRequired,
            currentUser: PropTypes.object.isRequired,
        };

        isCurrentUser(){
            const { currentUser } = this.props;

            return currentUser.isOnline;
        }

        render() {
            const isSignInPath = this.props.location.pathname.includes('/sign_in');

            // below i copy props and delete some keys because i don't want to pass those key to WrappedComponent
            const props = {...this.props};
            delete props.failureSignIn;

            return (
                this.isCurrentUser() ?
                    <WrappedComponent {...props} /> :
                    this.props.failureSignIn && !isSignInPath && <Redirect to='/sign_in' />
            );

        }
    }

    const mapStateToProps = ({ currentUserReducer }) => {
        return {
            currentUser: currentUserReducer.currentUser,
            failureSignIn: currentUserReducer[`${SIGN_IN_USER}`].failure,
        };
    };


    return connect(mapStateToProps, null)(Wrapper);
};