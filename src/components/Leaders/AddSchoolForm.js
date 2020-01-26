import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';
import { Col, Row } from 'reactstrap';
import WalletDetails from './WalletDetails/WalletDetails';
import './Wallet.css';

const AddSchoolForm = (props) => {

    const [direct, toggleDirect] = useState(true);

    return (
        <Col className="wallet">
            {/* <Row className="mb-3">
                <Col xs={4}>
                    <h3 className="text-white pl-1">My Cards</h3>
                </Col>
                <Col className="text-right">
                    <Button size="tiny" icon="add" style={{ color: '#313548', borderRadius: '8px' }} />
                </Col>
            </Row> */}
            <br />
            {
                direct &&
                <>
                    <WalletDetails walletDetails={props.walletDetails} id="1" /> <br />
                </>
            }
            <br />
            <div className="direct text-center">
                <Icon name="exchange" onClick={() => toggleDirect(prevState => !prevState)} style={{ fontSize: '4em', color: '#ccc' }} />
            </div>
            <div className="users-around border p-2" style={{ color: '#ccc', borderRadius: '10px' }}>
                <h2>Around you</h2>
                <div className="user pt-2 pb-2">
                    <Icon name="user" style={{ fontSize: '1.2em', color: '#ccc' }} /> Ram krishan
                </div>
                <div className="user pt-2 pb-2">
                    <Icon name="user" style={{ fontSize: '1.2em', color: '#ccc' }} /> Karamjit
                </div>
                <div className="user pt-2 pb-2">
                    <Icon name="user" style={{ fontSize: '1.2em', color: '#ccc' }} /> Shubham
                </div>
                <div className="user pt-2 pb-2">
                    <Icon name="user" style={{ fontSize: '1.2em', color: '#ccc' }} /> Paras
                </div>
                <div className="user pt-2 pb-2">
                    <Icon name="user" style={{ fontSize: '1.2em', color: '#ccc' }} /> Karam
                </div>
            </div><br /><br />
            {/* <WalletDetails walletDetails={props.walletDetails} id="2" /><br />
            <WalletDetails walletDetails={props.walletDetails} id="3" /><br />
            <WalletDetails walletDetails={props.walletDetails} id="4" /><br />
            <WalletDetails walletDetails={props.walletDetails} /><br /><br /><br /><br /> */}

            {/* <Transactions transactions={props.transactions} /> */}
        </Col>
    );
};

export default AddSchoolForm;
