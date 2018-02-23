import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Home from '../screens/Home/components/Home';
import Users from '../screens/Users/containers/Users';
import SignInForm from '../screens/SignInScreen/containers/SignInForm';
import SignUpForm from '../screens/SignUpScreen/containers/SignUpForm';

export default class App extends Component {
    render(){
        return (
            <div>
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/users" component={Users} />
                <Route exact path="/sign_up" component={SignUpForm} />
                <Route exact path="/sign_in" component={SignInForm} />
            </div>
        )
    };
}