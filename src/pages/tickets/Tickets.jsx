import React, { useEffect } from 'react';
import './tickets.css';

import { Ticket } from '../../components';
import ticketsData from "../../ticketsData";
import SortIcon from "../../assets/sort.png";
import FilterIcon from "../../assets/filter.png";
import LeftIcon from "../../assets/left.png";
import RightIcon from "../../assets/right.png";


const Tickets = ({ page }) => {
  console.log('render tickets');

  // Set page name
  useEffect(() => {
    page("Tickets")
  }, [page])


  const allTickets = [...ticketsData.map(ticket => {
    return <Ticket key={ticket.id} data={ticket} />
  })]

  return (
    <>

      <div className="card">
        <div className="card__header">
          <h3>All tickets</h3>
          <div className="card__header_buttons">
            <div className="card__sort-btn">
              <img src={SortIcon} />
              <span>Sort</span>
            </div>
            <div className="card__filter-btn">
              <img src={FilterIcon} />
              <span>Filter</span>
            </div>
          </div>
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

          <div className="all-tickets__footer">
            <div className="all-tickets__rows-per-page">
              Rows per page:
              <select name="rows-per-page" id="rows-per-page">
                <option value="8">8</option>
                <option value="16">16</option>
                <option value="24">24</option>
              </select>
            </div>
            <div className="all-tickets__page">
              <div className="all-tickets__page-num">
                1-8 of 1240
              </div>
              <div className="all-tickets__prev-page">
                <img src={LeftIcon} alt="<" />
              </div>
              <div className="all-tickets__next-page">
                <img src={RightIcon} alt=">" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Tickets;