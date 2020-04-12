import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import LoginForm from './LoginForm/LoginForm';
import * as actionCreaters from '../../../store/actions';
import { getItem } from '../../../helpers/cookie';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = (props) => {

    useEffect(() => {
        if (getItem('token')) {
            props.onSetRedirectPath('/');
        }
    }, []);

    let authRedirect = null;
    if (getItem('token')) {
        authRedirect = <Redirect to="/" />
    }

    return (
        <Col className="login">
            <Row
                style={{
                    height: '100vh',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                {authRedirect}
                <Col className="ml-1" md={6} lg={3} xs={10}>
                    <SocialLogin onSocialLogin={(authDetails) => props.onSocialLogin(authDetails)} /><br /><br />
                    <LoginForm
                        login={(loginDetails) => props.onLogin(loginDetails)}
                        error={props.error}
                        resetError={() => props.onResetError()} /><br />
                    <div className="redirect-to-signup text-center mt-3">
                        Not a member <Link to="/signup">Signup</Link>
                    </div>
                </Col>
            </Row>
        </Col>
    );
};

const mapStateToProps = state => {
    return {
        error: state.auth.error,
        authRedirectPath: state.auth.authRedirectPath,
        isLoading: state.auth.isLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (loginDetails) => dispatch(actionCreaters.login(loginDetails)),
        onSetRedirectPath: (path) => dispatch(actionCreaters.setRedirectPath(path)),
        onResetError: () => dispatch(actionCreaters.authFail(null)),
        onSocialLogin: (authDetails) => dispatch(actionCreaters.socialLogin(authDetails))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
