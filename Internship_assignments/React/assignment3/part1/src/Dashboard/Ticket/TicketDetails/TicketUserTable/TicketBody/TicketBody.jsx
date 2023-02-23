import React from 'react'
import "./TicketBody.scss"
import { FaTrash } from 'react-icons/fa'


const TicketBody = ({setTicketDetail,ticket}) => {
  const handleIdOfTicket= (id)=>{
    setTicketDetail(oldValues => {
      return oldValues.filter((ticket) => ticket.id !== id)
    })  
    console.log(id)  
  }

  return (
    <tr className='ticker-detail-container'>
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
          <FaTrash onClick={()=>handleIdOfTicket(ticket.id)}/>
        </td>
  </tr>
  )
}

export default TicketBody