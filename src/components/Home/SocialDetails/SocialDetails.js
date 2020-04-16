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
        const socialUrl = { ...props.socialUrl };
        socialUrl[platform] = value;
        props.onUpdateSocialUrl(socialUrl);
    };

    return (
        <Col className="social-details pt-4" xs={12}>
            <Col className="d-flex mt-4 justify-content-between p-3">
                <SocialIcons
                    src={Dribble}
                    platform="dribble"
                    value={props.socialUrl.dribbleUrl || ''}
                    updateSocialUrl={(value) => updateSocialUrl(value, 'dribbleUrl')} />
                <SocialIcons
                    src={Facebook}
                    platform="facebook"
                    value={props.socialUrl.facebookUrl || ''}
                    updateSocialUrl={(value) => updateSocialUrl(value, 'facebookUrl')} />
                <SocialIcons
                    src={Linkedin} platform="linkedin"
                    value={props.socialUrl.linkedinUrl || ''}
                    updateSocialUrl={(value) => updateSocialUrl(value, 'linkedinUrl')} />
            </Col>
            <Col className="d-flex justify-content-around p-3">
                <SocialIcons
                    src={Behance}
                    platform="behance"
                    value={props.socialUrl.behanceUrl || ''}
                    updateSocialUrl={(value) => updateSocialUrl(value, 'behanceUrl')} />
                <SocialIcons
                    src={Instagram}
                    platform="instagram"
                    value={props.socialUrl.instagramUrl || ''}
                    updateSocialUrl={(value) => updateSocialUrl(value, 'instagramUrl')} />
            </Col>
            <Col className="d-flex justify-content-between p-3">
                <SocialIcons
                    src={Pinterest}
                    platform="pinterest"
                    value={props.socialUrl.pinterestUrl || ''}
                    updateSocialUrl={(value) => updateSocialUrl(value, 'pinterestUrl')} />
                <SocialIcons
                    src={Twitter}
                    platform="twitter"
                    value={props.socialUrl.twitterUrl || ''}
                    updateSocialUrl={(value) => updateSocialUrl(value, 'twitterUrl')} />
                <SocialIcons
                    src={Youtube}
                    platform="youtubeChannel"
                    value={props.socialUrl.youtubeChannelUrl || ''}
                    updateSocialUrl={(value) => updateSocialUrl(value, 'youtubeChannelUrl')} />
            </Col>
        </Col>
    );
};


const mapStateToProps = state => {
    return {
        socialUrl: state.home.socialUrl
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateSocialUrl: (socialUrl) => dispatch(actionCreaters.updateSocialUrl(socialUrl))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SocialDetails);
