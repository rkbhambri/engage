import React from 'react';
import { Col, Row } from 'reactstrap';
import { Button, Header, Input, Modal } from 'semantic-ui-react';
import { FaMoneyBillAlt } from 'react-icons/fa';
import './WithdrawMoney.css';

const WithdrawMoney = (props) => {
    return (
        <Modal
            dimmer="blurring"
            open={props.isWithdrawMoneyModalOpen}
            onClose={props.toggleWithdrawMoneyModal}
            closeIcon
            className="withdraw-money"
            id="modal">
            <Modal.Content>
                <Modal.Description>
                    <i aria-hidden="true" className="icon">₹</i>
                    <Input
                        type="number"
                        transparent
                        placeholder='Enter amount'
                        className="border-bottom p-2"
                        autoFocus />
                    <Header style={{ fontSize: '1em' }}>Service fee of ₹5 will be levied on withdrawls </Header>
                </Modal.Description><br />
                <Col className="balance-details mt-1">
                    <Row>
                        <div className="withdraw-money">
                            <Button
                                className="withdraw-money-button"
                                onClick={props.toggleWithdrawMoneyModal}>
                                WITHDRAW
                            </Button>
                        </div>
                        <Col className="text-right">
                            <p className="font-weight-bold">BALANCE<br /></p>
                            <p className="balance font-weight-bold">
                                {props.balance}
                                <FaMoneyBillAlt className="money-icon" />
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Modal.Content>
        </Modal>
    );
};

export default WithdrawMoney;
