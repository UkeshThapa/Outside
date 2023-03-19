import React,{useContext} from 'react'
import Member from './member/member'
import "./User.scss"
import useParticipants from '../../../../../hook/useParticipants'
import { toggleContext } from '../../../../../App'
import useStory from '../../../../../hook/useStory'
const User = () => {
  const {status} = useStory();
  const {participants} = useParticipants()
  const [toggle,setToggle] = useContext(toggleContext);


  return (

    <div className="user__container">
      {
              status=='hidden'?  
          participants.map((user,index)=>{
            return(
              <Member
              key = {index}
              user = {user}
              />
            )
          }):'false'
          
      }

    </div>
  )
}

export default User