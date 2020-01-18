import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreaters from '../../store/actions';
import Styles from './Snackbar.module.css';
import { Button } from "reactstrap";

const Snackbar = (props) => {

    useEffect(() => {
        setTimeout(() => {
            props.onSetSnackbarMessage(null);
            props.checkInternet && props.emptySnackbar();
        }, 3000);
    }, []);

    return (
        <div className={props.error ? [Styles.snackbar, Styles.show].join(" ") : Styles.snackbar}>
            <Button
                close
                style={{ color: '#fff', marginLeft: '35px' }}
                onClick={() => {
                    props.onSetSnackbarMessage(null);
                    props.checkInternet && props.emptySnackbar();
                }}></Button>
            {props.error}
        </div>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        onSetSnackbarMessage: (message) => dispatch(actionCreaters.setSnackbarMessage(message))
    };
};

export default connect(null, mapDispatchToProps)(Snackbar);