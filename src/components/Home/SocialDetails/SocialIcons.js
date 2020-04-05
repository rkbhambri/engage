import React from 'react';
import { Icon, Popup, Grid, Input, Image } from 'semantic-ui-react'

const SocialIcons = (props) => {
    return (
        <Popup
            key={props.name}
            trigger={
                <Image
                    src={props.src}
                    style={{ height: '70px', width: '70px' }}
                    className={props.className} />
            }
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
