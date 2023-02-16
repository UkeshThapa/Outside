import React from 'react'
import { useState } from 'react'
import './TicketContainer.scss'
import TicketDetails from './TicketDetails/TicketDetails'
import TicketNavbar from './TicketNavbar/TicketNavbar'

const TicketContainer = () => {
  const [searchKey,setSearchKey] = useState();
  console.log(searchKey)
  const handleQueryChange = (event)=>{
    setSearchKey(event.target.value)
  }


  return (

    <div className='ticketContainer'>
      <TicketNavbar onQueryChange={handleQueryChange} query={searchKey}/>
      <TicketDetails query={searchKey}/>
    </div>
  )
}

export default TicketContainer