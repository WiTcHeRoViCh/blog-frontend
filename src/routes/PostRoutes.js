import React from 'react';
import { Route } from 'react-router-dom';
import UserPosts from '../screens/PostsScreen/containers/UserPosts';


export default (
    <div>
        <Route exact path='/users/:userParams/posts' component={UserPosts} />
        {/*<Route exact path='/users/:userParams/posts/:postParams' component={UserPost} />*/}
    </div>
);
