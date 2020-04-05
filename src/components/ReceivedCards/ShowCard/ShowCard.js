import React from 'react';
import { Modal, Icon, Divider } from 'semantic-ui-react';
import { GoBroadcast } from 'react-icons/go';
import { Col } from 'reactstrap';
import Profile_pic from '../../../assets/img/user.svg';

const ShowCard = (props) => {
    return (
        <Modal
            basic
            dimmer="blurring"
            open={props.isShowCardModalOpen}
            onClose={props.toggleShowCardModal}
            className="show-card-details"
            // closeIcon
            id="modal">
            <Modal.Content>
                <Modal.Description>
                    <div className="card mt-4" style={{ borderRadius: '15px', backgroundImage: `url(${props.cardToShow})` }}>
                        <Col className="text-right mb-2">
                            <GoBroadcast className="mt-3" style={{ fontSize: '28px' }} />
                            <div className="text-center">
                                <div className="profile-pic">
                                    <img
                                        src={Profile_pic}
                                        className="rounded-circle"
                                        alt="not available"
                                        style={{ height: '60px', width: '60px' }}
                                    // onError={(event) => event.target.src = defaultUserImage}
                                    />
                                </div>
                                <div className="name mt-3">Ram krishan</div>
                            </div>
                        </Col>
                        <Col
                            className="social-details pb-2"
                            md={12}
                            sm={12}>
                            <div className="social-icons">
                                <Divider horizontal>
                                    <Icon name="facebook official" style={{ fontSize: '28px' }} />
                                    <Icon className="ml-2 mr-2" name="instagram" style={{ fontSize: '28px' }} />
                                    <Icon className="ml-2 mr-2" name="youtube" style={{ fontSize: '28px' }} />
                                    <Icon name="github" style={{ fontSize: '28px' }} />
                                </Divider>
                            </div>
                        </Col>
                    </div>
                </Modal.Description><br />
            </Modal.Content>
        </Modal>
    );
};

export default ShowCard;
