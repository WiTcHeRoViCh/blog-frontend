import React from 'react';
import { Route } from 'react-router-dom';
import Users from '../screens/UsersScreen/containers/Users';
import User from '../screens/UsersScreen/containers/User';

export default <div>
    <Route exact path="/users" component={Users} />
    <Route path="/users/:id" component={User} />
</div>
