import React from 'react';

import HomeRoutes from './HomeRoutes';
import AuthRouter from './AuthRouter';
import ContentWithAutoSignInRouter from './ContentWithAutoSignInRouter';

export default <div>
    {HomeRoutes}
    <ContentWithAutoSignInRouter />
    {AuthRouter}
</div>