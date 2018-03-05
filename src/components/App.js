import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import allRoutes from '../routes';

class App extends Component {
    render(){
        return (
            <div>
                <Header />
                {allRoutes}
            </div>
        )
    };
}

export default withRouter(App);