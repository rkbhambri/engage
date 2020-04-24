import React, { useState, useEffect } from 'react';
import { Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { GoBroadcast } from 'react-icons/go';
import { Icon, Divider, Button } from 'semantic-ui-react';
import './Card.css';
import * as actionCreaters from '../../../../store/actions';
import { socialMediaPlatforms } from '../../../../helpers/socialMedia';
import { getCapitalizeText, parseData } from '../../../../helpers/miscellaneous';
import SocialIcons from '../../../Home/SocialDetails/SocialIcons';
import Profile_pic from '../../../../assets/img/user.svg';
import Card1 from '../../../../assets/Cards/Card-1.png';
import Card2 from '../../../../assets/Cards/Card-2.png';
import Card3 from '../../../../assets/Cards/Card-3.png';
import Card4 from '../../../../assets/Cards/Card-4.png';
import Card5 from '../../../../assets/Cards/Card-5.png';
import Card6 from '../../../../assets/Cards/Card-6.jpg';
import Behance from '../../../../assets/social-icons/Behance.svg';
import Dribble from '../../../../assets/social-icons/Dribble.svg';
import Facebook from '../../../../assets/social-icons/Facebook.svg';
import Instagram from '../../../../assets/social-icons/Instagram.svg';
import Linkedin from '../../../../assets/social-icons/Linkedin.svg';
import Pinterest from '../../../../assets/social-icons/Pinterest.svg';
import Twitter from '../../../../assets/social-icons/Twitter.svg';
import Youtube from '../../../../assets/social-icons/Youtube.svg';

const Card = (props) => {

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

    const [editCardId, setEditcardId] = useState(false);

    const [cards] = useState({
        Personal: Card1,
        Professional: Card2,
        Meetup: Card3,
        Travel: Card4,
        Social: Card5,
        Work: Card6,
        Office: Card1
    });

    const selectLogoImage = {
        behance: Behance,
        dribble: Dribble,
        facebook: Facebook,
        instagram: Instagram,
        linkedin: Linkedin,
        pinterest: Pinterest,
        twitter: Twitter,
        youtubeChannel: Youtube,
    };

    useEffect(() => {
        console.log('===', props.cardDetails);
        const card = { ...props.cardDetails };
        card.social.thumbnailId = ''
        setCardDetails(card.social);
    }, [props.cardDetails]);

    const editCardDetails = (id) => {
        setEditcardId(prevState => !prevState);
    };

    const addToCard = (activeUrl) => {
        const card = { ...cardDetails };
        card[activeUrl] = !card[activeUrl];
        setCardDetails(card);
        if (invalidInput.socialMedia) {
            const invalidInputDetails = parseData(invalidInput);
            delete invalidInputDetails.socialMedia;
            setInvalidInput(invalidInputDetails);
        }
    };

    const updateSocialUrl = (urlValue, urlKey) => {
        const card = { ...cardDetails };
        card[urlKey] = urlValue;
        setCardDetails(card);
        if (invalidInput.socialMedia) {
            const invalidInputDetails = parseData(invalidInput);
            delete invalidInputDetails.socialMedia;
            setInvalidInput(invalidInputDetails);
        }
    };

    const updateCardDetails = () => {
        setEditcardId(prevState => !prevState);
        props.onUpdateCardDetails(props.cardDetails.id, cardDetails);
    };

    return (
        <div className="card mt-4" style={{ borderRadius: '15px', backgroundImage: `url(${cards[props.cardDetails.category]})` }}>
            <div className="text-center mt-1 font-weight-bold">
                {props.cardDetails.category}
            </div>
            <Col className="text-right mb-2">
                <GoBroadcast className="mt-1" style={{ fontSize: '28px' }} />
                <div className="text-center">
                    <div className="profile-pic">
                        <img
                            src={Profile_pic}
                            className="rounded-circle"
                            alt="not available"
                            style={{ height: '60px', width: '60px' }}
                        // onError={(event) => event.target.src = defaultUserImage}
                        />
                    </div>
                    <div className="name mt-3">{props.userDetails.name}</div>
                </div>
            </Col>
            <Col
                className="social-details"
                md={12}
                sm={12}>
                <div className="social-icons">
                    <Divider horizontal className="m-0">

                        {
                            cardDetails.isFacebookActive &&
                            <img
                                src={Facebook}
                                alt="Engaze"
                                style={{ height: '40px', width: '40px' }} />
                        }
                        {
                            cardDetails.isInstagramActive &&
                            <img
                                src={Instagram}
                                alt="Engaze"
                                style={{ height: '40px', width: '40px' }} />
                        }
                        {
                            cardDetails.isLinkedinActive &&
                            <img
                                src={Linkedin}
                                alt="Engaze"
                                style={{ height: '40px', width: '40px' }} />
                        }
                        {
                            cardDetails.isTiktokActive &&
                            <img
                                src={Facebook}
                                alt="Engaze"
                                style={{ height: '40px', width: '40px' }} />
                        }
                        {
                            cardDetails.isDribbleActive &&
                            <img
                                src={Dribble}
                                alt="Engaze"
                                style={{ height: '40px', width: '40px' }} />
                        }
                        {
                            cardDetails.isBehanceActive &&
                            <img
                                src={Behance}
                                alt="Engaze"
                                style={{ height: '40px', width: '40px' }} />
                        }
                        {
                            cardDetails.isPinterestActive &&
                            <img
                                src={Pinterest}
                                alt="Engaze"
                                style={{ height: '40px', width: '40px' }} />
                        }
                        {
                            cardDetails.isTwitterActive &&
                            <img
                                src={Twitter}
                                alt="Engaze"
                                style={{ height: '40px', width: '40px' }} />
                        }
                        {
                            cardDetails.isYoutubeChannelActive &&
                            <img
                                src={Youtube}
                                alt="Engaze"
                                style={{ height: '40px', width: '40px' }} />
                        }
                    </Divider>
                </div>
            </Col>
            <div className="text-right" onClick={() => editCardDetails(props.id)}>
                <Icon name="angle down" style={{ fontSize: '25px' }} />
            </div>
            {
                editCardId &&
                <Col>
                    <Row>
                        {
                            socialMediaPlatforms.map(item => {
                                return (
                                    <Col xs={4} md={4} key={item}>
                                        <SocialIcons
                                            src={selectLogoImage[item]}
                                            platform={item}
                                            value={cardDetails[`${item}Url`] || ''}
                                            isActive={cardDetails[`is${getCapitalizeText(item)}Active`]}
                                            addToCard={() => addToCard(`is${getCapitalizeText(item)}Active`)}
                                            updateSocialUrl={(urlValue) => updateSocialUrl(urlValue, `${item}Url`)}
                                        />
                                    </Col>
                                );
                            })
                        }
                    </Row><br />
                    <div className="text-center mb-3">
                        <Button
                            className="pl-4 pr-4"
                            size="tiny"
                            icon="check"
                            style={{ color: 'green', borderRadius: '8px' }}
                            onClick={() => updateCardDetails()} />
                    </div>
                </Col>
            }
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateCardDetails: (cardId, cardDetails) => dispatch(actionCreaters.updateCardDetails(cardId, cardDetails))
    };
};

export default connect(null, mapDispatchToProps)(Card);
