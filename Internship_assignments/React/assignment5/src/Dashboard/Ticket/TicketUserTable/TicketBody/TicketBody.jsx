import React from "react";
import "./TicketBody.scss";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TicketBody = ({ user, deleteTicket }) => {
  const navigate = useNavigate();

  const handelIdOfTicket = (id) => {
    deleteTicket(id);
  };

  return (
    <tr className="ticket-containt">
      <td className="ticket-details" onClick={() => navigate(`${user.id}`)}>
        <div className="ticket-wrapper">
          <div className="user-image">
            <img src={user.logo} alt="user-image" />
          </div>
          <div className="details">
            <h3>{user.detailsMessage}</h3>
            <p>{user.updateMessageTime}</p>
          </div>
        </div>
      </td>
      <td>
        <div className="customer-name">
          <h3>{user.customerName}</h3>
          <p>{user.updateTime}</p>
        </div>
      </td>
      <td>
        <div className="date">
          <h3>{user.date}</h3>
          <p>{user.time}</p>
        </div>
      </td>
      <td>
        <div className="priority">
          <button style={{ background: user.color }}>{user.priority}</button>
        </div>
      </td>
      <td>
        <FaTrash onClick={() => handelIdOfTicket(user.id)} />
      </td>
    </tr>
  );
};

export default TicketBody;
