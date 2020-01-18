import React from 'react';
import { getDate } from '../../../../helpers/miscellaneous';
import { FaTrophy, FaMoneyBillAlt } from 'react-icons/fa';
import '../Transactions.css';

const Prize = (props) => {
    return (
        <div className="prize border mt-3 pt-3 pb-3 pl-2 pr-1 d-flex" style={{ borderRadius: '15px' }}>
            <FaTrophy style={{ fontSize: '24px' }} />
            <div className="ml-1">Prize, </div>
            <div className="contest-id pl-1">ID : {props.transaction.for.contestId}</div>
            <div className="date pl-2">{getDate(props.transaction.createdOn)}</div>
            <div className="amount pl-3" id="amount">
                +{props.transaction.amount}
                <FaMoneyBillAlt style={{ fontSize: '22px', paddingLeft: '4px', paddingBottom: '4px' }} />
            </div>
        </div>
    );
};

export default Prize;
