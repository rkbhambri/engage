import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import * as actionCreaters from '../../store/actions';
import { Col, Row } from 'reactstrap';
import Cards from './Cards/Cards';
import './MyCards.css';

const MyCards = (props) => {

    useEffect(() => {
        props.onGetWalletDetails();
        props.onGetTransactions();
    }, []);

    return (
        <Col className="my-cards pt-4">
            <Row className="mb-3">
                <Col xs={8}>
                    <h3 className="text-white pl-1">My Cards</h3>
                </Col>
                <Col className="add-icon text-right">
                    <Button size="tiny" icon="add" style={{ color: '#000', borderRadius: '8px' }} />
                </Col>
            </Row>
            <Cards />
            <br /><br /><br /><br />

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

export default connect(mapStateToProps, mapDispatchToProps)(MyCards);
