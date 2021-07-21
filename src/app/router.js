import React from 'react';

export const Routes = [
    {
        path: '/',
        exact: true,
        component: React.lazy(() => import('../pages/home'))
    },
    {
        path: '/about',
        exact: true,
        component: React.lazy(()=>import('../pages/about-us'))
    },
];
