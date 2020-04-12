import PropTypes from 'prop-types';
import React from 'react';
import { Row } from 'reactstrap';
import { Dimmer, Loader as Loading } from 'semantic-ui-react';

const PageSpinner = ({ color = 'primary' }) => {
    return (
        <Row
            style={{
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: '100%'
            }}>
            <Dimmer active inverted>
                <Loading inverted content='Loading' />
            </Dimmer>
        </Row>
    );
};

PageSpinner.propTypes = {
    color: PropTypes.oneOf([
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
    ]),
};

export default PageSpinner;
