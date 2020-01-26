import React from 'react';
import { Col, Row } from 'reactstrap';
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
            <Row>
                <Col className="text-right" xs={8}>
                    <SocialIcons name="facebook" />
                </Col>
            </Row>
            <Row>
                <Col className="text-right" xs={5}>
                    <SocialIcons name="linkedin" />
                </Col>
                <Col className="text-right" xs={6}>
                    <SocialIcons name="tint" />
                </Col>
            </Row>
            <Row>
                <Col className="text-right" xs={3}>
                    <SocialIcons name="instagram" />
                </Col>
                <Col className="text-right" xs={5}>
                    <SocialIcons name="instagram" />
                </Col>
                <Col className="text-right" xs={4}>
                    <SocialIcons name="tv" />
                </Col>
            </Row>
            <Row>
                <Col className="text-right" xs={6}>
                    <SocialIcons name="linkedin" />
                </Col>
                <Col className="text-right" xs={5}>
                    <SocialIcons name="tint" />
                </Col>
            </Row>
            <Col className="text-right" xs={9}>
                <SocialIcons name="youtube" />
            </Col>
        </Col>
    );
};

export default SocialDetails;
