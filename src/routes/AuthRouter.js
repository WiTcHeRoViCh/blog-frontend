import React from 'react';
import { Route } from 'react-router-dom';
import SignInForm from '../screens/SignInScreen/containers/SignInForm';
import SignUpForm from '../screens/SignUpScreen/containers/SignUpForm';


export default (
    <div>
        <Route exact path="/sign_in" component={SignInForm} />
        <Route exact path="/sign_up" component={SignUpForm} />
    </div>
);
