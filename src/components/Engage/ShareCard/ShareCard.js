import React from 'react';
import { Modal, Button } from 'semantic-ui-react';
import { Col } from 'reactstrap';
import './ShareCard.css';

const ShareCard = (props) => {
    return (
        <Modal
            dimmer="blurring"
            open={props.isShareModalOpen}
            onClose={props.toggleShareModalOpen}
            className="share-card-details"
            closeIcon
            size="small"
            id="modal">
            <Modal.Content>
                <Modal.Description>
                    <Col className="share-info pt-3">
                        Share your {props.cardName} with {props.shareWith} {props.isMeetupMode && 'in meet-up mode'}
                    </Col>
                    <Col className="buttons mt-4 d-flex justify-content-between">
                        <Button size="tiny">Cancel</Button>
                        <Button size="tiny">Continue</Button>
                    </Col>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    );
};

export default ShareCard;
