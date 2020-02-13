import React from 'react';
import { Col } from 'reactstrap';
import UserImg from '../../../assets/img/user.svg';
import { FaMoneyBillAlt } from 'react-icons/fa';

const LeaderDetails = (props) => {
    return (
        <div className="leader-details">
            <h3 className="text-white pl-2">Leaders - Top 100</h3><br />
            <Col
                className="leaders-heading pl-2 pt-4 pb-3 d-flex"
                md={12}
                sm={12}>
                <img
                    src={UserImg}
                    alt="Profile Pic"
                    style={{
                        width: '50px', height: '50px'
                    }} />
                <h5 className="mt-2 ml-2">
                    <span>Beyond the boundaries</span>
                    <p className="pt-2">
                        <span>6458 <FaMoneyBillAlt style={{ fontSize: '27px', paddingLeft: '2px', paddingBottom: '4px' }} /></span>
                        <span className="ml-2 mr-2"> | </span>
                        <span>2145 <FaMoneyBillAlt style={{ fontSize: '27px', paddingLeft: '2px', paddingBottom: '4px' }} /></span>
                    </p>
                </h5>
            </Col>
        </div>
    );
};

export default LeaderDetails;
