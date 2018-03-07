import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { autoSignIn } from '../actions/authActions';
import { SIGN_IN_USER } from '../actions/actionTypes';


export default function(WrappedComponent) {

    class AutoSignInWrapper extends Component {
        static propTypes = {
            autoSignIn: PropTypes.func.isRequired,
            currentUser: PropTypes.object.isRequired,
        };

        componentDidMount() {
            !this.isCurrentUser() ?
                this.props.autoSignIn() :
                null;
        }

        isCurrentUser(){
            const { currentUser } = this.props;

            return currentUser.isOnline;
        }

        render(){
            return (
                <WrappedComponent />
            )
        }
    }


    const mapStateToProps = ({ currentUserReducer }) => {
        return {
            currentUser: currentUserReducer.currentUser,
            signInStatus: currentUserReducer[`${SIGN_IN_USER}`],
        };
    };

    const mapDispatchToProps = dispatch => bindActionCreators({
        autoSignIn,
    }, dispatch);

    return connect(mapStateToProps, mapDispatchToProps)(AutoSignInWrapper);
}