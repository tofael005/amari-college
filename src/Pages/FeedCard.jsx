import React from 'react';

const FeedCard = ({feedData}) => {
    const {name, rating, text} = feedData;
    return (
        <div>
            <h1>{name}</h1>
            <p>{rating}</p>
            <p>{text}</p>
        </div>
    );
};

export default FeedCard;