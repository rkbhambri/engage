import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreaters from '../../../../store/actions';
import Contest from './Contest/Contest';
import { isArrayEmpty } from '../../../../helpers/array';
import NoDataFound from '../../../NoDataFound/NoDataFound';

const SettledContest = (props) => {

    useEffect(() => {
        props.settledContests.length === 0 && props.onGetSettledContests();
    }, []);

    const getSettledContests = () => {
        return (
            props.settledContests.map(item => {
                return (
                    <div className="contest-details" key={item.id}>
                        <Contest contest={item} />
                    </div>
                );
            })
        )
    };

    return (
        <div className="settled-contests">
            {isArrayEmpty(props.settledContests) ? <NoDataFound text="There are no settled contests" /> : getSettledContests()}
        </div>
    );
};


const mapStateToProps = state => {
    return {
        settledContests: state.account.settledContests
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetSettledContests: () => dispatch(actionCreaters.getSettledContests())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettledContest);
