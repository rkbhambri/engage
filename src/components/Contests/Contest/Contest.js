import React from 'react';
// import { Col } from 'reactstrap';
import Question from './Question/Question';
import Options from './Options/Options';
import Details from './Details/Details';
import Confirm from './Confirm/Confirm';
import './Contest.css';

const Contest = (props) => {
    return (
        <div className="contest p-4 mt-4">
            {/* <Confirm /> */}
            <Question questionText={props.item.questionText} />
            <Details contestId={props.item.contestId} entryFee={props.item.entryFee} />
            <Options options={props.item.options} />
        </div>
    );
};

export default Contest;
