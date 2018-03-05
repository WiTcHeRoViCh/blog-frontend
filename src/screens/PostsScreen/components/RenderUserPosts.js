import React, { Component } from 'react';

import PostForm from './PostForm';

export default class extends Component {
    static displayName = 'RenderUserPosts';

    isCurrentUser = () => {
        const { user } = this.props;

        return user.hasOwnProperty('isOnline');
    };


    renderUserPost = post => (
        <div key={post._id}>
            <h3>{post.title}</h3>

            <div>{post.text}</div>
            <img src={post.photoUrl} />

            { this.isCurrentUser() ?
                <div>
                    <button id={post._id} onClick={this.props.handleDelete}>Delete</button>
                    <button id={post._id} onClick={this.props.handleEditPost}>Edit</button>
                </div>
                :
                null
            }
        </div>
    );

    renderEditPostForm = post => (
        <div key={post._id}>
            <PostForm submitFunc={this.props.formEditPostSubmit} {...post} submitButtonText={'Edit post'} />
            <button id={post._id} onClick={this.props.handleEditPost}>Cancel</button>
        </div>
    );

    renderNewPostForm = () => (
        <div id='newPostDiv'>
            <button onClick={this.props.handleToggleDisplayPostForm}>New post</button>
            { this.props.state.displayForm && <PostForm submitFunc={this.props.formNewPostSubmit} submitButtonText={'Create new post'} /> }
        </div>
    );


    render(){
        const {
            user,
            state,
        } = this.props;

        return (
            <div>
                <div>{user.username} posts:</div>
                {this.isCurrentUser() && this.renderNewPostForm()}

                <div>
                    {user.posts.map( post =>
                        (state.displayEditForm && state.editedPostId === post._id) ?
                            this.renderEditPostForm(post) :
                            this.renderUserPost(post)
                    )}
                </div>
            </div>
        );
    }
};