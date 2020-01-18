import React from 'react';
import { Col } from 'reactstrap';
import { Icon, Header, Button, Popup, Grid, Input } from 'semantic-ui-react'
import './SocialDetails.css';
import SocialIcons from './SocialIcons';
const SocialDetails = (props) => {
    const arr = [
        { name: 'facebook', leftAlign: '50px' },
        { name: 'twitter', leftAlign: '100px' },
        { name: 'linkedin', leftAlign: '300px' },
        { name: 'instagram', leftAlign: '400px' },
        { name: 'youtube', leftAlign: '500px' },
        { name: 'tint', leftAlign: '600px' },
        { name: 'tag', leftAlign: '700px' },
        { name: 'tv', leftAlign: '800px' }];

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
            <Col style={{ marginLeft: '60px' }}>
                <SocialIcons name="facebook" />
                <SocialIcons name="twitter" />
            </Col>
            <Col style={{ marginLeft: '60px' }}>
                <SocialIcons name="instagram" />
            </Col>
            <Col style={{ marginLeft: '60px' }}>
                <SocialIcons name="linkedin" />
            </Col>
            <Col style={{ marginLeft: '60px' }}>
                <SocialIcons name="tint" />
            </Col>
            <Col style={{ marginLeft: '60px' }}>
                <SocialIcons name="youtube" />
            </Col>
        </Col>
    );
};

export default SocialDetails;
