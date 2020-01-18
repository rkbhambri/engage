import React from 'react';
import { Col, Row } from 'reactstrap';

const Options = (props) => {
    return (
        <Col className="options mt-3">
            {
                props.options.map(option => {
                    return (
                        <Row className="option-wrapper text-left mt-2 pt-4 pb-4" key={option.id}>
                            <Col className="option" xs={10}>{option.optionText}</Col>
                            <span className="bet-count" xs={2}>{`${option.betCountOnOption} %`}</span>
                        </Row>
                    );
                })
            }
        </Col>
    );
};

export default Options;
