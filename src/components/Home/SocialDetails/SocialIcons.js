import React, { useState, useEffect } from 'react';
import { Icon, Popup, Grid, Input, Image, Button } from 'semantic-ui-react'

const SocialIcons = (props) => {
    const [placeholder] = useState({
        dribble: 'Dribble url',
        facebook: 'Facebook username',
        linkedin: 'LinkedIn url',
        behance: 'Behance url',
        instagram: 'Instagram username',
        pinterest: 'Pinterest username',
        twitter: 'Twitter url',
        youtubeChannel: 'Youtube channel url'
    });
    const [url, setUrl] = useState(props.value);

    useEffect(() => {
        setUrl(props.value);
    }, [props.value]);

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
                    size="large"
                    placeholder={placeholder[props.platform]}
                    className="border-bottom"
                    style={{ color: '#fff' }}
                    onChange={(event) => urlChangeHandler(event.target.value)}
                    value={url}
                />
                <Icon name="check" style={{ color: 'green' }} className="ml-3" onClick={() => props.updateSocialUrl(url)}></Icon>
            </Grid.Column>
            {
                window.location.pathname !== '/' &&
                <Grid.Column className="pt-3 pb-2">
                    <Button
                        color="blue"
                        size="tiny"
                        disabled={!props.value}
                        onClick={() => props.addToCard()}>{props.isActive ? 'Move From Card' : 'Add To Card'}</Button>
                </Grid.Column>
            }
        </Popup>
    );
};

export default SocialIcons;
