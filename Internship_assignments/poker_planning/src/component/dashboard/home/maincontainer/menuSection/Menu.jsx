import React from 'react'
import "./Menu.scss"
import { useLocation,useNavigate } from 'react-router-dom'
import { useState } from 'react'
const Menu = () => {
    let location = useLocation();
    let navigate = useNavigate();
    function handleCopy(){
        navigator.clipboard.writeText(window.location.href)
        console.log(window.location.href)
    }

    function handleNavigation(){
        navigate('/session')
    }





  return (
    <div className='menu-container'>
        <div className="menu-button">
            <div className="sharelink">
                <button className='sharelink-btn' onClick={handleCopy}>Share Link</button>
            </div>
            <div className="complete">
                <button className='complete-btn'>Complete</button>
            </div>
            <div className="end">
                <button className='end-btn' onClick={handleNavigation}>End session</button>
            </div>

        </div>
    </div>
  )
}

export default Menu