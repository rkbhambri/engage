import React from 'react';
import Question from './Question/Question';
import Details from './Details/Details';
import SelectedOption from './SelectedOption/SelectedOption';
import CorrectOption from './CorrectOption/CorrectOption';
import Message from './Message/Message';
// import SettleDate from './SettleDate/SettleDate';

const Contest = (props) => {
    return (
        <div className="contest mt-2 border p-3" style={{ borderRadius: '15px' }}>
            <Question questionText={props.contest.questionText} />
            <Details contest={props.contest} />
            <SelectedOption selectedOption={props.contest.selectedOption} />
            <CorrectOption correctOption={props.contest.correctAnswer} />
            <Message winAmount={props.contest.winAmount} />
            {/* <SettleDate resultTime={props.contest.resultTime} /> */}
        </div>
    );
};

export default Contest;
