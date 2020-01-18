import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label, Alert } from 'reactstrap';
import { isEmpty } from '../../../helpers/miscellaneous';
// import logo200Image from 'assets/img/logo/logo_200.png';
import Loader from '../../Loader/Loader';
import './LoginForm.css';

const LoginForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailInvalid, setEmailInvalid] = useState(false);
    const [isPasswordInvalid, setPasswordInvalid] = useState(false);

    const formChangeHandler = (event) => {
        if (event.target.name === 'email') {
            setEmail(event.target.value);
            isEmailInvalid && setEmailInvalid(false);
        }
        if (event.target.name === 'password') {
            setPassword(event.target.value);
            isPasswordInvalid && setPasswordInvalid(false);
        }
        props.error && props.resetError();
    }

    const login = (event) => {
        event.preventDefault();
        const isEmailInvalid = isEmpty(email);
        const isPasswordInvalid = isEmpty(password);
        setEmailInvalid(isEmailInvalid);
        setPasswordInvalid(isPasswordInvalid);
        !isEmpty(email) && !isEmpty(password) && props.login(event, email, password);
    };

    return (
        <Form
            onChange={(event) => formChangeHandler(event)}
            onSubmit={(event) => login(event)}>
            <div className="text-center pb-4">
                <img
                    // src={logo200Image}
                    className="rounded"
                    style={{ width: 60, height: 60, cursor: 'pointer' }}
                    alt="logo"
                // onClick={this.onLogoClick}
                />
            </div>
            {/* Show error if any */}
            {
                props.error && <Alert color="danger text-center p-2">{props.error}</Alert>
            }
            <FormGroup>
                <Label for="Email">Email<span className="required">*</span></Label>
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    invalid={isEmailInvalid} />
                {isEmailInvalid && <span className="text-danger">Email is required</span>}
            </FormGroup>
            <FormGroup>
                <Label for="Password">Password<span className="required">*</span></Label>
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    invalid={isPasswordInvalid} />
                {isPasswordInvalid && <span className="text-danger">Password is required</span>}
            </FormGroup> <br />
            <Button
                size="lg"
                className="bg-gradient-theme-left border-0  mb-1"
                block
                type="submit">
                {props.isLoading ? <Loader height="auto" /> : 'Login'}
            </Button>
        </Form >
    );
};

export default LoginForm;
