import React from 'react';

const UserInfo = (props) => {
    return (
        <>
            <div>{props.userDetails.name}</div>
            <div className="mt-2">{props.userDetails.email}</div>
            <div className="mt-2">{props.userDetails.mobile || "xx-xxxxxxxxxx"}</div>
        </>
    );
};

export default UserInfo;
