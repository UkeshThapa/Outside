import React,{useState} from 'react'
import './TicketDetailHeader.scss'
import {FaPlus } from 'react-icons/fa';

const priority =["All","High","Normal","Low"]

const TicketDetailHeader = ({onFilterChange,filter}) => {

const [openDropDown,setOpenDropDown] = useState(false)
const [showTicketForm,setShowTicketForm] = useState(false)

  // show the drop down
  const handleDropdown = ()=>{
    setShowTicketForm(false)
    setOpenDropDown(!openDropDown)
  }

  const handleTicketForm = ()=>{
    setOpenDropDown(false)
    setShowTicketForm(!showTicketForm)
  }

  const checkedValue = "Normal"


  return (  
    <div className='ticket-detail-header'>
        <h3>All tickets</h3>
        <div className='ticket-detail-features'>
            <div className='sort'>
                <i className='icon-sort'/>
                <h3>Sort</h3>
            </div>
            <div className='add-tickets'>
                <FaPlus onClick={handleTicketForm}/>
                <h3 onClick={handleTicketForm}>Add Ticket</h3>
            </div>

            

            {
              showTicketForm
              &&
              <div className='ticket-form'>
                <form action="">
                  <div className="fullname">
                    <label htmlFor="fullname" id='fullname-label'>FULLNAME</label>
                    <input type="text" placeholder='Fullname' autoComplete='' />
                  </div>
                </form>
              </div>
            }



            <div className='filter' onClick={handleDropdown}>
                <i className='icon-filter'/>
                <h3>{filter?filter:"Filter"}</h3>
            </div>

            <div className='dropdown-filter-container'>

            {
              openDropDown 
              &&
              <div className='filter-dropdown'>
                  <ul>
                    {priority.map((items)=>
                      <li>
                        <input type="checkbox" id="html" name="priority" value={items} onChange={onFilterChange} checked={filter === items? true:false}/>
                          <label htmlFor={items} id="filter-label">{items}</label>
                      </li>                    
                    )}
                  </ul>
              </div>
            }

            </div>




        </div>
    </div>
  ) 
}

export default TicketDetailHeader   