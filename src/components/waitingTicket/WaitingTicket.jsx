import React from 'react';
import './waitingTicket.css';


const WaitingTicket = (props) => {
  return (
    <div className="waiting-ticket">
        <div className="waiting-ticket__title">{props.title}</div>
        <div className="waiting-ticket__count">{props.count}</div>
    </div>
  )
}

export default WaitingTicket;