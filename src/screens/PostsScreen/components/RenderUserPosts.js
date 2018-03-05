import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PostForm from './PostForm';

export default class extends Component {
    static displayName = 'RenderUserPosts';

    isCurrentUser = () => {
        const { user } = this.props;

        return user.hasOwnProperty('isOnline');
    };

    render(){
        const {
            user,
            url,
            state,
            handleDelete,
            handleEditPost,
            formNewPostSubmit,
            formEditPostSubmit,
            handleToggleDisplayPostForm,
        } = this.props;

        return (
            <div>
                <div>{user.username} posts:</div>
                { this.isCurrentUser() &&
                    <div id='newPostDiv'>
                        <button onClick={handleToggleDisplayPostForm}>New post</button>
                        { state.displayForm && <PostForm submitFunc={formNewPostSubmit} submitButtonText={'Create new post'} /> }
                    </div>
                }

                <div>
                    {user.posts.map( post =>
                        (state.displayEditForm && state.editedPostId === post._id) ?
                            (
                                <div key={post._id}>
                                    <PostForm submitFunc={formEditPostSubmit} {...post} submitButtonText={'Edit post'} />
                                    <button id={post._id} onClick={handleEditPost}>Cancel</button>
                                </div>
                            )
                            :
                            (
                                <div key={post._id}>
                                    <h3>{post.title}</h3>
                                    <div>{post.text}</div>
                                    <img src={post.photoUrl} />

                                    { this.isCurrentUser() ?
                                        <div>
                                            <button id={post._id} onClick={handleDelete}>Delete</button>
                                            <button id={post._id} onClick={handleEditPost}>Edit</button>
                                        </div>
                                        :
                                        null
                                    }
                                </div>
                            )
                    )}
                </div>
            </div>
        );
    }
};