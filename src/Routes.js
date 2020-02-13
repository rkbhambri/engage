import React from 'react';
const Login = React.lazy(() => import('./components/Login/Login'));
const Engage = React.lazy(() => import('./components/Engage/Engage'));
const MyCards = React.lazy(() => import('./components/MyCards/MyCards'));
const ReceivedCards = React.lazy(() => import('./components/ReceivedCards/ReceivedCards'));
const Home = React.lazy(() => import('./components/Home/Home'));

export const unauthenticated_routes = [
    {
        path: '/login',
        component: Login
    },
];

export const authenticated_routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/engage',
        component: Engage
    },
    {
        path: '/my-cards',
        component: MyCards
    },
    {
        path: '/received-cards',
        component: ReceivedCards
    }
];

export const authenticated_super_admin_routes = [
    {
        path: '/admin',
        component: Login
    },
];