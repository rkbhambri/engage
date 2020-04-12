import React, { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { parseData, isEmpty, isEqual } from '../../../../helpers/miscellaneous';
import { messages } from '../../../../helpers/messages';
import { validateEmail, validatePassword } from '../../../../helpers/formHandling';
import { isObjectEmpty } from '../../../../helpers/Object';
// import { Col } from 'reactstrap';
// import Loader from '../../Loader/Loader';

const SignupForm = (props) => {

    const [formInput, setFormInput] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [invalidInput, setInvalidInput] = useState({});

    useEffect(() => {
        return (() => {
            setFormInput({
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        })
    }, [props.userDetails]);


    const formChangeHandler = (event) => {
        const formInputDetails = { ...formInput };
        formInputDetails[event.target.id] = event.target.value;
        setFormInput(formInputDetails);

        if (invalidInput[event.target.id]) {
            const invalidInputDetails = parseData(invalidInput);
            if (event.target.id === 'password' || event.target.id === 'confirmPassword') {
                delete invalidInputDetails['confirmPassword'];
                delete invalidInputDetails['password'];
            } else {
                delete invalidInputDetails[event.target.id];
            }
            setInvalidInput(invalidInputDetails);
        }
    };

    const signup = () => {
        const invalidInputDetails = parseData(invalidInput);

        for (let key in formInput) {
            if (isEmpty(formInput[key])) {
                invalidInputDetails[key] = `${key} ${messages.required}`;
            }
        }

        if (!validateEmail(formInput.email)) {
            invalidInputDetails.email = messages.invalidEmail;
        }
        if (validatePassword(formInput.password) && !isEqual(formInput.password, formInput.confirmPassword)) {
            invalidInputDetails.password = messages.notMatch;
            invalidInputDetails.confirmPassword = messages.notMatch;
        }
        if (!validatePassword(formInput.password)) {
            invalidInputDetails.password = messages.passwordFormat;
        }

        setInvalidInput(invalidInputDetails);
        if (isObjectEmpty(invalidInputDetails)) {
            const formInputDetails = parseData(formInput);
            delete formInputDetails.confirmPassword;
            props.signup(formInputDetails);
        }
    };

    return (
        <Form onSubmit={() => signup()}>
            <Form.Input
                // error={{ content: 'Please enter your first name', pointing: 'below' }}
                error={invalidInput.name}
                type="text"
                id='name'
                required
                fluid
                value={formInput.name}
                label='Name'
                placeholder='Name'
                onChange={(event) => formChangeHandler(event)}
            />
            <Form.Input
                // error={{ content: 'Please enter your first name', pointing: 'below' }}
                error={invalidInput.email}
                type="email"
                id='email'
                required
                fluid
                value={formInput.email}
                label='Email'
                placeholder='Email'
                onChange={(event) => formChangeHandler(event)}
            />
            <Form.Input
                error={invalidInput.password}
                type='password'
                id='password'
                required
                fluid
                value={formInput.password}
                label='Password'
                placeholder='Password'
                onChange={(event) => formChangeHandler(event)}
            />
            <Form.Input
                error={invalidInput.confirmPassword}
                type='password'
                id='confirmPassword'
                required
                fluid
                value={formInput.confirmPassword}
                label='Confirm Password'
                placeholder='Confirm Password'
                onChange={(event) => formChangeHandler(event)}
            />
            <div className="mt-4">
                <Button fluid type="submit">Signup</Button>
            </div>
        </Form>
    );
};

export default SignupForm;
