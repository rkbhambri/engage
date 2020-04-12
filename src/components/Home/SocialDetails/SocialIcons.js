import React, { useState } from 'react';
import { Icon, Popup, Grid, Input, Image } from 'semantic-ui-react'

const SocialIcons = (props) => {
    const [placeholder] = useState({
        dribble: 'Dribble url',
        facebook: 'Facebook username',
        linkedIn: 'LinkedIn url',
        behance: 'Behance url',
        instagram: 'Instagram username',
        pinterest: 'Pinterest username',
        twitter: 'Twitter url',
        youtube: 'Youtube channel url'
    })
    const [url, setUrl] = useState('');

    const urlChangeHandler = (value) => {
        setUrl(value);
    };

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
                    placeholder={placeholder[props.platform]}
                    className="border-bottom"
                    style={{ color: '#fff' }}
                    onChange={(event) => urlChangeHandler(event.target.value)}
                    value={props.value || url}
                />
                <Icon name="check" style={{ color: 'green' }} className="ml-3" onClick={() => props.updateSocialUrl(url)}></Icon>
            </Grid.Column>
        </Popup>
    );
};

export default SocialIcons;
