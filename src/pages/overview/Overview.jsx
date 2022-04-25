import React, { useEffect } from 'react';
import './overview.css';

import { StatsCard, WaitingTicket, Chart } from '../../components';
import cardsData from "../../cardsData";
import ticketsData from "../../ticketsData";


const Overview = () => {
  useEffect(() => {
    document.getElementById('header-title').textContent = 'Overview'
  })

  const cardsElements = cardsData.map(card => {
    return <StatsCard key={card.title} title={card.title} count={card.count} />
  })

  const ticketsElements = ticketsData.map(ticket => {
    return <WaitingTicket key={ticket.title} title={ticket.title} count={ticket.count} />
  })

  const chartData1 = [12, 17, 7, 7, 7, 9, 12, 10, 8, 9, 8,10]
  const chartData2 = [8, 12, 5, 6, 5, 7, 12, 11, 10, 11, 7,10]

  return (
    <>

      <div className="wrapper">
        {cardsElements}
      </div>

      <div className="card">
        <div className="card__header">
          <h3>Today's trends</h3>
        </div>
        <div className="card__subheader">
          <span>as of 25 May 2019, 09:41 PM</span>
        </div>
        <Chart label1={"Today"} data1={chartData1} label2={"Yesterday"} data2={chartData2} />
      </div>

      <div className="wrapper">
        <div className="card">
          <div className="card__header">
            <h3>Unresolved tickets</h3>
            <span className="text--link">View details</span>
          </div>
          <div className="card__subheader">
            <span>Group: <b>Support</b></span>
          </div>
          {ticketsElements}
        </div>

        <div className="card">
          <div className="card__header">
            <h3>Tasks</h3>
            <span className="text--link">View all</span>
          </div>
          <div className="card__subheader">
            Today
          </div>

          {ticketsElements}
        </div>
      </div>

    </>
  )
}

export default Overview;