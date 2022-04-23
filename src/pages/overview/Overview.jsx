import React, { useState } from 'react';
import './overview.css';

import { Card, Ticket } from '../../components';
import cardsData from "../../cardsData";
import ticketsData from "../../ticketsData";
import chart from "../../assets/trend_chart.png";


const Overview = () => {
  const cardsElements = cardsData.map(card => {
    return <Card title={card.title} count={card.count} />
  })

  const ticketsElements = ticketsData.map(ticket => {
    return <Ticket title={ticket.title} count={ticket.count} />
  })

  return (
    <>
      <div className="cards">
        {cardsElements}
      </div>

      <div className="trend-chart">
        <img src={chart} />
      </div>

      <div className="wrapper">
        <div className="unresolved-tickets">
          <div className="unresolved-tickets__header">
            <h3>Unresolved tickets</h3>
            <span className="text--link">View details</span>
          </div>
          <div className="unresolved-tickets__subheader">
            Group: <b>Support</b>
          </div>

          {ticketsElements}
        </div>

        <div className="unresolved-tickets">
          <div className="unresolved-tickets__header">
            <h3>Tasks</h3>
            <span className="text--link">View all</span>
          </div>
          <div className="unresolved-tickets__subheader">
            Today
          </div>

          {ticketsElements}
        </div>
      </div>

      
    </>
  )
}

export default Overview;