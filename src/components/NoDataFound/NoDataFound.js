import React from 'react';
import { Col, Row } from 'reactstrap';

const NoDataFound = (props) => {
    return (
        <Row
            style={{
                height: '50vh',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: '100%',
                color: '#fff'
            }}>
            <Col className="text-center">
                <p>{props.component && props.component}</p>
                <p>{props.text}</p>
            </Col>
        </Row>
    );
};

export default NoDataFound;
