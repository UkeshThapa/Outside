import React,{useState} from 'react'
import './TicketTable.scss';
import TicketHeader from './TicketHeader/TicketHeader';
import TicketBody from './TicketBody/TicketBody';
import ticketDetails from './TicketBody/TicketDetailsOfUser';

const TicketTable = ({query,filter}) => {
  const [ticketDetail,setTicketDetail] = useState(ticketDetails)


  {
    if(filter === "All"){
      filter = null;
    }

  }
  return (
    <table className='ticket-table'>
        <TicketHeader/>
        <tbody>
        { ticketDetail.filter(ticket=>query?ticket.detailsMessage.includes(query):true).filter(ticket=>filter?ticket.text.includes(filter):true).map((ticket,index)=>{
          return <TicketBody key={index} ticketDetail={ticketDetail} setTicketDetail={setTicketDetail} ticket={ticket}/>
        }
        )}
        </tbody>
    </table>
  )
}

export default TicketTable