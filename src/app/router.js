import React from 'react';

export const Routes = [
  {
    path: '/',
    exact: true,
    component: React.lazy(() => import('../pages/home')),
  },
  {
    path: '/about',
    exact: true,
    component: React.lazy(() => import('../pages/about-us')),
  },
  {
    path: '/blog',
    exact: true,
    component: React.lazy(() => import('../pages/blog')),
  },
  {
    path: '/contact',
    exact: true,
    component: React.lazy(() => import('../pages/contact-us')),
  },
  {
    path: '/pages',
    exact: true,
    component: React.lazy(() => import('../pages/pages')),
  },
  {
    path: '/portfolio',
    exact: true,
    component: React.lazy(() => import('../pages/portfolio')),
  },
  {
    path: '/services',
    exact: true,
    component: React.lazy(() => import('../pages/services')),
  },
];
