import React, { useState } from 'react';
import { Icon, Button } from 'semantic-ui-react';
import { Col } from 'reactstrap';
import ShareCard from '../ShareCard/ShareCard';
import './UsersAround.css';

const UsersAround = (props) => {
    const [users] = useState(['Ram krishan', 'Karamjit', 'Shubham', 'Arpan', 'Paras'])
    const [isShareModalOpen, setShareModalOpen] = useState(false);
    const [isMeetupMode, setMeetupMode] = useState(false);
    const [shareWith, setShareWith] = useState('');

    const toggleShareModalOpen = (meetupMode, shareWith) => {
        setShareModalOpen(prevState => !prevState);
        setMeetupMode(meetupMode);
        setShareWith(shareWith);
    };

    const usersStyle = !props.direct ? { height: '15%', position: 'absolute', bottom: '30px' } : {}

    return (
        <Col className="users-around p-2" style={usersStyle}>
            <ShareCard
                isShareModalOpen={isShareModalOpen}
                toggleShareModalOpen={toggleShareModalOpen}
                isMeetupMode={isMeetupMode}
                shareWith={shareWith}
                cardName={'Travel Card'} />
            <h3 className="headind text-center mt-2">Around you <span>(withing 20 meter radius)</span></h3>
            {
                props.direct &&
                <>
                    <div className="meetup-share text-center">
                        <Button size="small" onClick={() => toggleShareModalOpen(true, 'everyone')}>MEETUP SHARE</Button>
                    </div><br />
                </>
            }

            {
                props.direct &&
                users.map(item => {
                    return (
                        <Col className="user d-flex justify-content-between mt-2 pt-2 pb-2 offset-2" xs={8} key={item}>
                            <div className="as">
                                <span><Icon name="user" className="user-icon" /></span>
                                <span className="name pl-2">{item}</span>
                            </div>
                            &nbsp;<Icon
                                name="external share"
                                style={{ fontSize: '1.2em', color: '#181b26' }}
                                onClick={() => toggleShareModalOpen(false, item)} />
                        </Col>
                    );
                })
            }

        </Col>
    );
};

export default UsersAround;
