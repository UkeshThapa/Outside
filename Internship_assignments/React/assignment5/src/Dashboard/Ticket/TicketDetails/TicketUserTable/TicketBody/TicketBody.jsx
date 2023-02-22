import React from 'react'
import "./TicketBody.scss"
import {FaTrash} from "react-icons/fa";


const TicketBody = ({user}) => {
  return (
    <tr className='ticket-containt'>
        <td className='ticket-details'>
          <div className='ticket-wrapper'>
            <div className='user-image'>
                <img src={user.logo} alt="user-image" />
            </div>
            <div className="details">
              <h3>{user.detailsMessage}</h3>
              <p>{user.updateMessageTime}</p>
            </div>
          </div>
        </td>
        <td>
          <div className='customer-name'>
            <h3>{user.customerName}</h3>
            <p>{user.updateTime}</p>
          </div>
        </td>
        <td >
          <div className='date'>
            <h3>{user.date}</h3>
            <p>{user.time}</p>
          </div>
        </td>
        <td >
          <div className='priority'>
            <button style={{background: user.color}}>
            {user.priority}
            </button>
          </div>
        </td>
        <td>
        <FaTrash/>
        </td>
  </tr>
  )
}

export default TicketBody