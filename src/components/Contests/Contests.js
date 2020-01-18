import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Col } from 'reactstrap';
import * as actionCreaters from '../../store/actions';
import Contest from './Contest/Contest';
import { setItem } from '../../helpers/cookie';

const Contests = (props) => {
    const auth = {
        id: '01a83e40-1d6f-11ea-865f-9532913174eb',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAxYTgzZTQwLTFkNmYtMTFlYS04NjVmLTk1MzI5MTMxNzRlYiIsIm5hbWUiOiJUZXN0IiwiZW1haWwiOiJ0ZXN0QGdtYWlsMTIzLmNvbSIsIm1vYmlsZSI6Ijc1MzY3ODkwMjkiLCJpYXQiOjE1NzYyMTc3ODF9.Xt_bsmdx_yTkTc6YTHIOMzrwXSbHw9xFCyA4U2coleQ'
    }
    setItem('auth', auth)
    useEffect(() => {
        props.questions.length === 0 && props.onGetQuestions();
    }, []);

    const getContests = () => {
        return (
            props.questions.map(item => {
                return (
                    <Contest item={item} key={item.id} />
                );
            })
        );
    };

    return (
        <Col className="contests pb-5 mb-5" md={12} sm={12} xs={12}>
            <br />
            <h3 className="pl-2 text-white">Hi Ram krishan</h3>
            {getContests()}
        </Col>
    )
};

const mapStateToProps = state => {
    return {
        questions: state.contests.questions
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetQuestions: () => dispatch(actionCreaters.getQuestions())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contests);
