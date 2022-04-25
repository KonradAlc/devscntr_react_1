import React from 'react';
import './ticket.css';


const Ticket = (props) => {
  return (
    <div className="ticket">

      <div className="ticket__details">
        <div className="ticket__user-avatar">
          {props.data.ticketDetails.userAvatar}
        </div>
        <div className="ticket__title">
          {props.data.ticketDetails.title}
        </div>
        <div className="ticket__last-update">
          {props.data.ticketDetails.lastUpdate}
        </div>
      </div>

      <div className="ticket__customer-name">
        <div className="ticket__customer-name__name">
          {props.data.customerName.name}
        </div>
        <div className="ticket__customer-name__date">
          on {props.data.customerName.date}
        </div>
      </div>

      <div className="ticket__date">
        <div className="ticket__date__full-date">
          {props.data.date}
        </div>
        <div className="ticket__date__hour">
          {props.data.date}
        </div>
      </div>

      <div className="ticket__priority">
        {props.data.priority}
      </div>

    </div>
  )
}

export default Ticket;