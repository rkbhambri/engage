import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import { Button, Header, Input, Modal } from 'semantic-ui-react';
import { FaMoneyBillAlt } from 'react-icons/fa';
import './AddMoney.css';

const AddMoneyModal = (props) => {
    const [moneyValue, setMoneyValue] = useState('');

    const setMoney = (value) => {
        setMoneyValue(value);
    };

    return (
        <Modal
            dimmer="blurring"
            open={props.isAddMoneyModalOpen}
            onClose={props.toggleAddMoneyModal}
            className="add-money"
            closeIcon
            id="modal">
            <Modal.Content>
                <Modal.Description>
                    <Header>Add Money</Header>
                    <i aria-hidden="true" className="icon">₹</i>
                    <Input
                        type="number"
                        transparent
                        placeholder='Enter amount'
                        className="border-bottom p-2"
                        onChange={(event) => setMoney(event.target.value)}
                        value={moneyValue}
                        autoFocus />
                    <Col className="mt-4">
                        <Row>
                            <Button onClick={() => setMoney(100)}>100</Button>
                            <Button className="ml-1" onClick={() => setMoney(200)}>200</Button>
                            <Button className="ml-1" onClick={() => setMoney(500)}>500</Button>
                            <Button className="ml-1" onClick={() => setMoney(1000)}>1000</Button>
                        </Row>
                    </Col>
                </Modal.Description><br />
                <Col className="balance-details mt-1">
                    <Row>
                        <div className="add-money">
                            <Button
                                className="add-money-button"
                                onClick={props.toggleAddMoneyModal}>
                                Add Money
                            </Button>
                        </div>
                        <Col className="text-right">
                            <p className="font-weight-bold">BALANCE<br /></p>
                            <p className="balance font-weight-bold">
                                {props.balance}
                                <FaMoneyBillAlt className="money-icon" /></p>
                        </Col>
                    </Row>
                </Col>
            </Modal.Content>
        </Modal>
        // <Modal
        //     isOpen={props.isAddMoneyModalOpen}
        //     toggle={props.toggleAddMoneyModal}
        //     className={props.className}>
        //     <ModalBody>
        //         <Input
        //             type="number"
        //             placeholder="Enter amount"
        //             value={moneyValue}
        //             onChange={(event) => setMoney(event.target.value)} />
        //         <Col className="suggestions mt-3" >
        //             <Row>
        //                 <Button onClick={() => setMoney(100)}>100</Button>
        //                 <Button className="ml-2" onClick={() => setMoney(200)}>200</Button>
        //                 <Button className="ml-2" onClick={() => setMoney(500)}>500</Button>
        //                 <Button className="ml-2" onClick={() => setMoney(1000)}>100</Button>
        //             </Row>
        //         </Col>
        //         <Col className="mt-4">
        //             <Row>
        //                 <Button
        //                     color="primary"
        //                     type="submit"
        //                     size="sm"
        //                     onClick={props.onSubmit}>
        //                     ADD MONEY
        //             </Button>
        //                 <Col className="text-right">
        //                     <p>BALANCE<br /></p>
        //                     <b>{props.balance}</b>
        //                 </Col>
        //             </Row>

        //         </Col>
        //     </ModalBody>
        // </Modal>
    );
};

export default AddMoneyModal;
