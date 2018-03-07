import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

import '../../../styles/UsersStyles/User.css';
import '../../../styles/UsersStyles/Users.css';

export default class RenderUsers extends Component {

    renderUsers = () => {
        const { users } = this.props;

        return users.map( user => (
                <Link to={`/users/${user._id}`} key={user._id}>
                    <ListItem leftAvatar={<Avatar src={user.avatarUrl} />}>
                        {user.username}
                    </ListItem>
                </Link>
            )
        )
    };

    render(){
        return (
            <div className='usersPosition userPosition'>
                <div className='userBox usersBox'>
                    <div className='usersTitleBox userGreetingBox'>
                        <h2 className='usersTitle userGreeting'>All users</h2>
                    </div>

                    <div className='allUsersContent'>
                        <MuiThemeProvider>
                            <List>{this.renderUsers()}</List>
                        </MuiThemeProvider>
                    </div>
                </div>
            </div>
        );
    }
}