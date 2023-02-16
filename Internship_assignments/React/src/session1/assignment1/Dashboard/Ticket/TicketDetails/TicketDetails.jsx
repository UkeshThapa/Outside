import React, { useState } from 'react'
import TicketDetailHeader from './TicketDetailHeader/TicketDetailHeader'
import './TicketDetails.scss'
import TicketTable from './TicketUserTable/TicketTable'

const TicketDetails = ({query}) => {
  const [filter,setFilter] = useState();

  const handleFilterChange = (event)=>{
    setFilter(event.target.value)
  }
  return (
    <div className='ticket-details-container'>
      <TicketDetailHeader onFilterChange={handleFilterChange} filter={filter}/>
      <TicketTable query={query} filter={filter}/>
    </div>
  )
}

export default TicketDetails