import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Col } from 'reactstrap';
import { GoBroadcast } from 'react-icons/go';
import { Icon, Divider, Input, Radio, Button } from 'semantic-ui-react';
import './Cards.css';
import Profile_pic from '../../../assets/img/user.svg';

const Cards = (props) => {
    const [editCardId, setEditcardId] = useState(false);

    const editCardDetails = (id) => {
        setEditcardId(prevState => !prevState);
    };

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    };

    return (
        <Carousel
            swipeable={true}
            draggable={true}
            arrows={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            focusOnSelect={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
            deviceType="mobile">
            {
                [1, 2, 3, 4].map(item => {
                    return (
                        <Col className="cards" key={item} style={{ borderRadius: '15px' }} onClick={() => editCardDetails(props.id)}>
                            <Col className="text-right mb-4">
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
                                    <div className="name mt-3">KARAMJIT DAS {item}</div>
                                </div>
                            </Col>
                            <Col
                                className="social-details pb-2"
                                md={12}
                                sm={12}>
                                <div className="social-icons">
                                    <Divider horizontal>
                                        <Icon name="facebook official" style={{ fontSize: '28px' }} />
                                        <Icon className="ml-2 mr-2" name="instagram" style={{ fontSize: '28px' }} />
                                        <Icon className="ml-2 mr-2" name="youtube" style={{ fontSize: '28px' }} />
                                        <Icon name="github" style={{ fontSize: '28px' }} />
                                    </Divider>
                                </div>
                            </Col>
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
                        </Col>
                    )
                })
            }
        </Carousel>
    );
};

export default Cards;

