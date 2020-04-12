import React from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { facebookAppId, googleClientId } from '../../../config';
import './SocialLogin.css';

const SocialLogin = (props) => {

    const responseGoogle = (response) => {
        if ('googleId' in response) {
            const authDetails = {
                email: response.profileObj.email,
                socialAccessToken: response.accessToken,
                loginType: 'google'
            };
            props.onSocialLogin(authDetails);
        }
    };
    const responseFacebook = (response) => {
        if (response) {
            const authDetails = {
                email: response.email,
                socialAccessToken: response.accessToken,
                loginType: 'facebook'
            };
            props.onSocialLogin(authDetails);
        }
    };

    return (
        <div className="social-login">
            <div className="facebook-login">
                <FacebookLogin
                    className="p-1"
                    appId={facebookAppId}
                    fields="name,email"
                    size="metro"
                    icon="fa-facebook"
                    style={{ width: '100%' }}
                    callback={responseFacebook}
                    // Check if mobile screen then enable isMobile prop
                    isMobile={window.innerWidth <= 800 && window.innerHeight <= 600}
                // render={renderProps => (
                //     <Button color='facebook' onClick={renderProps.onClick}>
                //         <Icon name='facebook' /> Facebook
                //     </Button>
                // )}
                />
            </div><br />
            <div className="google-login">
                <GoogleLogin
                    clientId={googleClientId}
                    buttonText="LOGIN WITH GOOGLE"
                    className="w-100"
                    loginScope='email profile openid'
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        </div>
    );
};

export default SocialLogin;
