import React from 'react';
import { Col } from 'reactstrap';
import { Header, Icon } from 'semantic-ui-react';
import Cards from './Cards/Cards';
import './ReceivedCards.css';

const ReceivedCards = (props) => {
    return (
        <Col className="received-cards">
            <Header as="h2" className="pt-4">
                <Icon name="angle left" /> Received Cards
            </Header>
            <Cards />
        </Col>
    );
};

export default ReceivedCards;
