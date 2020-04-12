import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'semantic-ui-react';
import { parseData, isEmpty } from '../../../../helpers/miscellaneous';
import { messages } from '../../../../helpers/messages';
import { isObjectEmpty } from '../../../../helpers/Object';

const LoginForm = (props) => {
    const [formInput, setFormInput] = useState({
        email: '',
        password: '',
    });
    const [invalidInput, setInvalidInput] = useState({});
    const [isButtonDisabled, setButtonDisabled] = useState(false);

    useEffect(() => {
        props.error && setButtonDisabled(false);
    }, [props.error]);

    const formChangeHandler = (event) => {
        const formInputDetails = { ...formInput };
        formInputDetails[event.target.id] = event.target.value;
        setFormInput(formInputDetails);
        props.error && props.resetError();
        if (invalidInput[event.target.id]) {
            const invalidInputDetails = parseData(invalidInput);
            delete invalidInputDetails[event.target.id];
            setInvalidInput(invalidInputDetails);
        }
    };

    const login = () => {
        const invalidInputDetails = parseData(invalidInput);

        for (let key in formInput) {
            if (isEmpty(formInput[key])) {
                invalidInputDetails[key] = `${key} ${messages.required}`;
            }
        }
        setInvalidInput(invalidInputDetails);

        if (isObjectEmpty(invalidInputDetails)) {
            setButtonDisabled(true);
            props.login(formInput);
        }
    };

    return (
        <Form onSubmit={() => login()}>
            <Form.Input
                // error={{ content: 'Please enter your first name', pointing: 'below' }}
                error={invalidInput.email}
                type="email"
                id='email'
                required
                fluid
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
                label='Password'
                placeholder='Password'
                onChange={(event) => formChangeHandler(event)}
            />
            <div className="forgot-password text-right pr-1">
                <Link to="/forgot-password">Forgot Password</Link>
            </div>
            {
                props.error &&
                <div className="text-center text-danger mt-3 mb-3">
                    {props.error}
                </div>
            }
            <div className="mt-4">
                <Button
                    type="submit"
                    fluid
                    loading={isButtonDisabled}
                    disabled={isButtonDisabled}>Login</Button>
            </div>
        </Form>
    );
};

export default LoginForm;
