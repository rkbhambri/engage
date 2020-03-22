import React, { useState } from 'react';
import { Icon, Button } from 'semantic-ui-react';
import { Col } from 'reactstrap';
import ShareCard from '../ShareCard/ShareCard';

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
            <h2>Around you</h2>
            <div className="meetup-share text-center">
                <Button size="small" onClick={() => toggleShareModalOpen(true, 'everyone')}>Meetup Share</Button>
            </div><br />
            {
                users.map(item => {
                    return (
                        <div className="user pt-2 pb-2" key={item}>
                            <Icon name="user" style={{ fontSize: '1.2em', color: '#ccc' }} /> {item}
                            &nbsp;<Icon
                                name="external share"
                                style={{ fontSize: '1.2em', color: '#ccc' }}
                                onClick={() => toggleShareModalOpen(false, item)} />
                        </div>
                    );
                })
            }
        </Col>
    );
};

export default Users;
