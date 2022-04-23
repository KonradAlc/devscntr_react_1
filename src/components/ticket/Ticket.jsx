import React from 'react';
import './ticket.css';


const Ticket = (props) => {
  return (
    <div className="ticket">
        <div className="ticket__title">{props.title}</div>
        <div className="ticket__count">{props.count}</div>
    </div>
  )
}

export default Ticket;