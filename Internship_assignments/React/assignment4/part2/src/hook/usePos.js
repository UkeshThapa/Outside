import { useState } from "react"

 const usePos = ()=>{
    const [position,setPosition] = useState({
        MousePositionX : 0,
        MousePositionY : 0
    })
    const updatePosition = (event)=>{
        setPosition({
            MousePositionX : event.clientX,
            MousePositionY : event.clientY,
        })
    }
    return{position,updatePosition}
 }

 export default usePos;