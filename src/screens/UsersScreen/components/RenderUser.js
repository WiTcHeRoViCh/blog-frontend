import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import '../../../styles/UsersStyles/User.css';

export default class RenderUser extends Component {
    renderUserPosts = () => {
        const { user, url } = this.props;
        const posts = user.posts.length > 3 ? user.posts.slice(0, 3) : user.posts;
        const wrapPosts = posts.map(post => (
            <div key={post._id} className='userPost'>
                <div>
                    <h3>{post.title}</h3>
                    <div>{post.text}</div>
                    <img src={post.photoURL} />
                </div>
            </div>
        ));

        return(
            <div className='userPostsBox'>
                {wrapPosts}
                <br />

                <Link to={`${url}/posts`}>
                    <MuiThemeProvider>
                        <FlatButton label={`All ${this.isCurrentUser() ? 'your' : user.username} posts`} fullWidth />
                    </MuiThemeProvider>
                </Link>
            </div>
        )
    };

    isCurrentUser = () => {
        const { user } = this.props;

        return user.hasOwnProperty('isOnline');
    };

    render(){
        const { user } = this.props;

        return (
            <div className='userPosition'>
                <div className='userBox'>
                    <div className='userGreetingBox'>
                        <h2 className='userGreeting'>
                            {this.isCurrentUser() ?
                                'Welcome on your page' :
                                user.greeting()
                            }
                        </h2>
                    </div>

                    <div className='userContent'>
                        <div className='userAvatarBox'>
                            <img src={user.avatarUrl} />
                        </div>

                        <div className='userInformation'>
                            <div>
                                {this.isCurrentUser() ?
                                    `Displaying status: ${user.status}` :
                                    `User status: ${user.status}`
                                }
                            </div>

                            <div>
                                {this.isCurrentUser() ?
                                    `Displaying information: ${user.description}` :
                                    `About user: ${user.description}`
                                }
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className='userPosts'>
                        <h3 className='titleElement'>Posts:</h3>
                        {user.posts.length ?
                            this.renderUserPosts() :
                            this.isCurrentUser() ?
                                <h3>You don't have any posts</h3> :
                                <h3>This user don't have any posts</h3>
                        }
                    </div>
                </div>
            </div>
        );
    }
}