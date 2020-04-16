import React from 'react';
import { connect } from 'react-redux';
import { Col } from 'reactstrap';
import * as actionCreaters from '../../../store/actions';
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

    const updateSocialUrl = (value, platform) => {
        const userSocialUrl = { ...props.userSocialUrl };
        userSocialUrl[platform] = value;
        props.onUpdateSocialUrl(userSocialUrl);
    };

    return (
        <Col className="social-details pt-4" xs={12}>
            <Col className="d-flex mt-4 justify-content-between p-3">
                <SocialIcons
                    src={Dribble}
                    platform="dribble"
                    value={props.userSocialUrl.dribbleUrl || ''}
                    updateSocialUrl={(value) => updateSocialUrl(value, 'dribbleUrl')} />
                <SocialIcons
                    src={Facebook}
                    platform="facebook"
                    value={props.userSocialUrl.facebookUrl || ''}
                    updateSocialUrl={(value) => updateSocialUrl(value, 'facebookUrl')} />
                <SocialIcons
                    src={Linkedin} platform="linkedin"
                    value={props.userSocialUrl.linkedinUrl || ''}
                    updateSocialUrl={(value) => updateSocialUrl(value, 'linkedinUrl')} />
            </Col>
            <Col className="d-flex justify-content-around p-3">
                <SocialIcons
                    src={Behance}
                    platform="behance"
                    value={props.userSocialUrl.behanceUrl || ''}
                    updateSocialUrl={(value) => updateSocialUrl(value, 'behanceUrl')} />
                <SocialIcons
                    src={Instagram}
                    platform="instagram"
                    value={props.userSocialUrl.instagramUrl || ''}
                    updateSocialUrl={(value) => updateSocialUrl(value, 'instagramUrl')} />
            </Col>
            <Col className="d-flex justify-content-between p-3">
                <SocialIcons
                    src={Pinterest}
                    platform="pinterest"
                    value={props.userSocialUrl.pinterestUrl || ''}
                    updateSocialUrl={(value) => updateSocialUrl(value, 'pinterestUrl')} />
                <SocialIcons
                    src={Twitter}
                    platform="twitter"
                    value={props.userSocialUrl.twitterUrl || ''}
                    updateSocialUrl={(value) => updateSocialUrl(value, 'twitterUrl')} />
                <SocialIcons
                    src={Youtube}
                    platform="youtubeChannel"
                    value={props.userSocialUrl.youtubeChannelUrl || ''}
                    updateSocialUrl={(value) => updateSocialUrl(value, 'youtubeChannelUrl')} />
            </Col>
        </Col>
    );
};


const mapStateToProps = state => {
    return {
        userSocialUrl: state.home.userSocialUrl
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateSocialUrl: (userSocialUrl) => dispatch(actionCreaters.updateSocialUrl(userSocialUrl))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SocialDetails);
