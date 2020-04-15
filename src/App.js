// import GAListener from 'components/GAListener';
import React, { Component } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PageSpinner from './components/PageSpinner/PageSpinner';
import MainLayout from './components/MainLayout/MainLayout';
import * as actionCreaters from './store/actions';
import { getItem } from './helpers/cookie';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
// import Loader from './components/Loader/Loader';
// const ErrorBoundary = React.lazy(() => import('./ErrorBoundary/ErrorBoundary'));
import { authenticated_routes, unauthenticated_routes } from './Routes';
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
        const redirectDefaultRoute = getItem('token') ? '/' : '/login';
        return routeExist ? this.props.location.pathname : redirectDefaultRoute
    }

    render() {


        // let routes = (
        //     <MainLayout breakpoint={this.props.breakpoint}>
        //         <React.Suspense fallback={<Loader />} >
        //             {
        //                 authenticated_routes.map(({ path, component }, key) => <Route exact path={path} component={component} key={key} />)
        //             }
        //             <Redirect to={this.getRedirectPath(authenticated_routes)} />
        //         </React.Suspense>
        //     </MainLayout>
        // );

        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE5ZGVlZWYwLTY0ZmItMTFlYS04NDUwLTAzZGIxMWYzODQ3NiIsIm5hbWUiOiJUZXN0IiwiZW1haWwiOiJ0ZXN0QGdtYWlsLmNvbSIsIm1vYmlsZSI6Ijc1MzY3ODkwMjAiLCJpYXQiOjE1ODQwODQyNjV9.NAWb4CVez9p1Ao1eVoF2Q4JT1pjFnmvx08hsTQRBMos'
        // const id = 'a9deeef0-64fb-11ea-8450-03db11f38476';
        // console.log('==token===', token, '===id===', id);

        let routes = (
            <React.Suspense fallback={<PageSpinner />} >
                {
                    unauthenticated_routes.map(({ path, component }, key) => <Route exact path={path} component={component} key={key} />)
                }
                <Redirect to={this.getRedirectPath(unauthenticated_routes)} />
            </React.Suspense>
        );

        if (getItem('token')) {
            routes = (
                <>
                    <MainLayout breakpoint={this.props.breakpoint}>
                        <React.Suspense fallback={<PageSpinner />} >
                            {
                                authenticated_routes.map(({ path, component }, key) => <Route exact path={path} component={component} key={key} />)
                            }
                        </React.Suspense>
                    </MainLayout>
                    <Redirect to={this.getRedirectPath(authenticated_routes)} />
                </>
            );
        }

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
