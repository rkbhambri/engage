import React, { useState, useEffect } from 'react';
import { Col } from 'reactstrap';
import { connect } from 'react-redux';
import * as actionCreaters from '../../store/actions';
import { isMobileView } from '../../helpers/miscellaneous';
import Header from '../Header/Header';
import Snackbar from '../Snackbar/Snackbar';

const MainLayout = (props) => {
    const [isOnline, setOnlineStatus] = useState(null);

    useEffect(() => {
        getMyLocation();
    }, []);

    const updateOnlineStatus = () => {
        setOnlineStatus(navigator.onLine);
    };

    const emptySnackbar = () => {
        setOnlineStatus(null);
    };

    const getMyLocation = () => {
        const location = window.navigator && window.navigator.geolocation

        if (location) {
            location.getCurrentPosition((position) => {
                props.onUpdateUserLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })
            }, (error) => {
                // setLocation({
                //     latitude: 'err-latitude',
                //     longitude: 'err-longitude'
                // })
            })
        }
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
                props.message &&
                <Snackbar error={props.message} />
            }
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

const mapStateToProps = state => {
    return {
        message: state.mainLayout.message,
        userDetails: state.home.userDetails
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateUserLocation: (location) => dispatch(actionCreaters.updateUserLocation(location))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
