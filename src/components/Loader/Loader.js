import React from 'react';
import { Row, Spinner } from 'reactstrap';
import './Loader.css';

const Loader = (props) => {

    return (
        <Row
            style={{
                height: '70vh',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: '100%'
            }}>
            <Spinner />
            {/* <div className='spinner'>
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div> */}
        </Row>
    );
};

export default Loader;
