import React from 'react';
import Question from './Question/Question';
import Details from './Details/Details';
import SelectedOption from './SelectedOption/SelectedOption';
import SettleDate from './SettleDate/SettleDate';
import './Contest.css';

const Contest = (props) => {
    return (
        <div className="contest mt-3" style={{ borderRadius: '15px' }}>
            <div className="contest-question p-3">
                <Question questionText={props.contest.questionText} />
                <Details contest={props.contest} />
            </div>
            <SelectedOption selectedOption={props.contest.selectedOption} />
            <SettleDate resultTime={props.contest.resultTime} />
        </div>
    );
};

export default Contest;
