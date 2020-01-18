import React from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { Row, Button } from 'reactstrap';
import './Login.css';
import * as actionCreaters from '../../store/actions';
// import { getItem } from '../../helpers/cookie';
import backgroundImage from '../../assets/img/bg-login.jpg';
// import { Link } from 'react-router-dom';

const Login = (props) => {

    // useEffect(() => {
    //     if (props.authRedirectPath !== '/') {
    //         props.onSetRedirectPath('/');
    //     }
    // }, []);

    // const login = (event, email, password) => {
    //     event.preventDefault();
    //     props.onSetRedirectPath('/');
    //     props.location.pathname === '/admin' ? props.onEmployeeLogin(email, password) : props.onLogin(email, password);
    // };

    // let authRedirect = null;
    // if (getItem('token')) {
    //     authRedirect = <Redirect to="/" />
    // }

    return (
        <div className="h-100 text-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Row
                style={{
                    height: '80%',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <img src={backgroundImage} alt="logo" style={{ width: '100px', height: '100px' }} />
            </Row>
            <Button size="lg" style={{ background: '#fff', color: '#888888' }}>SIGN IN WITH GOOGLE</Button>
        </div>

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
        onLogin: (email, password) => dispatch(actionCreaters.login(email, password)),
        onSetRedirectPath: (path) => dispatch(actionCreaters.setRedirectPath()),
        onEmployeeLogin: (email, password) => dispatch(actionCreaters.employeeLogin(email, password)),
        onResetError: () => dispatch(actionCreaters.authFail(null)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
