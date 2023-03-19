import React,{useContext} from 'react'
import Member from './member/member'
import "./User.scss"
import useParticipants from '../../../../../hook/useParticipants'
import { storyContext } from '../../../../../App'
import useStory from '../../../../../hook/useStory'

const User = () => {
  const {status} = useStory();
  const {participants} = useParticipants()
  const [activeStoryPoint, setActiveStoryPoint] = useContext(storyContext)



  return (

    <div className="user__container">
      {
              status=='hidden'?  
          participants.map((user,index)=>{
            return(
              <Member
              key = {index}
              user = {user}
              status = {status}
              />
            )
          }):          activeStoryPoint.map((user,index)=>{
            return(
              <Member
              key = {index}
              user = {user}
              status = {status}
              />
            )
          })
          
      }

    </div>
  )
}

export default User