import React from 'react';
import { Col } from 'reactstrap';
import './SocialDetails.css';
import SocialIcons from './SocialIcons';

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
            <Col className="text-center">
                <SocialIcons name="facebook" />
            </Col>
            <Col className="d-flex justify-content-around">
                <SocialIcons name="linkedin" className="text-success" />
                {/* <SocialIcons name="instagram" /> */}
                <SocialIcons name="linkedin" />
            </Col>
            <Col className="d-flex justify-content-between">
                <SocialIcons name="instagram" />
                <SocialIcons name="tv" />
                <SocialIcons name="linkedin" className="text-success" />
            </Col>
            <Col className="d-flex justify-content-around">
                <SocialIcons name="tint" className="text-success" />
                <SocialIcons name="linkedin" />
                {/* <SocialIcons name="youtube" /> */}
            </Col>
            <Col className="text-center">
                <SocialIcons name="facebook" />
            </Col>
        </Col>
    );
};

export default SocialDetails;
