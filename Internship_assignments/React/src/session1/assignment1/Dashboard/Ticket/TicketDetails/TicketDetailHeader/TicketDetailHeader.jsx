import React,{useState} from 'react'
import './TicketDetailHeader.scss'

const priority =["All","High","Normal","Low"]

const TicketDetailHeader = ({onFilterChange,filter}) => {

  const [openDropDown,setOpenDropDown] = useState(false)

  // show the drop down
  const handleDropdown = ()=>{
    setOpenDropDown(!openDropDown)
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
            <div className='filter' onClick={handleDropdown}>
                <i className='icon-filter'/>
                <h3>{filter?filter:"Filter"}</h3>
            </div>

            {
              openDropDown 
              &&
              <div className='filter-dropdown'>
                  <ul>
                    {priority.map((items)=>
                      <li>
                        <input type="radio" id="html" name="priority" value={items} onChange={onFilterChange} checked={filter === items? true:false}/>
                          <label for={items}>{items}</label>
                      </li>                    
                    )}
                  </ul>
              </div>
            }



        </div>
    </div>
  ) 
}

export default TicketDetailHeader   