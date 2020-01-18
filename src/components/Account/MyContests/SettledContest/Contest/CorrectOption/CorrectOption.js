import React from 'react';

const CorrectOption = (props) => {
    return (
        <div className="selected-option mt-2">
            Correct Ans : <span>{props.correctOption.optionText}</span>
        </div>
    );
};

export default CorrectOption;
