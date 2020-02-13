import React, { useState } from 'react';
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
        <div className="main-layout">
            {
                isMobileView() ?
                    <>
                        {props.children}
                        <Header />
                    </>
                    :
                    <>
                        <Header /><br /><br /><br />
                        {props.children}
                    </>
            }
            ''            {/* Check Internet Connection */}
            {checkInternetConnection()}
        </div>
    );
};

export default MainLayout;