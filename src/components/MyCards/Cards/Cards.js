import React from 'react';
import Card from './Card/Card'

const Cards = (props) => {
    return (
        <div className="cards">
            {
                props.cards.map(item => {
                    return (
                        <Card key={item.id} cardDetails={item} userDetails={props.userDetails} />
                    );
                })
            }
        </div>
    );
};

export default Cards;
