import React, { useState, useEffect } from 'react';
import { Col } from 'reactstrap';
import { Icon, Form } from 'semantic-ui-react';
import { parseData, isEmpty, convertToTimestamp, convertDateFormat } from '../../../../helpers/miscellaneous';
import { messages } from '../../../../helpers/messages';
import { isObjectEmpty } from '../../../../helpers/Object';
// import './UserDetailsForm.css';

const UserDetailsForm = (props) => {

    const [formInput, setFormInput] = useState({
        name: '',
        mobile: '',
        dateOfBirth: ''
    });
    const [invalidInput, setInvalidInput] = useState({});

    useEffect(() => {
        const { name, mobile, dateOfBirth } = props.userDetails;
        setFormInput({ name, mobile: mobile || '', dateOfBirth: convertDateFormat(new Date(dateOfBirth)) || '' });
        return (() => {
            setFormInput({
                name: '',
                mobile: '',
                dateOfBirth: ''
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

        for (let key in formInput) {
            if (isEmpty(formInput[key].toString())) {
                invalidInputDetails[key] = messages[key];
            }
        }

        setInvalidInput(invalidInputDetails);
        if (isObjectEmpty(invalidInputDetails)) {
            const formInputDetails = { ...formInput };
            formInputDetails.dateOfBirth = convertToTimestamp(formInput.dateOfBirth);
            props.updateUserProfile(formInputDetails);
            props.toggleUserDetailsEditable();
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
                value={props.userDetails.email}
                disabled
            />
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
            <Form.Input
                type="date"
                transparent
                placeholder="Date Of Birth"
                id="dateOfBirth"
                className="border-bottom mt-3"
                style={{ color: '#fff' }}
                onChange={(event) => formChangeHandler(event)}
                value={formInput.dateOfBirth}
            />
            <Col className="save-user-details text-right mt-3" xs={10}>
                <Icon name="save outline" className="save-icon" onClick={saveUserDetails} />
                <Icon name="window close outline" className="close-icon ml-2" onClick={props.toggleUserDetailsEditable} />
            </Col>
        </Form>
    );
};

export default UserDetailsForm;
