import React from 'react';
import { Route } from 'react-router-dom';
import Users from '../screens/UsersScreen/containers/Users';
import User from '../screens/UsersScreen/containers/User';
import PostsRoutes from './PostRoutes';

export default (
    <div>
        <Route exact path="/users" component={Users} />
        <Route exact path="/users/:userParams" component={User} />

        <PostsRoutes />
    </div>
)