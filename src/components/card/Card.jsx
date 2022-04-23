import React from 'react';
import './card.css';



const Card = (props) => {
    return (
        <div className="card">
            <div className="card__title">{props.title}</div>
            <div className="card__count">{props.count}</div>
        </div>
    )
}

export default Card;