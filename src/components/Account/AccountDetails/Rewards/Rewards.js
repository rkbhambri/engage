import React from 'react';
import { Col } from 'reactstrap';
import { FaMoneyBillAlt } from 'react-icons/fa';
import './Rewards.css';

const Rewards = (props) => {
    return (
        <Col className="rewards pt-3 pb-3 d-flex" md={12} xs={12}>
            <div className="contests-joined text-center">
                <FaMoneyBillAlt style={{ fontSize: '22px', paddingBottom: '4px' }} /> &nbsp; 129
                <p>CONTESTS JOINED</p>
            </div>
            <div className="prize-earned text-center">
                <FaMoneyBillAlt style={{ fontSize: '22px', paddingBottom: '4px' }} /> &nbsp; 6548
                <p>PRIZE EARNED</p>
            </div>
            <div className="current-rank text-center">
                <FaMoneyBillAlt style={{ fontSize: '22px', paddingBottom: '4px' }} /> &nbsp; 2109
                <p>CURRENT RANK</p>
            </div>
        </Col>
    );
};

export default Rewards;
