import React, { useState } from 'react';
import { Col, Form } from 'reactstrap';
import UserImg from '../../../assets/img/user.svg';
import { Icon, Input } from 'semantic-ui-react';
import './UserDetails.css';

const UserDetails = (props) => {

    const [isUserDetailsEditable, toggleUserDetailsEditable] = useState(false);

    const editUserDetails = () => {
        toggleUserDetailsEditable(prevState => !prevState);
    };

    return (
        <Col
            className="user-details mt-3"
            md={12}
            xs={12}>
            <div className="text-right">
                <Icon
                    name="edit outline"
                    onClick={editUserDetails}></Icon>
            </div>
            <div className="pb-4 d-flex">
                <img
                    src={UserImg}
                    alt="Profile Pic"
                    style={{
                        width: '60px', height: '60px'
                    }} />
                <Col className="details" md={10} xs={10}>
                    {
                        isUserDetailsEditable ?
                            <Form>
                                <Input
                                    type="text"
                                    transparent
                                    placeholder="Email"
                                    className="border-bottom"
                                    style={{ color: '#fff' }}
                                // onChange={(event) => setMoney(event.target.value)}
                                // value={moneyValue}
                                />
                                <Input
                                    type="text"
                                    transparent
                                    placeholder="Mobile"
                                    className="border-bottom mt-3"
                                    style={{ color: '#fff' }}
                                // onChange={(event) => setMoney(event.target.value)}
                                // value={moneyValue}
                                />
                                <Col className="save-user-details text-right mt-3" xs={10}>
                                    <Icon name="save outline" className="save-icon"></Icon>
                                    <Icon name="window close outline" className="close-icon ml-2"></Icon>
                                </Col>
                            </Form>
                            :
                            <>
                                <div className="mt-1">ramkrishan@gmail.com</div>
                                <div className="mt-2">+91-8146698440</div>
                            </>
                    }
                </Col>
            </div>
        </Col>
    );
};

export default UserDetails;
