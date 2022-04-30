import React from 'react';
import './ticket.css';

import moreIcon from "../../assets/more.png"


const Ticket = (props) => {
  const today = new Date()

  // Ticket details
  const lastUpdate = new Date(props.data.ticketDetails.lastUpdate)
  const timeDiff = today.getTime() - lastUpdate.getTime()
  const lastUpdateDays = Math.ceil(timeDiff / (1000 * 3600 * 24))

  // Ticket date
  const ticketDate = new Date(props.data.date)

  // Ticket priority
  const setTicketPriority = (priority) => {
    switch (priority) {
      case 1:
        return 'low'
        break;
      case 2:
        return 'normal'
        break;
      case 3:
        return 'high'
        break;
    }
  }

  const ticketPriority = setTicketPriority(props.data.priority)


  return (
    <div className="ticket">

      <div className="ticket__details">
        <div className="ticket__user-avatar">
          <img src={props.data.ticketDetails.userAvatar} />
        </div>
        <div className="ticket__details__text">
          <div className="ticket__title">
            {props.data.ticketDetails.title}
          </div>
          <div className="ticket__last-update">
            Updated {lastUpdateDays} {lastUpdateDays === 1 ? "day" : "days"} ago
          </div>
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
          {ticketDate.toLocaleString('en-US', { month: 'short' })} {ticketDate.getDate()}, {ticketDate.getFullYear()}
        </div>
        <div className="ticket__date__hour">
          {ticketDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric' })}
        </div>
      </div>

      <div className="ticket__priority">
        <div className={`ticket__priority__tag ticket__priority__tag--${ticketPriority}`}>
          {ticketPriority}
        </div>
      </div>

      <div className="ticket__options">
        <div className="ticket__options__btn">
          <img src={moreIcon} alt="+" />
        </div>
      </div>

    </div>
  )
}

export default Ticket;