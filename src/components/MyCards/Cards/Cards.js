import React from 'react';
import Card from './Card/Card'

const Cards = (props) => {
    return (
        <div className="cards">
            <Card walletDetails={props.walletDetails} id="1" />
            <Card walletDetails={props.walletDetails} id="2" />
            <Card walletDetails={props.walletDetails} id="3" />
            <Card walletDetails={props.walletDetails} id="4" />
            <Card walletDetails={props.walletDetails} />
        </div>
    );
};

export default Cards;
