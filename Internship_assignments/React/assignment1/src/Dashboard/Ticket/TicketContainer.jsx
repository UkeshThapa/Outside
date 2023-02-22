import React, { useRef } from 'react'
import { useState } from 'react'
import './TicketContainer.scss'
import TicketDetails from './TicketDetails/TicketDetails'
import TicketNavbar from './TicketNavbar/TicketNavbar'

const TicketContainer = () => {

  return (

    <div className='ticketContainer'>
      <TicketNavbar/>
      <TicketDetails/>
    </div>
  )
}

export default TicketContainer