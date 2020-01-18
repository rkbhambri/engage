import React from 'react';
import { Col, Row } from 'reactstrap';
import { FaMoneyBillAlt } from 'react-icons/fa';

const Details = (props) => {
    return (
        <Col className="details mt-2 " xs={12} sm={12} md={12}>
            <Row>
                <div>
                    <FaMoneyBillAlt style={{ fontSize: '27px', paddingRight: '4px', paddingBottom: '4px' }} />
                    {props.contest.contestId}
                </div>
                <div className="pl-2 pr-2"> | </div>
                <div>
                    <FaMoneyBillAlt style={{ fontSize: '27px', paddingRight: '4px', paddingBottom: '4px' }} />
                    {props.contest.entryFee}
                </div>
                <div className="pl-2 pr-2"> | </div>
                <div>
                    <FaMoneyBillAlt style={{ fontSize: '27px', paddingRight: '4px', paddingBottom: '4px' }} />
                    {props.contest.canWin}
                </div>
            </Row>
        </Col>
    );
};

export default Details;
