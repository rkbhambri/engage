import React, { useState, useEffect } from 'react';
import { Col } from 'reactstrap';
import { Icon, Form } from 'semantic-ui-react';
import { parseData, isEmpty } from '../../../../helpers/miscellaneous';
import { messages } from '../../../../helpers/messages';
import { validateEmail } from '../../../../helpers/formHandling';
import { isObjectEmpty } from '../../../../helpers/Object';
// import './UserDetailsForm.css';

const UserDetailsForm = (props) => {

    const [formInput, setFormInput] = useState({
        name: '',
        email: '',
        mobile: ''
    });
    const [invalidInput, setInvalidInput] = useState({});

    useEffect(() => {
        const { name, email, mobile } = props.userDetails;
        setFormInput({ name, email, mobile: mobile || '' });
        return (() => {
            setFormInput({
                name: '',
                email: '',
                mobile: '',
            });
        })
    }, [props.userDetails]);

    const formChangeHandler = (event) => {
        const formInputDetails = { ...formInput };
        formInputDetails[event.target.id] = event.target.value;
        setFormInput(formInputDetails);

        if (invalidInput[event.target.id]) {
            const invalidInputDetails = parseData(invalidInput);
            delete invalidInputDetails[event.target.id];
            setInvalidInput(invalidInputDetails);
        }
    };

    const saveUserDetails = () => {
        const invalidInputDetails = parseData(invalidInput);

        if (isEmpty(formInput.name)) {
            invalidInputDetails.name = messages.name;
        }

        if (!validateEmail(formInput.email)) {
            invalidInputDetails.email = messages.invalidEmail;
        }

        setInvalidInput(invalidInputDetails);
        if (isObjectEmpty(invalidInputDetails)) {
            alert('suyccessfulll');
            console.log('======', formInput);

            props.updateUserProfile(formInput);
        }
    };

    return (
        <Form className="pr-2">
            <Form.Input
                // error={invalidInput.name}
                type="text"
                transparent
                id="name"
                placeholder="Name"
                className="border-bottom mb-0"
                style={{ color: '#fff' }}
                onChange={(event) => formChangeHandler(event)}
                value={formInput.name}
            />
            {
                invalidInput.name &&
                <span className="text-danger mt-2">{invalidInput.name}</span>
            }
            <Form.Input
                type="email"
                transparent
                placeholder="Email"
                id="email"
                className={`border-bottom mt-3 ${invalidInput.email && 'mb-0'}`}
                style={{ color: '#fff' }}
                onChange={(event) => formChangeHandler(event)}
                value={formInput.email}
            />
            {
                invalidInput.email &&
                <span className="text-danger">{invalidInput.email}</span>
            }
            <Form.Input
                type="text"
                transparent
                placeholder="Mobile"
                id="mobile"
                className="border-bottom mt-3"
                style={{ color: '#fff' }}
                onChange={(event) => formChangeHandler(event)}
                value={formInput.mobile}
            />
            <Col className="save-user-details text-right mt-3" xs={10}>
                <Icon name="save outline" className="save-icon" onClick={saveUserDetails} />
                <Icon name="window close outline" className="close-icon ml-2" />
            </Col>
        </Form>
    );
};

export default UserDetailsForm;
