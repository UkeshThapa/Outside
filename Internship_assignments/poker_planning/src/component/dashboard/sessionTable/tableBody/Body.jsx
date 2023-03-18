import React from 'react'
import "./Body.scss"
import { useNavigate } from "react-router-dom";

const Body = ({session}) => {
  const navigate = useNavigate();
  let color
  if(session.status=='running'){
     color = 'rgba(207, 21, 21, 0.76)' 
  }
  else{
    color = 'rgba(9, 177, 96, 0.98)' 
  }
  return (
    <tr>
        <td onClick={() => navigate(`/session/${session.session_id}`)}>
            <div className="session-name">
                {session.sessionName}
            </div>
        </td>
        <td>
            <div className="session-member">
               {session.num_users}
            </div>
        </td>
        <td>
            <div className="session-status">
              <button className='btn' style={{ background: color }}>{session.status}</button> 
            </div>
            
        </td>
        <td>
            <div className="session-icon">
              <i className='icon-trash' id='icon'></i>
            </div>
            
        </td>
    </tr>
  )
}

export default Body