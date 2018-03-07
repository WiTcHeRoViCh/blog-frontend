import React from 'react';

import HomeRoutes from './HomeRoutes';
import AuthRouter from './AuthRouter';
import UserRouters from './UserRoutes';
import PostRoutes from './PostRoutes';

export default <div>
    <HomeRoutes />
    {AuthRouter}
    <UserRouters />
    <PostRoutes />
</div>