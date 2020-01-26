import React from 'react';
import { Modal, Button, Header, Icon } from 'semantic-ui-react';
import AddSchoolForm from './AddSchoolForm/AddSchoolForm';
import './AddSchool.css';

const AddSchool = (props) => {

    return (
        <Modal
            // trigger={<Button>Basic Modal</Button>}
            basic
            //  size='small'
            dimmer="blurring"
            open={props.isAddSchoolModalOpen}
            onClose={props.toggleAddSchoolModal}
            className="add-school-details"
            closeIcon
            id="modal">
            <AddSchoolForm />
            {/* <Header icon='archive' content='Archive Old Messages' />
            <Modal.Content>
                <p>
                    Your inbox is getting full, would you like us to enable automatic
                    archiving of old messages?
                </p>
            </Modal.Content>
            <Modal.Actions>
                <Button basic color='red' inverted>
                    <Icon name='remove' /> No
            </Button>
                <Button color='green' inverted>
                    <Icon name='checkmark' /> Yes
            </Button>
            </Modal.Actions> */}
        </Modal>
    );
};

export default AddSchool;