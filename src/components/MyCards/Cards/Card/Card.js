import React, { useState } from 'react';
import { Col, } from 'reactstrap';
import { GoBroadcast } from 'react-icons/go';
import { Icon, Divider, Input, Radio, Button } from 'semantic-ui-react';
import './Card.css';
import Profile_pic from '../../../../assets/img/user.svg';
import Card1 from '../../../../assets/Cards/Card-1.jpg';
import Card2 from '../../../../assets/Cards/Card-2.jpg';
import Card3 from '../../../../assets/Cards/Card-3.jpg';
import Card4 from '../../../../assets/Cards/Card-4.jpg';
import Card5 from '../../../../assets/Cards/Card-5.jpg';
import Card6 from '../../../../assets/Cards/Card-6.jpg';

const Card = (props) => {

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

    return (
        <div className="card mt-4" style={{ borderRadius: '15px', backgroundImage: `url(${cards[props.id]})` }} onClick={() => editCardDetails(props.id)}>
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
        </div>
    );
};

export default Card;
