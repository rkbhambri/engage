import React from 'react';
// import { Col } from 'reactstrap';

const Question = (props) => {
    return (
        <div className="question">
            {props.questionText}
        </div>
    );
};

export default Question;
