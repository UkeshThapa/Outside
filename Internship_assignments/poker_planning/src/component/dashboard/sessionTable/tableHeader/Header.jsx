import React from 'react'
import "./Header.scss"


const Header = () => {
  return (
    <tr className='header-container'>
        <th>
            <div className="header">
                <h3>Session Name</h3>
            </div>
        </th>
        <th>
            <div className="header">
                <h3>Number of Participants</h3>
            </div>
        </th>
        <th>
            <div className="header">
                <h3>Status</h3>
            </div>
        </th>
        <th>

        </th>
    </tr>
  )
}

export default Header