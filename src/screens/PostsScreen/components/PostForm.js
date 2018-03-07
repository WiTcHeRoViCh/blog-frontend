import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import { styles } from '../../../constants';

import '../../../styles/PostsStyles/PostForm.css';

const { textFieldStyles, submitButton, submitInput } = styles;

export default class extends Component {
    state = {
        title: this.props.title || '',
        text: this.props.text || '',
        photoURL: this.props.photoURL || '',
    };

    initialState = { ...this.state };

    handleChange = e => {
        const name = e.target.name;

        this.setState({ [name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { submitFunc } = this.props;

        submitFunc(this.state);
        this.setState(this.initialState);
    };

    render(){
        const { submitButtonText } = this.props;
        const { title, text, photoURL } = this.state;

        return(
            <div className='postFormBox'>
                <form className='postForm' onSubmit={this.handleSubmit}>
                    <MuiThemeProvider>

                        <TextField
                            floatingLabelText='Write post title'
                            onChange={this.handleChange}
                            name='title'
                            defaultValue={title}
                            floatingLabelStyle={textFieldStyles}
                            fullWidth
                        />

                        <TextField
                            floatingLabelText='Write post text'
                            onChange={this.handleChange}
                            name='text'
                            defaultValue={text}
                            floatingLabelStyle={textFieldStyles}
                            fullWidth
                        />

                        <TextField
                            floatingLabelText='Add post photo url'
                            onChange={this.handleChange}
                            name='photoURL'
                            defaultValue={photoURL}
                            floatingLabelStyle={textFieldStyles}
                            fullWidth
                        />

                        <FlatButton
                            label={submitButtonText}
                            labelPosition='before'
                            style={submitButton}
                            containerElement='label'
                        >
                            <input type='submit' style={submitInput} />
                        </FlatButton>

                    </MuiThemeProvider>
                </form>
            </div>
        );
    }
}