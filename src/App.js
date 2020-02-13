// import GAListener from 'components/GAListener';
import MainLayout from './components/MainLayout/MainLayout';
import React, { Component } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreaters from './store/actions';
import { getItem } from './helpers/cookie';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Loader from './components/Loader/Loader';
// const ErrorBoundary = React.lazy(() => import('./ErrorBoundary/ErrorBoundary'));
import { authenticated_routes } from './Routes';
import './styles/reduction.scss';

class App extends Component {

    state = {
        path: '',
        routes: []
    };

    getRedirectPath = (routes) => {
        let routeExist = false;
        for (let i = 0; i < routes.length; i++) {
            if (routes[i].path === this.props.location.pathname) {
                routeExist = true;
            }
        }
        const redirectDefaultRoute = getItem('token') ? '/' : '/';
        return routeExist ? this.props.location.pathname : redirectDefaultRoute
    }

    render() {
        let routes = (
            <MainLayout breakpoint={this.props.breakpoint}>
                <React.Suspense fallback={<Loader />} >
                    {
                        authenticated_routes.map(({ path, component }, key) => <Route exact path={path} component={component} key={key} />)
                    }
                    <Redirect to={this.getRedirectPath(authenticated_routes)} />
                </React.Suspense>
            </MainLayout>
        );

        // routes = (
        //     <React.Suspense fallback={<Spinner />} >
        //         {
        //             unauthenticated_routes.map(({ path, component }, key) => <Route exact path={path} component={component} key={key} />)
        //         }
        //         <Redirect to="/login" />
        //     </React.Suspense>
        // );

        // if (getItem('token')) {
        //     routes = (
        //         <>
        //             <MainLayout breakpoint={this.props.breakpoint}>
        //                 <React.Suspense fallback={<Spinner />} >
        //                     {
        //                         unauthenticated_routes.map(({ path, component }, key) => <Route exact path={path} component={component} key={key} />)
        //                     }
        //                 </React.Suspense>
        //             </MainLayout>
        //             <Redirect to="/" />

        //             {/* <Redirect to={this.state.path === "/super-admin" || this.state.path === '/dashboard' ? "/dashboard" : "/"} /> */}
        //         </>
        //     );
        // }

        return (
            <ErrorBoundary>
                <Switch>
                    {routes}
                </Switch>
            </ErrorBoundary>
        );
    }
}

const mapStateToProps = state => {
    return {
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath,
        superAdminDetails: state.auth.superAdminDetails
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetRedirectPath: (path) => dispatch(actionCreaters.setRedirectPath(path))
    };
};

export default withRouter((connect(mapStateToProps, mapDispatchToProps)(App)));
// withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthorizationCheck(App, axios)));
