import React from 'react';
import { getDateTime } from '../../../../../../helpers/miscellaneous';

const SettleDate = (props) => {
    return (
        <div className="settle-date mt-2">
            SETTLE DATE : <span>{getDateTime(props.resultTime)}</span>
        </div>
    );
};

export default SettleDate;
