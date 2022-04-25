import React, { useState } from 'react';
import './tickets.css';

import { Ticket } from '../../components';
import fullTicketsData from "../../fullTicketsData";


const Tickets = () => {
  const allTickets = [...fullTicketsData.map(ticket => {
    return <Ticket key={ticket.id} data={ticket} />
  })]

  return (
    <>

      <div className="card">
        <div className="card__header">
          <h3>All tickets</h3>
          <span>buttons</span>
        </div>
        <div className="all-tickets">

          <div className="all-tickets__header">
            <div className="all-tickets__header__ticket-details">
              Ticket details
            </div>
            <div className="all-tickets__header__customer-name">
              Customer name
            </div>
            <div className="all-tickets__header__date">
              Date
            </div>
            <div className="all-tickets__header__priority">
              Priority
            </div>
          </div>

          {allTickets}
          
        </div>
      </div>

    </>
  )
}

export default Tickets;