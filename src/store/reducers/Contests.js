import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    // questions: [],
    questions: [{
        questionText: 'hello real madrid blah blah blah blah v v blah',
        entryFee: 6578,
        contestId: 'J71282',
        options: [{
            id: '5746154123',
            optionText: 'this is option1 this is testing long text option1',
            betCountOnOption: '50'
        },
        {
            id: '5746154123',
            optionText: 'this is option1',
            betCountOnOption: '50'
        },
        {
            id: '5746154123',
            optionText: 'this is option1',
            betCountOnOption: '50'
        },
        {
            id: '5746154123',
            optionText: 'this is option1',
            betCountOnOption: '50'
        }]
    },
    {
        questionText: 'hello real madrid222',
        entryFee: 6578,
        contestId: 'J71282',
        options: [{
            id: '5746154123',
            optionText: 'this is option1',
            betCountOnOption: '50'
        },
        {
            id: '5746154123',
            optionText: 'this is option1',
            betCountOnOption: '50'
        },
        {
            id: '5746154123',
            optionText: 'this is option1',
            betCountOnOption: '50'
        },
        {
            id: '5746154123',
            optionText: 'this is option1',
            betCountOnOption: '50'
        }]
    },
    {
        questionText: 'hello real madrid3',
        entryFee: 6578,
        contestId: 'J71282',
        options: [{
            id: '5746154123',
            optionText: 'this is option1',
            betCountOnOption: '50'
        },
        {
            id: '5746154123',
            optionText: 'this is option1',
            betCountOnOption: '50'
        },
        {
            id: '5746154123',
            optionText: 'this is option1',
            betCountOnOption: '50'
        },
        {
            id: '5746154123',
            optionText: 'this is option1',
            betCountOnOption: '50'
        }]
    }]
};

const setQuestions = (state, action) => {
    return updateObject(state, {
        questions: action.questions
    });
};

const Contests = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_QUESTIONS:
            return setQuestions(state, action);
        default:
            return state;
    }
};

export default Contests;