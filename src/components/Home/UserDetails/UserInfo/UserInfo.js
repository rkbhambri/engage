import React from 'react';
import { convertDateFormat } from '../../../../helpers/miscellaneous';

const UserInfo = (props) => {
    return (
        <>
            <div className="name">{props.userDetails.name}</div>
            <div className="email mt-2">{props.userDetails.email}</div>
            <div className="mobile mt-2">{props.userDetails.mobile || "xx-xxxxxxxxxx"}</div>
            <div className="dob mt-2">{props.userDetails.dateOfBirth ? convertDateFormat(new Date(props.userDetails.dateOfBirth), true) : "dd-mm-yyyy"}</div>
        </>
    );
};

export default UserInfo;
