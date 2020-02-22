import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { Form, Button, Image, Select, Icon } from 'semantic-ui-react';
import { parseData, isEmpty } from '../../../../helpers/miscellaneous';
import { messages } from '../../../../helpers/messages';
import { isObjectEmpty } from '../../../../helpers/Object';
import defaultUserImage from '../../../../assets/img/user.svg';

const AddCardForm = (props) => {

    const cardTypeOptions = [
        { key: 'af', value: 'Meetup', text: 'Meetup' },
        { key: 'ax', value: 'Personal', text: 'Personal' },
        { key: 'al', value: 'al', text: 'Professional' },
        { key: 'dz', value: 'dz', text: 'Travel' },
        { key: 'as', value: 'as', text: 'Social' },
        { key: 'ad', value: 'ad', text: 'Work' },
        { key: 'ao', value: 'ao', text: 'Office' }
    ];

    const [cardDetails, setCardDetails] = useState({
        name: '',
        category: '',
        thumbnailId: '',
        facebookUrl: false,
        instagramUrl: false,
        linkedinUrl: false,
        tiktokUrl: false,
        youtubeChannelUrl: false
    });
    const [invalidInput, setInvalidInput] = useState({});

    const cardNameChangeHandler = (value) => {
        const card = { ...cardDetails };
        card.name = value;
        setCardDetails(card);

        if (invalidInput.name) {
            const invalidInputDetails = parseData(invalidInput);
            delete invalidInputDetails.name;
            setInvalidInput(invalidInputDetails);
        }
    };

    const categoryChangeHandler = (event) => {
        const card = { ...cardDetails };
        card.category = event.target.textContent;
        setCardDetails(card);

        if (invalidInput.category) {
            const invalidInputDetails = parseData(invalidInput);
            delete invalidInputDetails.category;
            setInvalidInput(invalidInputDetails);
        }
    };

    const selectSocialLink = (social) => {
        const card = { ...cardDetails };
        card[social] = !card[social];
        setCardDetails(card);
    };

    const createSchool = () => {
        const invalidInputDetails = parseData(invalidInput);

        if (isEmpty(cardDetails.name)) {
            invalidInputDetails.name = `${messages.name}`;
        }
        if (isEmpty(cardDetails.category)) {
            invalidInputDetails.category = `${messages.category}`;
        }
        setInvalidInput(invalidInputDetails);

        if (isObjectEmpty(invalidInputDetails)) {
            console.log('kgsagku==', cardDetails)
            props.toggleAddCardModal();
            // props.onCreateSchool(cardDetails);
        }
    };

    return (
        <Form onSubmit={() => createSchool()}>
            <br />
            <div className="mt-4 d-flex">
                <div className="profile-pic">
                    <Image
                        style={{ height: '50px', width: '50px' }}
                        src={defaultUserImage}
                        className="rounded-circle"
                        onError={(event) => event.target.src = defaultUserImage}
                        alt="Engage" />
                </div>
                <div className="name ml-3">
                    <h3>Ram Krishan</h3>
                </div>
            </div><br />
            <div className="card-name">
                <Form.Input
                    error={invalidInput.name}
                    required
                    type='text'
                    id='name'
                    fluid
                    // value={achievementDetails.name}
                    label='Card Name'
                    placeholder='Card Name'
                    onChange={(event) => cardNameChangeHandler(event.target.value)}
                />
            </div><br />
            <div className="card-type">
                <h5>Card Type</h5>
                <Select
                    error={invalidInput.category ? true : false}
                    fluid
                    placeholder='Select Card Type'
                    options={cardTypeOptions}
                    onChange={(event) => categoryChangeHandler(event)} />
            </div><br />
            <div className="social-links">
                <h3>Social Links</h3>
                <div>
                    <Row>
                        <Col>
                            <Icon
                                size="huge"
                                name="facebook"
                                className={cardDetails.facebookUrl ? 'text-success' : ''}
                                onClick={() => selectSocialLink('facebookUrl')} />
                        </Col>
                        <Col className="offset-1">
                            <Icon
                                size="huge"
                                name="instagram"
                                className={cardDetails.instagramUrl ? 'text-success' : ''}
                                onClick={() => selectSocialLink('instagramUrl')} />
                        </Col>
                        <Col className="offset-1">
                            <Icon
                                size="huge"
                                name="linkedin"
                                className={cardDetails.linkedinUrl ? 'text-success' : ''}
                                onClick={() => selectSocialLink('linkedinUrl')} />
                        </Col>
                    </Row>
                    <br /><br />
                    <Row>
                        <Col>
                            <Icon
                                size="huge"
                                name="youtube"
                                className={cardDetails.youtubeChannelUrl ? 'text-success' : ''}
                                onClick={() => selectSocialLink('youtubeChannelUrl')} />
                        </Col>
                        <Col className="offset-1">
                            <Icon
                                size="huge"
                                name="youtube"
                                className={cardDetails.xyz ? 'text-success' : ''}
                                onClick={() => selectSocialLink('')} />
                        </Col>
                        <br />
                    </Row>
                </div>
            </div>
            <div className="text-right mt-4">
                <Button type="submit">Add</Button>
            </div>
        </Form>
    );
};

// const mapStateToProps = state => {
//     return {
//         currentState: state.user.currentState
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         onCreateSchool: (cardDetails) => dispatch(actionCreaters.createSchool(cardDetails))
//     };
// };

export default connect(null, null)(AddCardForm);
