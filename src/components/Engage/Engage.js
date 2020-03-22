import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Col } from 'reactstrap';
import { Icon } from 'semantic-ui-react';
import * as actionCreaters from '../../store/actions';
import Cards from './Cards/Cards';
import Users from './Users/Users';
import './Engage.css';

const Engage = (props) => {

    const [direct, toggleDirect] = useState(true);

    useEffect(() => {
        // props.onGetLeaders();
    }, []);

    return (
        <div className="engage">
            <br />
            {!direct && <Cards />}
            <br /><br />
            {!direct && <h2 className="text-center">Lets Engage !</h2>}<br />
            <Col className="direct mt-3 text-center">
                <Icon name="exchange" onClick={() => toggleDirect(prevState => !prevState)} style={{ fontSize: '4em', color: '#ccc' }} />
            </Col>
            {direct && <Users />}
            {/* <br /><br /><br /><br /> */}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        leaders: state.leaders.leaders
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetLeaders: () => dispatch(actionCreaters.getLeaders())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Engage);
