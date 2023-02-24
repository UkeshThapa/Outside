import React from "react";
import "./TicketTable.scss";
import TicketHeader from "./TicketHeader/TicketHeader";
import TicketBody from "./TicketBody/TicketBody";

const TicketTable = ({ query, filter, tickets, deleteTicket }) => {
  {
    if (filter === "All") {
      filter = null;
    }
  }

  return (
    <table className="ticket-table">
      <thead>
        <TicketHeader />
      </thead>
      <tbody>
        {tickets
          .filter((user) =>
            query ? user.detailsMessage.includes(query) : true
          )
          .filter((user) => (filter ? user.priority.includes(filter) : true))
          .map((users, index) => {
            return (
              <TicketBody
                key={index}
                user={users}
                deleteTicket={deleteTicket}
              />
            );
          })}
      </tbody>
    </table>
  );
};

export default TicketTable;
