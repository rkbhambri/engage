import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreaters from '../../../../store/actions';
import Contest from './Contest/Contest';
import { isArrayEmpty } from '../../../../helpers/array';
import NoDataFound from '../../../NoDataFound/NoDataFound';

const UnsettledContests = (props) => {

    useEffect(() => {
        props.unsettledContests.length === 0 && props.onGetUnsettledContests();
    }, []);

    const getUnsettledContests = () => {
        return (
            props.unsettledContests.map(item => {
                return (
                    <div className="contest-details" key={item.id}>
                        <Contest contest={item} />
                    </div>
                );
            })
        )
    };

    return (
        <div className="unsettled-contests">
            {isArrayEmpty(props.unsettledContests) ? <NoDataFound text="Looks like you have no unsettled contests" /> : getUnsettledContests()}
        </div>
    );
};


const mapStateToProps = state => {
    return {
        unsettledContests: state.account.unsettledContests
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetUnsettledContests: () => dispatch(actionCreaters.getUnsettledContests())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UnsettledContests);
