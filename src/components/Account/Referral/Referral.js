import React from 'react';
import { Col, Row } from 'reactstrap';
import { Button, Icon, Header } from 'semantic-ui-react';
import './Referral.css';

const Referral = (props) => {
    return (
        <>
            <Col className="heading pt-4">
                <Header as="h3" className="mt-4">
                    <Icon link name='angle left' onClick={() => props.history.goBack()} />
                    Refer & Earn
                </Header>
            </Col>
            <Row
                style={{
                    height: '80vh',
                    justifyContent: 'center',
                    alignItems: 'center',
                    maxWidth: '100%'
                }}>
                <Col className="referral offset-1 p-4" sm={10} xs={10} md={4} style={{ borderRadius: '15px', minHeight: '230px' }}>
                    <p>Refer a friend & we will give you & your buddy 50 for your contest</p>
                    <Button size="medium" className="mt-4">INVITE & EARN</Button>
                </Col>
            </Row>
        </>
    );
};

export default Referral;
