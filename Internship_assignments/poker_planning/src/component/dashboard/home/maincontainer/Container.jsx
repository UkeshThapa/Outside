import React from 'react'
import Story from './addStory/Story'
import Menu from './menuSection/Menu'
import User from './userdisplay/User'
import "./Container.scss";


const Container = () => {
  return (
    <div className='container'>
        <Story/>
        <User/>
        <Menu/>
    </div>
  )
}

export default Container