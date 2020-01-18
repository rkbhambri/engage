import React, { Component } from 'react';
import classes from './ErrorBoundary.module.css';
import errorImage from '../assets/img/something-went-wrong.gif';

class ErrorBoundary extends Component {

    state = {
        hasError: false
    };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    };

    componentDidCatch(error, info) {
        console.log('===error===', error, '===info===', info)
        // sendErrorInfo(error, info.componentStack);
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className={classes['wrong-outer']}>
                    <div className={classes['wrong-inner']}>
                        <img className={classes['img-went-wrong']} src={errorImage} alt='KONTIKI LABS' />
                        <h2>Oops! Looks like something went wrong.</h2>
                        <p>Give us a few moments to look in to it.</p>
                    </div>
                </div>
            );
        }
        return this.props.children;
    };
};

export default ErrorBoundary;
