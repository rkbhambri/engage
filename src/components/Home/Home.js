import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { Icon } from 'semantic-ui-react';
import * as actionCreaters from '../../store/actions';
import UserDetails from './UserDetails/UserDetails';
import SocialDetails from './SocialDetails/SocialDetails';
// import Location from './Location/Location';
import './Home.css';

const Home = (props) => {

    useEffect(() => {
        props.onGetUserProfile();
        return (() => props.onEmptyUserProfile());
    }, []);

    console.log('===home====');


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
            {/* <Location /> */}
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onGetUserProfile: () => dispatch(actionCreaters.getUserProfile()),
        onEmptyUserProfile: () => dispatch(actionCreaters.emptyUserProfile())
    };
};

export default connect(null, mapDispatchToProps)(Home);
