import React, { useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import { Col, Row } from 'reactstrap';
import WalletDetails from './WalletDetails/WalletDetails';
import './Wallet.css';

const AddSchoolForm = (props) => {

    return (
        <Col className="wallet pt-4">
            {/* <Row className="mb-3">
                <Col xs={4}>
                    <h3 className="text-white pl-1">My Cards</h3>
                </Col>
                <Col className="text-right">
                    <Button size="tiny" icon="add" style={{ color: '#313548', borderRadius: '8px' }} />
                </Col>
            </Row> */}
            <br />
            <WalletDetails walletDetails={props.walletDetails} id="1" /><br />
            {/* <WalletDetails walletDetails={props.walletDetails} id="2" /><br />
            <WalletDetails walletDetails={props.walletDetails} id="3" /><br />
            <WalletDetails walletDetails={props.walletDetails} id="4" /><br />
            <WalletDetails walletDetails={props.walletDetails} /><br /><br /><br /><br /> */}

            {/* <Transactions transactions={props.transactions} /> */}
        </Col>
    );
};

export default AddSchoolForm;
