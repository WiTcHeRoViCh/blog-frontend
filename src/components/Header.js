import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signOutUser } from '../actions/authActions';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    handleClick(){
        this.props.signOutUser();
    }

    render() {
        const { currentUser } = this.props;

        return (
            <header>
                <div>Header</div>
                { currentUser.isOnline ?
                    <div>
                        <button onClick={() => this.handleClick()}>Sign out</button>
                        <Link to='/users'>Users</Link>
                    </div>
                    :
                    <div>
                        <Link to='/sign_in'>Sign in</Link>
                        <Link to='/sign_up'>Sign up</Link>
                    </div>
                }
                <Link to='/'>Home page</Link>
            </header>
        )
    }
}

const mapStateToProps = ({ currentUserReducer }) => {
    return {
        currentUser: currentUserReducer.currentUser
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    signOutUser
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
