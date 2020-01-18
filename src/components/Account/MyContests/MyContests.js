import React, { useState } from 'react';
import { Col } from 'reactstrap';
import { Button } from 'semantic-ui-react';
import UnsettledContest from './UnsettledContests/UnsettledContests';
import SettledContest from './SettledContest/SettledContest';
import { Header, Icon } from 'semantic-ui-react';
import './MyContests.css';

const MyContests = (props) => {

    const [userContent, setUserContent] = useState('unsettled');
    const [content, setContent] = useState(<UnsettledContest />);

    const showDetails = (placeholder) => {
        if (placeholder === 'unsettled') {
            setContent(<UnsettledContest />);
        }
        if (placeholder === 'settled') {
            setContent(<SettledContest />)
        }
        setUserContent(placeholder)
    };

    return (
        <Col className="my-contests" xs={12} sm={12} md={12}>
            <Header as="h3" className="mt-4">
                <Icon link name='angle left' onClick={() => props.history.goBack()} />
                My Contest
            </Header><br />
            <Button.Group widths='2'>
                <Button
                    onClick={() => showDetails('unsettled')}
                    active={userContent === 'unsettled' ? true : false}>
                    UNSETTLED
                </Button>
                <Button
                    onClick={() => showDetails('settled')}
                    active={userContent === 'settled' ? true : false}>
                    SETTLED
                </Button>
            </Button.Group>
            {/* <ButtonGroup>
                <Button
                    color="primary"
                    onClick={() => showDetails('unsettled')}
                    active={userContent === 'unsettled' ? true : false}>UNSETTLED</Button>
                <Button
                    color="primary"
                    onClick={() => showDetails('settled')}
                    active={userContent === 'settled' ? true : false}>SETTLED</Button>
            </ButtonGroup> */}
            <div className="mt-3">
                {content}
            </div>
        </Col>
    );
};

export default MyContests;
