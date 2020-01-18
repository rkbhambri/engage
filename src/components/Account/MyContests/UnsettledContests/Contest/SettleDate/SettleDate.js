import React from 'react';
import { getDateTime } from '../../../../../../helpers/miscellaneous';
import { Icon } from 'semantic-ui-react';

const SettleDate = (props) => {
    console.log('===props.contest.resultTime===', props.resultTime)
    return (
        <div className="settle-date mt-2 p-3">
            <Icon name="recycle"></Icon>
            SETTLE DATE : <span>{getDateTime(props.resultTime)}</span>
        </div>
    );
};

export default SettleDate;
