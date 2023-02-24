import React, { useState, useContext } from "react";
import TicketDetailHeader from "./TicketDetailHeader/TicketDetailHeader";
import "./TicketDetails.scss";
import TicketTable from "./TicketUserTable/TicketTable";
import useTickets from "../../hooks/useTickets";
import { searchContext } from "../../App";

const TicketDetails = () => {
  const [filter, setFilter] = useState();
  const { tickets, addTickets, deleteTicket } = useTickets();

  const [searchKey, setSearchKey] = useContext(searchContext);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <div className="container">
      <div className="ticket-details-container">
        <TicketDetailHeader
          onFilterChange={handleFilterChange}
          filter={filter}
          addTickets={addTickets}
        />
        <TicketTable
          query={searchKey}
          filter={filter}
          tickets={tickets}
          deleteTicket={deleteTicket}
        />
      </div>
    </div>
  );
};

export default TicketDetails;
