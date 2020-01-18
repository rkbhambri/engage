import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import * as actionCreaters from '../../store/actions';
import { Col, Row } from 'reactstrap';
import WalletDetails from './WalletDetails/WalletDetails';
import Transactions from './Transactions/Transactions';
import './Wallet.css';

const Wallet = (props) => {

    useEffect(() => {
        props.onGetWalletDetails();
        props.onGetTransactions();
    }, []);

    return (
        <Col className="wallet pt-4">
            <Row className="mb-3">
                <Col xs={4}>
                    <h3 className="text-white pl-1">My Cards</h3>
                </Col>
                <Col className="text-right">
                    <Button size="tiny" icon="add" style={{ color: '#313548', borderRadius: '8px' }} />
                </Col>
            </Row>
            <WalletDetails walletDetails={props.walletDetails} id="1" /><br />
            <WalletDetails walletDetails={props.walletDetails} id="2" /><br />
            <WalletDetails walletDetails={props.walletDetails} id="3" /><br />
            <WalletDetails walletDetails={props.walletDetails} id="4" /><br />
            <WalletDetails walletDetails={props.walletDetails} /><br /><br /><br /><br />

            {/* <Transactions transactions={props.transactions} /> */}
        </Col>
    );
};

const mapStateToProps = state => {
    return {
        walletDetails: state.wallet.walletDetails,
        transactions: state.wallet.transactions
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetWalletDetails: () => dispatch(actionCreaters.getWalletDetails()),
        onGetTransactions: () => dispatch(actionCreaters.getTransactions())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
