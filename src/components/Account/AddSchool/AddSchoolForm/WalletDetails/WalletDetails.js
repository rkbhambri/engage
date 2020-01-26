import React, { useState } from 'react';
import { Col, } from 'reactstrap';
import { GoBroadcast } from 'react-icons/go';
import { FaFacebookF, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';
import { Icon, Divider, Input, Radio, Button } from 'semantic-ui-react';
import './WalletDetails.css';
import Profile_pic from '../../../../../assets/img/user.svg';

const WalletDetails = (props) => {
    const [editCardId, setEditcardId] = useState(false);
    const [isAddMoneyModalOpen, setAddMoneyModalOpen] = useState(false);
    const [isWithdrawMoneyModalOpen, setWithdrawMoneyModalOpen] = useState(false);

    const toggleAddMoneyModal = () => {
        setAddMoneyModalOpen(prevState => !prevState);
    };

    const toggleWithdrawMoneyModal = () => {
        setWithdrawMoneyModalOpen(prevState => !prevState);
    };

    const editCardDetails = (id) => {
        setEditcardId(prevState => !prevState);
    }

    return (
        <div className="wallet-details" style={{ borderRadius: '15px' }} onClick={() => editCardDetails(props.id)}>
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
                    <div className="name mt-3">KARAMJIT DAS</div>
                </div>
            </Col>
            <Col
                className="leaders-details pb-2"
                md={12}
                sm={12}>
                <div className="account-details">
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

export default WalletDetails;
