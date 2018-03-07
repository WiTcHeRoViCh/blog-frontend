import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signOutUser } from '../actions/authActions';
import { bindActionCreators } from 'redux';
import { Link, Redirect } from 'react-router-dom';
import { SIGN_OUT_USER } from '../actions/actionTypes';

import { styles } from '../constants';

import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import '../styles/Header.css';

const { headerElemetsStyles } = styles;

class Header extends Component {
    state = {
        redirectToSignInPath: false,
    };

    handleSignOut = () => {
        this.props.signOutUser();

        this.setState({ redirectToSignInPath: true });
    };


    renderHomePageLink = () => (
        <h2 className='homePageLink'><Link to='/'>Main page</Link></h2>
    );

    renderCurrentUserMenu = () => (
        <IconMenu iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}>
            <MenuItem>
                <Link style={{color: 'black'}} to='/users'>Users</Link>
            </MenuItem>

            <MenuItem>
                <Link style={{color: 'black'}} to='/me'>Me page</Link>
            </MenuItem>

            <MenuItem>
                <Link style={{color: 'black'}} to='/me/posts'>Me posts</Link>
            </MenuItem>

            <MenuItem onClick={this.handleSignOut}>
                Sign out
            </MenuItem>
        </IconMenu>
    );

    renderAnonymousMenu = () => (
        <div className='headerAuthElement' >
            <Link to='/sign_in'>Sign in</Link>
            <Link to='/sign_up'>Sign up</Link>
        </div>
    );

    render() {
        const { currentUser, successSignOut } = this.props;
        const { redirectToSignInPath } = this.state;

        return (
            <header>
                <MuiThemeProvider>
                    <AppBar iconStyleLeft={headerElemetsStyles}
                            iconElementLeft={this.renderHomePageLink()}
                            iconElementRight={currentUser.isOnline ?
                                this.renderCurrentUserMenu() :
                                this.renderAnonymousMenu()
                            }

                            iconStyleRight={currentUser.isOnline ?
                                {} :
                                headerElemetsStyles
                            }

                    />
                </MuiThemeProvider>

                {redirectToSignInPath && successSignOut && <Redirect to='/sign_in' />}
            </header>
        )
    }
}

const mapStateToProps = ({ currentUserReducer }) => {
    return {
        currentUser: currentUserReducer.currentUser,
        successSignOut: currentUserReducer[`${SIGN_OUT_USER}`].success,
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    signOutUser,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
