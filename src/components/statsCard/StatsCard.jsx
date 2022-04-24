import React from 'react';
import './statsCard.css';



const StatsCard = (props) => {
    return (
        <div className="stats-card">
            <div className="stats-card__title">{props.title}</div>
            <div className="stats-card__count">{props.count}</div>
        </div>
    )
}

export default StatsCard;