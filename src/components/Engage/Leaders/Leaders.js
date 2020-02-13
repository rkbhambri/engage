import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreaters from '../../store/actions';
import { Col } from 'reactstrap';
import LeaderDetails from './LeaderDetails/LeaderDetails';
import LeadersData from './LeadersData/LeadersData';
import NoDataFound from '../NoDataFound/NoDataFound';
import { isArrayEmpty } from '../../helpers/array';
import AddSchoolForm from './AddSchoolForm';
import './Leaders.css';

const Leaders = (props) => {
    useEffect(() => {
        props.onGetLeaders();
    }, []);
    return (
        <Col className="leaders">
            <AddSchoolForm />
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
