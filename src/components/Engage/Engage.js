import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Col } from 'reactstrap';
import * as actionCreaters from '../../store/actions';
import EngazeIcon from '../../assets/Icons/engaze-icon.svg';
import BroadcastIcon from '../../assets/Icons/broadcast.svg';
import Cards from './Cards/Cards';
import Card4 from '../../assets/Cards/Card-4.png';
import UsersAround from './UsersAround/UsersAround';
import Loading from './Loading/Loading'
import './Engage.css';

const Engage = (props) => {

    const [direct, toggleDirect] = useState(false);

    useEffect(() => {
        // props.onGetLeaders();
    }, []);

    return (
        <div className="engage">
            <br />
            {!direct && <Cards />}
            {
                direct &&
                <Col className="asas">
                    <p style={{ borderRadius: '15px', height: '150px', backgroundImage: `url(${Card4})`, backgroundSize: 'cover' }}></p>
                </Col>
            }
            <br /><br />
            <Col className="direct mt-2 text-center">
                <img
                    src={direct ? BroadcastIcon : EngazeIcon}
                    className="toggle-icon"
                    alt="Engaze"
                    onClick={() => toggleDirect(prevState => !prevState)}
                />
            </Col>
            {direct && <Loading />}
            {!direct && <p className="text-center">Press this button to connect with people nearby</p>}
            <UsersAround direct={direct} />
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
