import React from 'react';
import { Col, Row } from 'reactstrap';
import { FaMoneyBillAlt } from 'react-icons/fa';

const Details = (props) => {
    return (
        <div className="details mt-4">
            <Row>
                <Col>
                    <FaMoneyBillAlt className="icon" /> {props.contestId}
                </Col>
                <Col>
                    <FaMoneyBillAlt className="icon" /> {props.entryFee}
                </Col>
            </Row>
        </div>
    )
};

export default Details;
