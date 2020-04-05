import React from 'react';
import './Loading.css';
const Loading = (props) => {
    return (
        <div className="loading-dots mt-3">
            <h1 className="dot one">.</h1>
            <h1 className="dot two">.</h1>
            <h1 className="dot three">.</h1>
            <h1 className="dot four">.</h1>
            <h1 className="dot five">.</h1>
        </div>
    )
};

export default Loading;
