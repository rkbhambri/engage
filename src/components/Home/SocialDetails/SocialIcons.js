import React from 'react';
import { Col } from 'reactstrap';
import { Icon, Header, Button, Popup, Grid, Input } from 'semantic-ui-react'
// import './socialIcons.css';

const SocialIcons = (props) => {


    return (
        <Popup
            key={props.name}
            trigger={
                <Icon
                    circular={true}
                    style={{ fontSize: '40px' }}
                    name={props.name}></Icon>}
            flowing
            hoverable>
            <Grid.Column textAlign='center'>
                <Input
                    type="text"
                    transparent
                    placeholder="Facebook username"
                    className="border-bottom"
                    style={{ color: '#fff' }}
                // onChange={(event) => setMoney(event.target.value)}
                // value={moneyValue}
                />
                <Icon name="check" style={{ color: 'green' }} className="ml-3"></Icon>
            </Grid.Column>
        </Popup>
    );
};

export default SocialIcons;
