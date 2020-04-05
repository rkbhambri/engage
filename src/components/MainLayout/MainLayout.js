import React, { useState } from 'react';
import { Col } from 'reactstrap';
import Header from '../Header/Header';
import Snackbar from '../Snackbar/Snackbar';
import { isMobileView } from '../../helpers/miscellaneous';

const MainLayout = (props) => {
    const [isOnline, setOnlineStatus] = useState(null);

    const updateOnlineStatus = () => {
        setOnlineStatus(navigator.onLine);
    };

    const emptySnackbar = () => {
        setOnlineStatus(null);
    };

    const checkInternetConnection = () => {
        window.addEventListener('online', () => updateOnlineStatus());
        window.addEventListener('offline', () => updateOnlineStatus());
        if (isOnline) {
            return (
                <Snackbar
                    error='Back Online !'
                    checkInternet="true"
                    emptySnackbar={() => emptySnackbar()}
                />
            );
        }
        if (isOnline === false) {
            return (
                <Snackbar
                    error='You are Offline !'
                    checkInternet="true"
                    emptySnackbar={() => emptySnackbar()}
                />
            );
        }
    };

    // props.token && showPromptMessage();
    return (
        <Col className="main-layout offset-md-4" xs={12} lg={4} md={4} style={{ paddingLeft: '0px', paddingRight: '0px' }}>
            {
                isMobileView() ?
                    <>
                        {props.children}<br /><br /><br />
                        <Header />
                    </>
                    :
                    <>
                        <Header />
                        {props.children}
                    </>
            }
            {/* Check Internet Connection */}
            {checkInternetConnection()}
        </Col>
    );
};

export default MainLayout;