import React, { Component } from 'react';
import RenderUserPosts from '../components/RenderUserPosts';

export default class UserPosts extends Component {
    state = {
        displayForm: false,
        displayEditForm: false,

        editedPostId: '',
    };

    componentDidMount(){
        const { getUserWithPosts, currentUser, match } = this.props;
        const userParam = match.params.userParams || currentUser._id;

        getUserWithPosts(userParam);
    }


    handleDelete = e => {
        const id = e.target.id;

        this.props.deleteUserPost(this.props.user._id, id);
    };

    handleEditPost = (e, editedPostId) => {
        const postId = e.target.id || editedPostId || '';
        const { editedPostId: epi, displayEditForm: def } = this.state;
        const displayEditForm = postId === epi ? !def : true;

        this.setState({ editedPostId: postId, displayEditForm });
    };

    handleToggleDisplayPostForm = () => {
        const { displayForm } = this.state;

        this.setState({ displayForm: !displayForm });
    };


    formNewPostSubmit = (e, date) => {
        e.preventDefault();

        this.props.addUserPost(this.props.user._id, date);
        this.handleToggleDisplayPostForm();
    };

    formEditPostSubmit = (e, date) => {
        e.preventDefault();
        const postId = this.state.editedPostId;

        this.props.editUserPost(this.props.user._id, postId, date);
        this.handleEditPost(e, postId);
    };

    render(){
        return (
            <RenderUserPosts {...this.props}
                             handleDelete={this.handleDelete}
                             handleEditPost={this.handleEditPost}
                             handleToggleDisplayPostForm={this.handleToggleDisplayPostForm}
                             formNewPostSubmit={this.formNewPostSubmit}
                             formEditPostSubmit={this.formEditPostSubmit}
                             state={this.state}
            />
        );
    }
}
