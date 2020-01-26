import React from 'react';
import { Col } from 'reactstrap';
import { Header } from 'semantic-ui-react';
import AccountDetails from './AccountDetails/AccountDetails';
import AccountOptions from './AccountOptions/AccountOptions';
// import MyContests from './MyContests/MyContests';
// import Referral from './Referral/Referral';
import './Account.css';

const Account = (props) => {
    return (
        <Col className="account">
            <Header as="h2" className="pt-4 pl-2">Account</Header>
            <AccountOptions />
            {/* <MyContests /> */}
            {/* <Referral /> */}
        </Col>
    );
};

export default Account;
