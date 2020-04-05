import React from 'react';
import { Col } from 'reactstrap';
import Behance from '../../../assets/social-icons/Behance.svg';
import Dribble from '../../../assets/social-icons/Dribble.svg';
import Facebook from '../../../assets/social-icons/Facebook.svg';
import Instagram from '../../../assets/social-icons/Instagram.svg';
import Linkedin from '../../../assets/social-icons/Linkedin.svg';
import Pinterest from '../../../assets/social-icons/Pinterest.svg';
import Twitter from '../../../assets/social-icons/Twitter.svg';
import Youtube from '../../../assets/social-icons/Youtube.svg';

import SocialIcons from './SocialIcons';
import './SocialDetails.css';

const SocialDetails = (props) => {

    // const socialIcons = arr.map(item => {
    //     return (
    //         <Popup
    //             key={item.name}
    //             trigger={
    //                 <Icon
    //                     // className="border"
    //                     style={{ fontSize: '40px', marginLeft: item.leftAlign }}
    //                     name={item.name}></Icon>}
    //             flowing
    //             hoverable>
    //             <Grid.Column textAlign='center'>
    //                 <Input
    //                     type="text"
    //                     transparent
    //                     placeholder="Facebook username"
    //                     className="border-bottom"
    //                     style={{ color: '#fff' }}
    //                 // onChange={(event) => setMoney(event.target.value)}
    //                 // value={moneyValue}
    //                 />
    //                 <Icon name="check" style={{ color: 'green' }} className="ml-3"></Icon>
    //             </Grid.Column>
    //         </Popup>
    //     )
    // });

    return (
        <Col className="social-details pt-4" xs={12}>
            <Col className="d-flex mt-4 justify-content-between p-3" >
                <SocialIcons src={Dribble} />
                <SocialIcons src={Facebook} />
                <SocialIcons src={Linkedin} />
            </Col>
            <Col className="d-flex justify-content-around p-3" >
                <SocialIcons src={Behance} />
                <SocialIcons src={Instagram} />
            </Col>
            <Col className="d-flex justify-content-between p-3" >
                <SocialIcons src={Pinterest} />
                <SocialIcons src={Twitter} />
                <SocialIcons src={Youtube} />
            </Col>
        </Col>
    );
};

export default SocialDetails;
