import React from 'react';
import { getDate } from '../../../../helpers/miscellaneous';
import { FaMoneyCheck, FaMoneyBillAlt } from "react-icons/fa";
import '../Transactions.css';


const Entry = (props) => {
    return (
        <div className="entry border mt-3 pt-3 pb-3 pl-2 pr-1 d-flex" style={{ borderRadius: '15px' }}>
            <FaMoneyCheck style={{ fontSize: '22px' }} />
            <div className="ml-1">Entry, </div>
            <div className="contest-id pl-1">ID : {props.transaction.for.contestId}</div>
            <div className="date pl-1"> {getDate(props.transaction.createdOn)}</div>
            <div className="amount pl-3" id="amount">
                -{props.transaction.amount}
                <FaMoneyBillAlt style={{ fontSize: '22px', paddingLeft: '3px', paddingBottom: '4px' }} />
            </div>
        </div>
    );
};

export default Entry;