import React, { useRef } from 'react'
import { useState } from 'react'
import './TicketContainer.scss'
import TicketDetails from './TicketDetails/TicketDetails'
import TicketNavbar from './TicketNavbar/TicketNavbar'

const TicketContainer = () => {
  const [searchKey,setSearchKey] = useState();
  const handleQueryChange = (event)=>{
    setSearchKey(event.target.value)
    console.log("hello")
  }

  const searchValue = useRef("")

  console.log(searchValue.current.value)
  return (

    <div className='ticketContainer'>
      <TicketNavbar onQueryChange={handleQueryChange} query={searchKey} searchValue={searchValue}/>
      <TicketDetails query={searchValue.current.value}/>
    </div>
  )
}

export default TicketContainer