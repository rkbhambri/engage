import React from 'react';
import Entry from './Entry/Entry';
import Prize from './Prize/Prize';
import { isArrayEmpty } from '../../../helpers/array';
import NoDataFound from '../../NoDataFound/NoDataFound';
import { FaRupeeSign } from 'react-icons/fa';

const Transactions = (props) => {
    const getTransactions = () => {
        return (
            props.transactions.map(item => {
                switch (item.context) {
                    case 'winAmount':
                        return <Prize transaction={item} key={item.id} />
                    case 'placedBet':
                        return <Entry transaction={item} key={item.id} />
                    default:
                        break;
                }
                return 1;
            })
        );
    }
    return (
        <div className="transactions mt-3">
            {
                isArrayEmpty(props.transactions) ?
                    <NoDataFound text="Looks like you are yet to make your first transaction" component={<FaRupeeSign style={{ fontSize: '30px', color: '#F7C244' }} />} />
                    :
                    getTransactions()
            }
        </div>
    );
}

export default Transactions;
