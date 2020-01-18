import React from 'react';
import { Col, Row } from 'reactstrap';

const Details = (props) => {
    return (
        <div className="details mt-2 border">
            <Row>
                <Col>{props.contest.contestId}</Col>
                <Col>{props.contest.entryFee}</Col>
                <Col>{props.contest.canWin}</Col>
            </Row>
        </div>
    );
};

export default Details;
