import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../screens/Home/components/Home';
import Users from '../screens/Users/containers/Users';

export default class App extends Component {
    render(){
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/users" component={Users} />
            </div>
        )
    };
}