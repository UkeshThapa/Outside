import React from "react";
import "./SingleTicket.scss";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ticketData } from "../../../App";

const SingleTicket = () => {
  const { id } = useParams();
  const [tickets] = useContext(ticketData);
  const ticket = tickets.find((ticket) => ticket.id === parseInt(id));

  return (
    <div className="single-ticket-container">
      <div className="ticket-container">
        <figure className="profile-img-container">
          <img src={ticket.logo} alt="customerImage" />
        </figure>
        <div className="profile-details">
          <div className="customer-name">
            <h1>{ticket.customerName}</h1>
          </div>
          <div className="detail-message">
            <h2>{ticket.detailsMessage}</h2>
          </div>
          <div className="date-container">
            <div className="date-value">
              <h3>{ticket.date}</h3>
            </div>
            <div className="time-value">
              <h3>{ticket.time}</h3>
            </div>
          </div>
          <div className="priority-container">
            <div className="label">
              <h2>Priority : </h2>
            </div>
            <div
              className="priority-customer"
              style={{ backgroundColor: ticket.color }}
            >
              <h3>{ticket.priority}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTicket;
