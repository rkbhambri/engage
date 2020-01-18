import React, { useState } from 'react';
import Header from '../Header/Header';
import NotificationSystem from 'react-notification-system';
import { NOTIFICATION_SYSTEM_STYLE } from '../../utils/constants';
import Snackbar from '../Snackbar/Snackbar';
import {
    MdCardGiftcard,
    MdLoyalty,
} from 'react-icons/md';
import { isMobileView } from '../../helpers/miscellaneous';

const MainLayout = (props) => {
    const [isOnline, setOnlineStatus] = useState(null);
    let notificationSystem = null;

    const showPromptMessage = () => {
        setTimeout(() => {
            if (!notificationSystem) {
                return;
            }

            notificationSystem.addNotification({
                title: <MdLoyalty />,
                message: 'Welome to Jeet!',
                level: 'info',
            });
        }, 1500);

        setTimeout(() => {
            if (!notificationSystem) {
                return;
            }

            notificationSystem.addNotification({
                title: <MdCardGiftcard />,
                message:
                    'Betting app !',
                level: 'info',
            });
        }, 2500);
        // this.props.onEmptyToken();
    };

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
            <NotificationSystem
                dismissible={false}
                ref={input => notificationSystem = input}
                style={NOTIFICATION_SYSTEM_STYLE}
            />
            {/* Check Internet Connection */}
            {checkInternetConnection()}
        </div>
    );
};

export default MainLayout;