import React from 'react'
import "./TicketBody.scss"

const TicketBody = ({ticket}) => {
  return (
    <tr className='ticket-detail-container'>
        <td className='ticket-details'>
          <div className='ticket-wrapper'>
            <div className='user-image'>
                <img src={ticket.logo} alt="user-image" />
            </div>
            <div className="details">
              <h3>{ticket.detailsMessage}</h3>
              <p>{ticket.updateMessageTime}</p>
            </div>
          </div>
        </td>
        <td>
          <div className='customer-name'>
            <h3>{ticket.customerName}</h3>
            <p>{ticket.updateTime}</p>
          </div>
        </td>
        <td >
          <div className='date'>
            <h3>{ticket.date}</h3>
            <p>{ticket.time}</p>
          </div>
        </td>
        <td >
          <div className='priority'>
            <button style={{background: ticket.color}}>
            {ticket.text}
            </button>
          </div>
        </td>
        <td>
          <i className='icon-more'></i>
        </td>
  </tr>
  )
}

export default TicketBody