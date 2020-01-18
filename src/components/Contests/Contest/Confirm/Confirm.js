import React from 'react';
import { Col, Row } from 'reactstrap';
import { Button, Header, Modal } from 'semantic-ui-react';
import { FaMoneyBillAlt } from 'react-icons/fa';
import './Confirm.css';

const Confirm = (props) => {
    return (
        <Modal
            dimmer="blurring"
            open={true}
            className="confirm"
            onClose={props.toggleAddMoneyModal}
            closeIcon
            id="modal">
            <Modal.Content>
                <Modal.Description>
                    <Header className="pl-2">YOUR ANSWER</Header>
                    <Header className="answer pt-3 pb-3 pl-2">Your answer comes here</Header>
                    <div className="low-balance pl-2">
                        Low wallet balance ! Add 50 <FaMoneyBillAlt className="icon" /> to your wallet to enter the contest.
                    </div>
                    <div className="details mt-4">
                        <Row>
                            <Col>
                                <FaMoneyBillAlt className="icon" /> J8979hp
                            </Col>
                            <Col>
                                <FaMoneyBillAlt className="icon" /> 68700
                            </Col>
                            <Col>
                                <FaMoneyBillAlt className="icon" /> 68700
                            </Col>
                        </Row>
                    </div>
                </Modal.Description><br />
                <Col className="balance-details mt-1">
                    <Row>
                        <Button
                            className="add-money-button"
                            onClick={props.toggleAddMoneyModal}>
                            PAY & CONFIRM
                        </Button>
                        <Col className="text-right">
                            <p className="font-weight-bold">BALANCE<br /></p>
                            <p className="balance font-weight-bold">
                                {/* {props.balance} */}
                                6000
                                <FaMoneyBillAlt className="money-icon" /></p>
                        </Col>
                    </Row>
                </Col>
            </Modal.Content>
        </Modal>
    );
};

export default Confirm;
