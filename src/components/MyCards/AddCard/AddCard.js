import React from 'react';
import { Modal } from 'semantic-ui-react';
import AddCardForm from './AddCardForm/AddCardForm'

const AddCard = (props) => {
    return (
        <Modal
            dimmer={true}
            open={props.isAddCardModalOpen}
            onClose={props.toggleAddCardModal}
            className="add-card-details"
            closeIcon
            id="modal">
            <Modal.Content>
                <Modal.Description>
                    <AddCardForm toggleAddCardModal={() => props.toggleAddCardModal()} />
                </Modal.Description><br />
            </Modal.Content>
        </Modal>
    );
};

export default AddCard;
