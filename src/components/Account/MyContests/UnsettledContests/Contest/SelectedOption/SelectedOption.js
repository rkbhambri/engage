import React from 'react';

const SelectedOption = (props) => {
    return (
        <div className="selected-option mt-2 p-3">
            Your Ans : <span>{props.selectedOption.optionText}</span>
        </div>
    );
};

export default SelectedOption;
