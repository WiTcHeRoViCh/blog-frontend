import React, { Component } from 'react';
import axios from 'axios';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import { styles, defaultAvatar as defaultPostImage } from '../../../constants';

import '../../../styles/PostsStyles/PostForm.css';

const { textFieldStyles, submitButton, submitInput } = styles;

export default class PostForm extends Component {
    state = {
        title: this.props.title || '',
        text: this.props.text || '',
        photoURL: this.props.photoURL || '',

        titleValid: undefined,
        textValid: undefined,
        photoURLValid: undefined,

        noValid: false,
        error: ''
    };

    initialState = { ...this.state };

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        const isValid = value.length;

        this.setState({ [name]: value, [`${name}Valid`]: isValid, noValid: false});
    };

    handleSubmit = e => {
        e.preventDefault();

        if (this.isValid()){
            const { submitFunc } = this.props;

            axios({ url: this.state.photoURL, method: 'GET' }).then(() => {
                submitFunc(this.state);
                this.setState(this.initialState);
            }).catch(() => {
                this.setState({ noValid: true, error: 'Add valid image url' });
            });
        } else {
            this.setState({ noValid: true, error: 'Fields can\'t be blank' });
        }
    };

    isValid = () => {
        const { titleValid, textValid, photoURLValid, photoURL, text, title } = this.state;

        return ((titleValid && textValid && photoURLValid) || (photoURL.length && text.length && title.length));
    };

    render(){
        const { submitButtonText } = this.props;
        const {
            title,
            text,
            photoURL,

            titleValid=true,
            textValid=true,
            photoURLValid=true,

            noValid,
            error,
        } = this.state;
        const errorText = 'This filed is require';

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
                            errorText={titleValid ? '' : errorText}
                            fullWidth
                        />

                        <TextField
                            floatingLabelText='Write post text'
                            onChange={this.handleChange}
                            name='text'
                            defaultValue={text}
                            floatingLabelStyle={textFieldStyles}
                            errorText={textValid ? '' : errorText}
                            fullWidth
                        />

                        <TextField
                            floatingLabelText='Add post photo url'
                            onChange={this.handleChange}
                            name='photoURL'
                            defaultValue={photoURL}
                            floatingLabelStyle={textFieldStyles}
                            errorText={photoURLValid ? '' : errorText}
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

                    {noValid && <div style={{color: 'red', marginTop: 10}}>{error}</div>}
                </form>
            </div>
        );
    }
}