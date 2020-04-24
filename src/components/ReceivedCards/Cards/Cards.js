import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import Profile_pic from '../../../assets/img/user.svg';
import Card1 from '../../../assets/Cards/Card-1.png';
import Card2 from '../../../assets/Cards/Card-2.png';
import Card3 from '../../../assets/Cards/Card-3.png';
import Card4 from '../../../assets/Cards/Card-4.png';
import Card5 from '../../../assets/Cards/Card-5.png';
import Card6 from '../../../assets/Cards/Card-6.jpg';
import ShowCard from '../ShowCard/ShowCard';
import './Cards.css';

const Cards = (props) => {
    const [cards] = useState({
        1: Card1,
        2: Card2,
        3: Card3,
        4: Card4,
        5: Card5,
        6: Card6
    });
    const [isShowCardModalOpen, setShowCardModalOpen] = useState(false);
    const [cardToShow, setCardToShow] = useState(false);

    const showCard = (id) => {
        setCardToShow(cards[id]);
        setShowCardModalOpen(prevState => !prevState);
    }

    return (
        <div className="cards pb-5 mt-3">
            <ShowCard
                isShowCardModalOpen={isShowCardModalOpen}
                toggleShowCardModal={() => setShowCardModalOpen(prevState => !prevState)}
                cardToShow={cardToShow}
            />
            <Col
                className="card-details mt-2 pb-4 pl-2 pr-2 pt-2 border"
                md={12}
                sm={12}
                style={{ borderRadius: '15px', background: '#fff', color: '#696969', backgroundImage: `url(${cards[1]})` }}
                onClick={() => showCard(1)}>
                <Row>
                    <Col className="d-flex mt-2" xs={8}>
                        <img
                            src={Profile_pic}
                            className="rounded-circle"
                            alt="not available"
                            style={{ height: '50px', width: '50px' }}
                        // onError={(event) => event.target.src = defaultUserImage}
                        />
                        <div className="details font-weight-bold pt-1 ml-3">
                            <div className="name">Ram krishan</div>
                            <div className="card-category pt-1 font-weight-bold">Travel</div>
                        </div>
                    </Col>
                    <Col className="mt-2" xs={4}>
                        <div className="text-center">Date : </div>
                        <div className="pt-1">12-04-2020</div>
                    </Col>
                </Row>
            </Col>
            <Col
                className="card-details mt-2 pb-4 pl-2 pr-2 pt-2 border"
                md={12}
                sm={12}
                style={{ borderRadius: '15px', background: '#fff', color: '#696969', backgroundImage: `url(${cards[2]})` }}
                onClick={() => showCard(2)}>
                <Row>
                    <Col className="d-flex mt-2" xs={8}>
                        <img
                            src={Profile_pic}
                            className="rounded-circle"
                            alt="not available"
                            style={{ height: '50px', width: '50px' }}
                        // onError={(event) => event.target.src = defaultUserImage}
                        />
                        <div className="details font-weight-bold pt-1 ml-3">
                            <div className="name">Ram krishan</div>
                            <div className="card-category pt-1 font-weight-bold">Travel</div>
                        </div>
                    </Col>
                    <Col className="mt-2" xs={4}>
                        <div>Date : </div>
                        <div>12-04-2020</div>
                    </Col>
                </Row>
            </Col>
            <Col
                className="card-details mt-2 pb-4 pl-2 pr-2 pt-2 border"
                md={12}
                sm={12}
                style={{ borderRadius: '15px', background: '#fff', color: '#696969', backgroundImage: `url(${cards[3]})` }}
                onClick={() => showCard(3)}>
                <Row>
                    <Col className="d-flex mt-2" xs={8}>
                        <img
                            src={Profile_pic}
                            className="rounded-circle"
                            alt="not available"
                            style={{ height: '50px', width: '50px' }}
                        // onError={(event) => event.target.src = defaultUserImage}
                        />
                        <div className="details font-weight-bold pt-1 ml-3">
                            <div className="name">Ram krishan</div>
                            <div className="card-category pt-1 font-weight-bold">Travel</div>
                        </div>
                    </Col>
                    <Col className="mt-2" xs={4}>
                        <div>Date : </div>
                        <div>12-04-2020</div>
                    </Col>
                </Row>
            </Col>
            <Col
                className="card-details mt-2 pb-4 pl-2 pr-2 pt-2 border"
                md={12}
                sm={12}
                style={{ borderRadius: '15px', background: '#fff', color: '#696969', backgroundImage: `url(${cards[4]})` }}
                onClick={() => showCard(4)}>
                <Row>
                    <Col className="d-flex mt-2" xs={8}>
                        <img
                            src={Profile_pic}
                            className="rounded-circle"
                            alt="not available"
                            style={{ height: '50px', width: '50px' }}
                        // onError={(event) => event.target.src = defaultUserImage}
                        />
                        <div className="details font-weight-bold pt-1 ml-3">
                            <div className="name">Ram krishan</div>
                            <div className="card-category pt-1 font-weight-bold">Travel</div>
                        </div>
                    </Col>
                    <Col className="mt-2" xs={4}>
                        <div>Date : </div>
                        <div>12-04-2020</div>
                    </Col>
                </Row>
            </Col>
            <Col
                className="card-details mt-2 pb-4 pl-2 pr-2 pt-2 border"
                md={12}
                sm={12}
                style={{ borderRadius: '15px', background: '#fff', color: '#696969', backgroundImage: `url(${cards[5]})` }}
                onClick={() => showCard(5)}>
                <Row>
                    <Col className="d-flex mt-2" xs={8}>
                        <img
                            src={Profile_pic}
                            className="rounded-circle"
                            alt="not available"
                            style={{ height: '50px', width: '50px' }}
                        // onError={(event) => event.target.src = defaultUserImage}
                        />
                        <div className="details font-weight-bold pt-1 ml-3">
                            <div className="name">Ram krishan</div>
                            <div className="card-category pt-1 font-weight-bold">Travel</div>
                        </div>
                    </Col>
                    <Col className="mt-2" xs={4}>
                        <div>Date : </div>
                        <div>12-04-2020</div>
                    </Col>
                </Row>
            </Col>
            <Col
                className="card-details mt-2 pb-4 pl-2 pr-2 pt-2 border"
                md={12}
                sm={12}
                style={{ borderRadius: '15px', background: '#fff', color: '#696969', backgroundImage: `url(${cards[6]})` }}
                onClick={() => showCard(6)}>
                <Row>
                    <Col className="d-flex mt-2" xs={8}>
                        <img
                            src={Profile_pic}
                            className="rounded-circle"
                            alt="not available"
                            style={{ height: '50px', width: '50px' }}
                        // onError={(event) => event.target.src = defaultUserImage}
                        />
                        <div className="details font-weight-bold pt-1 ml-3">
                            <div className="name">Ram krishan</div>
                            <div className="card-category pt-1 font-weight-bold">Travel</div>
                        </div>
                    </Col>
                    <Col className="mt-2" xs={4}>
                        <div>Date : </div>
                        <div>12-04-2020</div>
                    </Col>
                </Row>
            </Col>
        </div >

    );
};

export default Cards;
