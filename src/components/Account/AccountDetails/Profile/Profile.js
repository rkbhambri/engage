import React from 'react';
import { Col } from 'reactstrap';
import UserImg from '../../../../assets/img/user.svg';
import { Icon } from 'semantic-ui-react';
import './Profile.css';

const Profile = (props) => {
    return (
        <Col
            className="profile pt-3"
            md={12}
            sm={12}>
            <div className="text-right">
                <Icon name="edit outline"></Icon>
            </div>
            <div className="pb-4 d-flex">
                <img
                    src={UserImg}
                    alt="Profile Pic"
                    style={{
                        width: '60px', height: '60px'
                    }} />
                <Col className="details" md={10} xs={10}>
                    <span>Beyond the boundaries</span><br />
                    <span className="mt-2">ramkrishan@gmail.com</span><br />
                    <span className="mt-2">8146698440</span>
                </Col>
            </div>
        </Col>
    );
};

export default Profile;
