import React, { useState } from "react";
import "./TicketDetailHeader.scss";
import { FaPlus } from "react-icons/fa";
import useTickets from "../../../hooks/useTickets";

const priority = ["All", "High", "Normal", "Low"];

const TicketDetailHeader = ({ onFilterChange, filter, addTickets }) => {

  const [openDropDown, setOpenDropDown] = useState(false);
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [ticketDetail, setTicketDetail] = useState({
    fullname: "",
    date: "",
    time: "",
    priority: "",
    ticketdetails: "",
  });



  const handleInputChange = (e) => {
    setTicketDetail((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    handleEmptyForm()
    addTickets(ticketDetail);
  };

  // show the drop down
  const handleDropdown = () => {
    setShowTicketForm(false);
    setOpenDropDown(!openDropDown);
  };

  const handleTicketForm = () => {
    setOpenDropDown(false);
    setShowTicketForm(!showTicketForm);
  };

  return (
    <div className="ticket-detail-header">
      <h3>All tickets</h3>
      <div className="ticket-detail-features">
        <div className="sort">
          <i className="icon-sort" />
          <h3>Sort</h3>
        </div>
        <div className="add-tickets">
          <FaPlus onClick={handleTicketForm} />
          <h3 onClick={handleTicketForm}>Add Ticket</h3>
        </div>

        {showTicketForm && (
          <div className="ticket-form">
            <h1>Ticket Form</h1>
            <form action="" onSubmit={handleSubmitForm}>
              <div className="form-container">
                <label htmlFor="fullname" id="label">
                  FULLNAME
                </label>
                <input
                  type="text"
                  required = {true}
                  name="fullname"
                  placeholder="Fullname"
                  value={ticketDetail.fullname}
                  onChange={handleInputChange}
                  autoComplete="off"
                  id="ticket-input"
                />
              </div>
              <div className="form-container">
                <label htmlFor="date" id="label">
                  Date
                </label>
                <input
                  type="date"
                  required = {true}
                  name="date"
                  autoComplete="off"
                  value={ticketDetail.date}
                  onChange={handleInputChange}
                  id="ticket-input"
                />
              </div>
              <div className="form-container">
                <label htmlFor="time" id="label">
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  required = {true}
                  value={ticketDetail.time}
                  onChange={handleInputChange}
                  autoComplete="off"
                  id="ticket-input"
                />
              </div>
              <div className="form-container">
                <label htmlFor="priority" id="label">
                  Priority
                </label>
                <input
                  type="text"
                  name="priority"
                  required = {true}
                  value={ticketDetail.priority}
                  onChange={handleInputChange}
                  placeholder="Priority"
                  autoComplete="off"
                  id="ticket-input"
                />
              </div>
              <div className="form-container">
                <label htmlFor="ticketDetail" id="label">
                  Tickets Details
                </label>
                <input
                  type="text"
                  name="ticketdetails"
                  value={ticketDetail.ticketdetails}
                  onChange={handleInputChange}
                  placeholder="Ticket details"
                  autoComplete="off"
                  required = {true}
                  id="ticket-input"
                />
              </div>
              <button id="button-ticket">Add Ticket</button>
            </form>
            <button id="button-cancel" onClick={handleTicketForm}>
              Cancel
            </button>
          </div>
        )}

        <div className="filter" onClick={handleDropdown}>
          <i className="icon-filter" />
          <h3>{filter ? filter : "Filter"}</h3>
        </div>

        <div className="dropdown-filter-container">
          {openDropDown && (
            <div className="filter-dropdown">
              <ul>
                {priority.map((items) => (
                  <li>
                     {" "}
                    <input
                      type="radio"
                      id="html"
                      name="priority"
                      value={items}
                      onChange={onFilterChange}
                      checked={filter === items ? true : false}
                    />
                     {" "}
                    <label htmlFor={items} id="filter-label">
                      {items}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TicketDetailHeader;
