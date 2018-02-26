import React, { Component } from 'react';
import Header from './Header';
import allRoutes from '../routes';

export default class App extends Component {
    render(){
        return (
            <div>
                <Header />
                {allRoutes}
            </div>
        )
    };
}