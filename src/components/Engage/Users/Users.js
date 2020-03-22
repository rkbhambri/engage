import React, { useState } from 'react';
import { Icon, Button } from 'semantic-ui-react';
import { Col } from 'reactstrap';
import ShareCard from '../ShareCard/ShareCard';
import './Users.css';

const Users = (props) => {
    const [users] = useState(['Ram krishan', 'Karamjit', 'Shubham', 'Arpan', 'Paras'])
    const [isShareModalOpen, setShareModalOpen] = useState(false);
    const [isMeetupMode, setMeetupMode] = useState(false);
    const [shareWith, setShareWith] = useState('');

    const toggleShareModalOpen = (meetupMode, shareWith) => {
        setShareModalOpen(prevState => !prevState);
        setMeetupMode(meetupMode);
        setShareWith(shareWith);
    };

    return (
        <Col className="users-around border p-2" style={{ color: '#ccc', borderRadius: '10px' }}>
            <ShareCard
                isShareModalOpen={isShareModalOpen}
                toggleShareModalOpen={toggleShareModalOpen}
                isMeetupMode={isMeetupMode}
                shareWith={shareWith}
                cardName={'Travel Card'} />
            <h2 className="text-center">Around you</h2>
            <div className="meetup-share text-center">
                <Button size="small" onClick={() => toggleShareModalOpen(true, 'everyone')}>Meetup Share</Button>
            </div><br />
            {
                users.map(item => {
                    return (
                        <Col className="user d-flex justify-content-between mt-2 pt-2 pb-2 offset-2" xs={8} key={item}>
                            <div className="as">
                                <span><Icon name="user" className="user-icon" /></span>
                                <span className="name" >{item}</span>
                            </div>
                            &nbsp;<Icon
                                name="external share"
                                style={{ fontSize: '1.2em', color: '#ccc' }}
                                onClick={() => toggleShareModalOpen(false, item)} />
                        </Col>
                    );
                })
            }
        </Col>
    );
};

export default Users;
