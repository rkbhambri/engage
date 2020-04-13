import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { Form, Button, Select } from 'semantic-ui-react';
import * as actionCreaters from '../../../../store/actions';
import { parseData, isEmpty } from '../../../../helpers/miscellaneous';
import { messages } from '../../../../helpers/messages';
import { isObjectEmpty, isObjectNotEmpty } from '../../../../helpers/Object';
import { socialMediaPlatforms } from '../../../../helpers/socialMedia';
import SocialIcons from '../../../Home/SocialDetails/SocialIcons';
import Behance from '../../../../assets/social-icons/Behance.svg';
import Dribble from '../../../../assets/social-icons/Dribble.svg';
import Facebook from '../../../../assets/social-icons/Facebook.svg';
import Instagram from '../../../../assets/social-icons/Instagram.svg';
import Linkedin from '../../../../assets/social-icons/Linkedin.svg';
import Pinterest from '../../../../assets/social-icons/Pinterest.svg';
import Twitter from '../../../../assets/social-icons/Twitter.svg';
import Youtube from '../../../../assets/social-icons/Youtube.svg';

const AddCardForm = (props) => {

    const [cardTypeOptions] = useState([
        { key: 'af', value: 'Meetup', text: 'Meetup' },
        { key: 'ax', value: 'Personal', text: 'Personal' },
        { key: 'al', value: 'al', text: 'Professional' },
        { key: 'dz', value: 'dz', text: 'Travel' },
        { key: 'as', value: 'as', text: 'Social' },
        { key: 'ad', value: 'ad', text: 'Work' },
        { key: 'ao', value: 'ao', text: 'Office' }
    ]);

    const selectLogoImage = {
        behance: Behance,
        dribble: Dribble,
        facebook: Facebook,
        instagram: Instagram,
        linkedin: Linkedin,
        pinterest: Pinterest,
        twitter: Twitter,
        youtubeChannel: Youtube,
    }

    const [cardDetails, setCardDetails] = useState({
        category: '',
        // thumbnailId: '',
        facebookUrl: '',
        instagramUrl: '',
        linkedinUrl: '',
        tiktokUrl: '',
        youtubeChannelUrl: '',
        isFacebookActive: false,
        isInstagramActive: false,
        isLinkedinActive: false,
        isTiktokActive: false,
        isYoutubeChannelActive: false
    });
    const [invalidInput, setInvalidInput] = useState({});

    useEffect(() => {
        props.onGetSocialUrl();
    }, []);

    useEffect(() => {
        if (isObjectNotEmpty(props.socialUrl)) {
            let updatedCardDetails = { ...cardDetails };
            for (let key in props.socialUrl) {
                if (key.includes('Url')) {
                    updatedCardDetails[key] = props.socialUrl[key];
                }
            }
            setCardDetails(updatedCardDetails);
        }
    }, [props.socialUrl]);

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

    const addCard = () => {
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
            props.onAddCard(cardDetails);
        }
    };

    console.log('====', cardTypeOptions);

    return (
        <Form>
            <div className="card-type mt-2">
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
                <Row>
                    {
                        socialMediaPlatforms.map(item => {
                            return (
                                <Col xs={4} md={4} key={item}>
                                    <SocialIcons src={selectLogoImage[item]} platform={item} value={props.socialUrl[item + 'Url']} />
                                </Col>
                            );
                        })
                    }
                </Row>
            </div>
            <div className="text-right mt-4">
                <Button onClick={() => addCard()}>Add</Button>
            </div>
        </Form>
    );
};

const mapStateToProps = state => {
    return {
        socialUrl: state.home.socialUrl
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetSocialUrl: () => dispatch(actionCreaters.getSocialUrl()),
        onAddCard: (cardDetails) => dispatch(actionCreaters.addCard(cardDetails))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCardForm);
