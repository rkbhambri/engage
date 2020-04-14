import React, { useState } from 'react';
import { Col, } from 'reactstrap';
import { GoBroadcast } from 'react-icons/go';
import { Icon, Divider, Input, Radio, Button, Image } from 'semantic-ui-react';
import './Card.css';
import Profile_pic from '../../../../assets/img/user.svg';
import Card1 from '../../../../assets/Cards/Card-1.jpg';
import Card2 from '../../../../assets/Cards/Card-2.jpg';
import Card3 from '../../../../assets/Cards/Card-3.jpg';
import Card4 from '../../../../assets/Cards/Card-4.jpg';
import Card5 from '../../../../assets/Cards/Card-5.jpg';
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


    const editCardDetails = (id) => {
        setEditcardId(prevState => !prevState);
    };

    return (
        <div className="card mt-4" style={{ borderRadius: '15px', backgroundImage: `url(${cards[props.cardDetails.category]})` }}>
            <Col className="text-right mb-2">
                <GoBroadcast className="mt-3" style={{ fontSize: '28px' }} />
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
                    <div className="name mt-3">KARAMJIT DAS</div>
                </div>
            </Col>
            <Col
                className="social-details"
                md={12}
                sm={12}>
                <div className="social-icons">
                    <Divider horizontal>

                        {
                            props.cardDetails.isFacebookActive &&
                            <img
                                src={Facebook}
                                alt="Engaze"
                                style={{ height: '40px', width: '40px' }} />
                        }
                        {
                            props.cardDetails.isInstagramActive &&
                            <img
                                src={Instagram}
                                alt="Engaze"
                                style={{ height: '40px', width: '40px' }} />
                        }
                        {
                            props.cardDetails.isLinkedinActive &&
                            <img
                                src={Linkedin}
                                alt="Engaze"
                                style={{ height: '40px', width: '40px' }} />
                        }
                        {
                            props.cardDetails.isTiktokActive &&
                            <img
                                src={Facebook}
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
                <div className="p-2">
                    <div className="d-flex" style={{ justifyContent: 'space-between' }}>
                        <Icon name="facebook official" style={{ fontSize: '28px' }} />
                        <Input
                            type="text"
                            transparent
                            placeholder="Enter here"
                            className="border"
                            style={{ color: '#fff', borderRadius: '7px' }}
                        // onChange={(event) => setMoney(event.target.value)}
                        // value="parasbhambri.2@facebook.com"
                        />
                        <Radio toggle />
                    </div>
                    <div className="d-flex mt-4" style={{ justifyContent: 'space-between' }}>
                        <Icon name="instagram" style={{ fontSize: '28px' }} />
                        <Input
                            type="text"
                            transparent
                            placeholder="Enter here"
                            className="border"
                            style={{ color: '#fff', borderRadius: '7px' }}
                        // onChange={(event) => setMoney(event.target.value)}
                        // value={moneyValue}
                        />
                        <Radio toggle />
                    </div>
                    <div className="d-flex mt-4" style={{ justifyContent: 'space-between' }}>
                        <Icon name="youtube" style={{ fontSize: '28px' }} />
                        <Input
                            type="text"
                            transparent
                            placeholder="Enter here"
                            className="border"
                            style={{ color: '#fff', borderRadius: '7px' }}
                        // onChange={(event) => setMoney(event.target.value)}
                        // value={moneyValue}
                        />
                        <Radio toggle />
                    </div>
                    <div className="d-flex mt-4" style={{ justifyContent: 'space-between' }}>
                        <Icon name="github" style={{ fontSize: '28px' }} />
                        <Input
                            type="text"
                            transparent
                            placeholder="Enter here"
                            className="border"
                            style={{ color: '#fff', borderRadius: '7px' }}
                        // onChange={(event) => setMoney(event.target.value)}
                        // value={moneyValue}
                        />
                        <Radio toggle />
                    </div>
                    <div className="text-center mt-4">
                        <Button className="pl-4 pr-4" size="tiny" icon="check" style={{ color: 'green', borderRadius: '8px' }} />
                    </div>
                </div>
            }
        </div>
    );
};

export default Card;
