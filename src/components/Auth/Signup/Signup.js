import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
// import { Message } from 'semantic-ui-react';
import SignupForm from './SignupForm/SignupForm';
import * as actionCreaters from '../../../store/actions';
import { getItem } from '../../../helpers/cookie';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link } from 'react-router-dom';
// import { isObjectNotEmpty } from '../../../helpers/Object';
import './Signup.css';

const Signup = (props) => {

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
        <Col className="signup">
            <Row
                style={{
                    height: '100vh',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                {authRedirect}
                <Col className="ml-1" md={6} lg={3} xs={10}>
                    <SocialLogin onSocialLogin={(authDetails) => props.onSocialLogin(authDetails)} /><br /><br />
                    {/* {
                        isObjectNotEmpty(props.userDetails) && <Message
                            success
                            header='Your user registration was successful'
                            content='You may now log-in with the email you have chosen'
                        />
                    } */}
                    <SignupForm
                        signup={(signupDetails) => props.onSignup(signupDetails)}
                        error={props.error}
                        resetError={() => props.onResetError()}
                        isLoading={props.isLoading}
                        userDetails={props.userDetails} /><br />
                    <div className="redirect-to-login text-center mt-3">
                        Already a member <Link to="/login">Login</Link>
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
        onSignup: (signupDetails) => dispatch(actionCreaters.signup(signupDetails)),
        onSetRedirectPath: (path) => dispatch(actionCreaters.setRedirectPath(path)),
        onResetError: () => dispatch(actionCreaters.authFail(null)),
        onSocialLogin: (authDetails) => dispatch(actionCreaters.socialLogin(authDetails))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
