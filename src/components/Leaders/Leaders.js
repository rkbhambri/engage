import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreaters from '../../store/actions';
import { Col } from 'reactstrap';
import LeaderDetails from './LeaderDetails/LeaderDetails';
import LeadersData from './LeadersData/LeadersData';
import NoDataFound from '../NoDataFound/NoDataFound';
import { isArrayEmpty } from '../../helpers/array';
import './Leaders.css';

const Leaders = (props) => {
    useEffect(() => {
        props.onGetLeaders();
    }, []);
    return (
        <Col className="leaders pt-5">
            {isArrayEmpty(props.leaders) ? <NoDataFound text="No leadership details found !" /> : <LeaderDetails />}
            <LeadersData leaders={props.leaders} />
            <br /><br /><br /><br />
        </Col>
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

export default connect(mapStateToProps, mapDispatchToProps)(Leaders);
