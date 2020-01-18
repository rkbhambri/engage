import React from 'react';

const Message = (props) => {
    return (
        <div className="message mt-2">
            <b>Congratulations! You won : <span>{props.winAmount}</span></b>
        </div>
    );
};

export default Message;
