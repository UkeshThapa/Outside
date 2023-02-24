import { useEffect, useState } from "react";
import axios from "axios";

const useTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [errorMessage, setErrorMessage] = useState();

  const getTickets = async () => {
    try {
      const res = await axios.get("http://localhost:3006/tickets");
      setTickets(res.data);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const checkPriorityForColor = (data) => {
    if (data.priority.toLowerCase() == "high") {
      return "#F12B2C";
    } else if (data.priority.toLowerCase() == "low") {
      return "orange";
    } else if (data.priority.toLowerCase() == "normal") {
      return "green";
    }
  };

  const addTickets = async (data) => {
    let color = checkPriorityForColor(data);

    const request = {
      logo: `/customer-2.png`,
      detailsMessage: data.ticketdetails,
      updateMessageTime: "update 1 day ago",
      customerName: data.fullname,
      updateTime: "on 24.05.2019",
      date: data.date,
      time: data.time,
      color: color,
      priority: data.priority,
    };
    const res = await axios
      .post("http://localhost:3006/tickets", request)
      .then((response) => setTickets([response.data, ...tickets]));
  };

  const deleteTicket = async (id) => {
    try {
      await axios.delete(`http://localhost:3006/tickets/${id}`);
      setTickets(tickets.filter((ticket) => ticket.id !== id));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getTickets();
  }, []);

  return { tickets, errorMessage, addTickets, deleteTicket };
};

export default useTickets;
