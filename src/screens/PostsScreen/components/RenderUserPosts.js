import React, { Component } from 'react';

import PostForm from './PostForm';

import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

import '../../../styles/PostsStyles/UserPosts.css';
import '../../../styles/UsersStyles/User.css';

export default class extends Component {
    static displayName = 'RenderUserPosts';

    isCurrentUser = () => {
        const { user } = this.props;

        return user.hasOwnProperty('isOnline');
    };


    renderUserPosts = () => {
        const { user, state } = this.props;

        return user.posts.map(post =>
            (state.displayEditForm && state.editedPostId === post._id) ?
                this.renderEditPostForm(post) :
                this.renderUserPost(post)
        )
    };

    renderUserPost = post => (
            <div key={post._id} className='userPost'>
                <div className='postContent'>
                    <h2>{post.title}</h2>

                    <div>{post.text}</div>
                    <img src={post.photoURL} />
                </div>

                { this.isCurrentUser() ?
                    <div className='postControl'>
                        <div>
                            <MuiThemeProvider>
                                <RaisedButton label='Delete post'
                                              onClick={() => this.props.handleDelete(post._id)}
                                              fullWidth
                                />
                            </MuiThemeProvider>
                        </div>

                        <div>
                            <MuiThemeProvider>
                                <RaisedButton label='Edit post'
                                              onClick={() => this.props.handleEditPost(post._id)}
                                              fullWidth
                                />
                            </MuiThemeProvider>
                        </div>
                    </div>
                    :
                    null
                }
            </div>
    );

    renderEditPostForm = post => (
        <div key={post._id} className='editPostForm' >
            <PostForm submitFunc={this.props.formEditPostSubmit}
                      {...post}
                      submitButtonText={'Edit post'}
            />

            <div className='editPostFormCancelButton'>
                <MuiThemeProvider>
                    <RaisedButton label='Cancel'
                                  onClick={this.props.handleEditPost}
                                  primary
                    />
                </MuiThemeProvider>
            </div>
        </div>
    );

    renderNewPostForm = () => (
        <div id='newPostDiv'>

            <MuiThemeProvider>
                <RaisedButton
                    onClick={this.props.handleToggleDisplayPostForm}
                    label='New post'
                    primary
                />
            </MuiThemeProvider>

            { this.props.state.displayForm && <PostForm submitFunc={this.props.formNewPostSubmit}
                                                        submitButtonText={'Create new post'}
                                              />
            }
        </div>
    );


    render(){
        const { user } = this.props;

        return (
            <div className='postsPosition'>
                <div className='postsBox userBox'>
                    <div className='postsBoxTitle userGreetingBox'>
                        <h2 className='postsTitle userGreeting'>{this.isCurrentUser() ? 'Your' : user.username} posts</h2>
                    </div>

                    <div className='postsContent'>
                        {this.isCurrentUser() && this.renderNewPostForm()}

                        <div className='userPosts'>
                            {user.posts.length ?
                                this.renderUserPosts() :
                                <h3>No one post found</h3>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};