import React from 'react'
import './Box.scss'
import usePos from './hook/usePos'
const Box = ({color,shape}) => {
    const {position,updatePosition} = usePos();
    return (
        <div className='box' style={{backgroundColor: color}} onMouseMove={updatePosition}>
        <div className={shape} style={{position:"absolute",top:position.MousePositionY,left:position.MousePositionX}}>
       </div>
    </div>
  )
}

export default Box