import React from 'react'
import './TicketDetailHeader.scss'

const priority =["High","Normal","Low"]

const TicketDetailHeader = () => {




  return (  
    <div className='ticket-detail-header'>
        <h3>All tickets</h3>
        <div className='ticket-detail-features'>
            <div className='sort'>
                <i className='icon-sort'/>
                <h3>Sort</h3>
            </div>
            <div className='filter'>
                <i className='icon-filter'/>
                <h3>Filter</h3>
            </div>
            <div className='filter-dropdown'>
                <ul>
                    <li>
                      <input type="radio" id="html" name="priority" value="High"/>
                        <label for="High">High</label>
                    </li>
                    <li>
                      <input type="radio" id="html" name="priority" value="Low"/>
                        <label for="Low">Low</label>
                    </li>
                    <li>
                      <input type="radio" id="html" name="priority" value="Normal"/>
                        <label for="Normal">Normal</label>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  ) 
}

export default TicketDetailHeader   