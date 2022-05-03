import React, { useState, useEffect } from 'react';
import './tickets.css';

import { Ticket } from '../../components';
import ticketsData from "../../ticketsData";
import SortIcon from "../../assets/sort.png";
import FilterIcon from "../../assets/filter.png";
import LeftIcon from "../../assets/left.png";
import RightIcon from "../../assets/right.png";


const Tickets = ({ page }) => {

  // Set page name
  useEffect(() => {
    page("Tickets")
  }, [page])


  const countTickets = ticketsData.length   // Number of all tickets

  // States
  const [currentIndex, setCurrentIndex] = useState(0)   // Current start index to show from data array
  const [rowsPerPage, setRowsPerPage] = useState(8)    // Number of showed <Ticket /> components
  const [showTickets, setShowTickets] = useState()    // Store current show <Ticket /> components
  // Used to show current range of showed tickets
  const [pageRange, setPageRange] = useState(
    [currentIndex+1, rowsPerPage+currentIndex < countTickets ? currentIndex+rowsPerPage : countTickets]
  )

  // Load ticket when index or rows-per-page changes
  useEffect(() => {
    // Get new tickets
    setShowTickets(
      [
        [...ticketsData.slice(currentIndex, currentIndex + rowsPerPage)].map(ticket => {
          return <Ticket key={ticket.id} data={ticket} />
        })
      ]
    )
    // Set new range of showed tickets
    setPageRange([currentIndex+1, rowsPerPage+currentIndex < countTickets ? currentIndex+rowsPerPage : countTickets])
  }, [currentIndex, rowsPerPage])

  const handleChange = e => {
    setRowsPerPage(parseInt(e.target.value))
  }

  // previous page button action
  const prevPage = () => {
    if (currentIndex - rowsPerPage + 1 >= 1) {
      setCurrentIndex(prevCurrentIndex => {
        const newIndex = prevCurrentIndex - rowsPerPage
        return newIndex
      })
    }
    else if (currentIndex - 8 + 1 >= 1) {
      setCurrentIndex(prevCurrentIndex => {
        const newIndex = prevCurrentIndex - 8
        return newIndex
      })
    }
  }
  
  // next page button action
  const nextPage = () => {
    if (currentIndex + rowsPerPage < countTickets) {
      setCurrentIndex(prevCurrentIndex => {
        const newIndex = prevCurrentIndex + rowsPerPage
        return newIndex
      })
    }
  }

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

          {showTickets}

          <div className="all-tickets__footer">
            <div className="all-tickets__rows-per-page">
              Rows per page:
              <select name="rows-per-page" id="rows-per-page" onChange={handleChange} defaultValue={rowsPerPage}>
                <option value="8">8</option>
                <option value="16">16</option>
                <option value="24">24</option>
              </select>
            </div>
            <div className="all-tickets__page">
              <div className="all-tickets__page-num">
                {pageRange[0]}-{pageRange[1]} of {countTickets}
              </div>
              <div className="all-tickets__prev-page" onClick={prevPage}>
                <img src={LeftIcon} alt="<" />
              </div>
              <div className="all-tickets__next-page" onClick={nextPage}>
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