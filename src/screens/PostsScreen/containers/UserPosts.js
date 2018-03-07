import React, { Component } from 'react';
import RenderUserPosts from '../components/RenderUserPosts';
import AuthWrapper from '../../../components/AuthWrapper';

class UserPosts extends Component {
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


    handleDelete = id => {
        confirm('Delete this post?') ? this.props.deleteUserPost(this.props.user._id, id) : null;
    };

    handleEditPost = id => {
        const { editedPostId, displayEditForm: def } = this.state;
        const displayEditForm = id === editedPostId ? !def : true;

        this.setState({ editedPostId: id, displayEditForm });
    };

    handleToggleDisplayPostForm = () => {
        const { displayForm } = this.state;

        this.setState({ displayForm: !displayForm });
    };


    formNewPostSubmit = date => {
        this.props.addUserPost(this.props.user._id, date);
        this.handleToggleDisplayPostForm();
    };

    formEditPostSubmit = date => {
        const postId = this.state.editedPostId;

        this.props.editUserPost(this.props.user._id, postId, date);
        this.handleEditPost(postId);
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

export default AuthWrapper(UserPosts);
