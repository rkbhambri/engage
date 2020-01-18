
import React from 'react';
import { NavLink } from 'react-router-dom'
import { Col } from 'reactstrap';
import { Icon } from 'semantic-ui-react';
import { accountOptions } from '../../../helpers/AccountOptions';
import './AccountOptions.css';

const AccountOptions = (props) => {
    return (
        <div className="account-options-list mb-5 pb-5 mt-2">
            {
                accountOptions.map((item, index) => {
                    return (
                        <Col
                            className="account-options mt-2 p-2 border d-flex"
                            md={12}
                            sm={12}
                            key={index}
                            style={{ borderRadius: '15px', background: '#fff', color: '#696969' }}>
                            <h4 className="text pt-3">{item.option}</h4>
                            <div className="mt-3 ml-4">
                                <NavLink to={item.link}>
                                    <Icon name="chevron circle right" style={{ color: '#F7C244' }}></Icon>
                                </NavLink>
                                {/* <FaMoneyBillAlt style={{ fontSize: '22px', paddingBottom: '4px' }} /> */}
                            </div>
                        </Col>
                    );
                })
            }
        </div>

    );
};

export default AccountOptions;
