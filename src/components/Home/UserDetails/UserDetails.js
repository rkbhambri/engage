import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actionCreaters from '../../../store/actions';
import { Col } from 'reactstrap';
import UserImg from '../../../assets/img/user.svg';
import { Icon } from 'semantic-ui-react';
import UserInfo from './UserInfo/UserInfo';
import UserDetailsForm from './UserDetailsForm/UserDetailsForm';
import './UserDetails.css';

const UserDetails = (props) => {

    const [isUserDetailsEditable, setUserDetailsEditable] = useState(false);

    const toggleUserDetailsEditable = () => {
        setUserDetailsEditable(prevState => !prevState);
    };

    return (
        <Col
            className="user-details mt-3"
            md={12}
            xs={12}>
            <div className="text-right">
                <Icon
                    name="edit outline"
                    onClick={toggleUserDetailsEditable}></Icon>
            </div>
            <div className="pb-3 d-flex">
                <img
                    src={UserImg}
                    alt="Profile Pic"
                    style={{
                        width: '70px', height: '70px'
                    }} />
                <Col className="details" md={10} xs={10}>
                    {
                        isUserDetailsEditable ?
                            <UserDetailsForm
                                userDetails={props.userDetails}
                                toggleUserDetailsEditable={toggleUserDetailsEditable}
                                updateUserProfile={(profileDetails) => props.onUpdateUserProfile(profileDetails)} />
                            :
                            <UserInfo userDetails={props.userDetails} />
                    }
                </Col>
            </div>
        </Col>
    );
};

const mapStateToProps = state => {
    return {
        userDetails: state.home.userDetails
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateUserProfile: (profileDetails) => dispatch(actionCreaters.updateUserProfile(profileDetails))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
