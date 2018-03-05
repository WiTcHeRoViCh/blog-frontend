import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SIGN_IN_USER } from '../actions/actionTypes';

export default function (WrappedComponent) {

    class Wrapper extends Component {
        static propTypes = {
            currentUserFailueStatus: PropTypes.bool.isRequired,
            currentUser: PropTypes.object.isRequired,
        };

        isCurrentUser(){
            const { currentUser } = this.props;

            return currentUser.isOnline;
        }

        render() {
            // below i copy props and delete some keys because i don't want to pass those key to WrappedComponent
            const props = {...this.props};
            delete props.currentUser;
            delete props.currentUserFailueStatus;

            return (
                this.isCurrentUser() ?
                    <WrappedComponent {...props} /> :
                    this.props.currentUserFailueStatus && <div>You not authorized!</div>
            );

        }
    }

    const mapStateToProps = ({ currentUserReducer }) => {
        return {
            currentUser: currentUserReducer.currentUser,
            currentUserFailueStatus: currentUserReducer[`${SIGN_IN_USER}`].failure,
        };
    };


    return connect(mapStateToProps, null)(Wrapper);
};