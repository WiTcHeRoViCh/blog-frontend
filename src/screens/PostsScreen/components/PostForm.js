import React, { Component } from 'react';


export default class extends Component {
    state = {
        title: this.props.title || '',
        text: this.props.text || '',
        photoUrl: this.props.photoUrl || '',
    };

    initialState = { ...this.state };

    handleChange = e => {
        const name = e.target.name;

        this.setState({ [name]: e.target.value });
    };


    render(){
        const { submitFunc, submitButtonText } = this.props;
        const { title, text, photoUrl } = this.state;

        return(
            <form id='postForm' onSubmit={(e) => {
                submitFunc(e, this.state);
                this.setState(this.initialState)}
            }>
                <input type='text'
                       onChange={this.handleChange}
                       value={title}
                       name='title'
                       placeholder={'Write post title'}
                />
                <input type='text'
                       onChange={this.handleChange}
                       value={text}
                       name='text'
                       placeholder={'Write post text'}
                />
                <input type='text'
                       onChange={this.handleChange}
                       value={photoUrl}
                       name='photoUrl'
                       placeholder={'Add post photo url'}
                />

                <input type='submit' value={submitButtonText} />
            </form>
        );
    }
}