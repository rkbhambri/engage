// Importing Dependencies
import React from 'react';
// import Login from './pages/Login/Login';
const Login = React.lazy(() => import('./components/Login/Login'));
const Contests = React.lazy(() => import('./components/Contests/Contests'));
const Leaders = React.lazy(() => import('./components/Leaders/Leaders'));
const Wallet = React.lazy(() => import('./components/Wallet/Wallet'));
const Account = React.lazy(() => import('./components/Account/Account'));
const Referral = React.lazy(() => import('./components/Account/Referral/Referral'));
const MyContests = React.lazy(() => import('./components/Account/MyContests/MyContests'));
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
        path: '/contests',
        component: Contests
    },
    {
        path: '/leaders',
        component: Leaders
    },
    {
        path: '/wallet',
        component: Wallet
    },
    {
        path: '/account',
        component: Account
    },
    {
        path: '/referral',
        component: Referral
    },
    {
        path: '/my-contests',
        component: MyContests
    }
];

export const authenticated_super_admin_routes = [
    {
        path: '/admin',
        component: Login
    },
];