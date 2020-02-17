import React from 'react';
import { Col, Row } from 'reactstrap';
import { Icon } from 'semantic-ui-react';
import UserDetails from './UserDetails/UserDetails';
import SocialDetails from './SocialDetails/SocialDetails';
import './Home.css';

const Home = (props) => {
    return (
        <div className="home">
            <div className="home-data pt-4">
                <Col xs={12} md={12}>
                    <Row>
                        <Col xs={2}>
                            <Icon name="cog"></Icon>
                        </Col>
                        <Col xs={10}>
                            <h3>All your information</h3>
                        </Col>
                    </Row>
                </Col>
                <UserDetails />
            </div>
            <SocialDetails />
        </div>
    );
};

export default Home;
