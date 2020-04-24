import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import { Icon, Divider } from 'semantic-ui-react';
import { Col } from 'reactstrap';
import { GoBroadcast } from 'react-icons/go';
import "react-multi-carousel/lib/styles.css";
import Profile_pic from '../../../assets/img/user.svg';
import Card1 from '../../../assets/Cards/Card-1.png';
import Card2 from '../../../assets/Cards/Card-2.png';
import Card3 from '../../../assets/Cards/Card-3.png';
import Card4 from '../../../assets/Cards/Card-4.png';
import Card5 from '../../../assets/Cards/Card-5.png';
import Card6 from '../../../assets/Cards/Card-6.jpg';


import './Cards.css';

const Cards = (props) => {
    const [editCardId, setEditcardId] = useState(false);
    const [cards] = useState({
        1: Card1,
        2: Card2,
        3: Card3,
        4: Card4,
        5: Card5,
        6: Card6
    });


    const editCardDetails = (id) => {
        setEditcardId(prevState => !prevState);
    };

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3,
            partialVisibilityGutter: 40  // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2,
            partialVisibilityGutter: 30 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
            partialVisibilityGutter: 50 // optional, default to 1.
        }
    };

    return (
        <Carousel
            swipeable={true}
            draggable={true}
            arrows={true}
            responsive={responsive}
            partialVisbile={true}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            focusOnSelect={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container p-4"
            deviceType="mobile">
            {
                [1, 2, 3, 4, 5, 6].map(item => {
                    return (
                        <Col className="cards" key={item} style={{ borderRadius: '15px', backgroundImage: `url(${cards[item]})` }} onClick={() => editCardDetails(props.id)}>
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
                        </Col>
                    )
                })
            }
        </Carousel>
    );
};

export default Cards;

