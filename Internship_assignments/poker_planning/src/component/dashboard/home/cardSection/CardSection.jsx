import React, { useState,useEffect,useContext } from 'react'
import Card from './card/card'
import { storyContext,statusContext } from '../../../../App'
import "./CardSection.scss"
import useStory from '../../../../hook/useStory'
import { useParams } from 'react-router-dom'
import useParticipants from '../../../../hook/useParticipants'


const CardSection = () => {
  const {participants} = useParticipants()
  const roleStatus = participants.filter(participant=>participant.user_id==sessionStorage.getItem('user_id')).map(participant=>participant.role)

  const session_id = useParams();
  const {storyId,addStoryPoints,updateHiddenStatus,getActiveStoryPoints} = useStory();
  const [activeStoryPoint, setActiveStoryPoint] = useContext(storyContext)
  const [status, setStatus] = useContext(statusContext)
  
  const [storyPoint,setStoryPoint] = useState(null);

  const fibonacciSeries =[1,2,3,5,8,13,21,34,55]

  function handleValueOfCard(value){
    setStoryPoint(value)
    addStoryPoints({action:'addStoryPoints',story_id:storyId,story_points:value,user_id:Number(sessionStorage.getItem('user_id'))})
  }
  
  useEffect((()=>{
    if(status=='show'){
      getActiveStoryPoints({action:'getActiveStoryPoints',session_id:`${session_id.id}`})
    }
  }),[status])
  
  function handleStoryStatus(){
    updateHiddenStatus({action:'updateHiddenStatus',storyStatus:'show',session_id:`${session_id.id}`});    
  }
  
  function handleResetStatus(){
    updateHiddenStatus({action:'updateHiddenStatus',storyStatus:'hidden',session_id:`${session_id.id}`});    
    setActiveStoryPoint([])
    
  }


  return (
    <div className='footer-container'>
        <div className="footer-container__card">
        {
          fibonacciSeries.map((value,index)=>{
            return(
              <Card
                key={index}
                index = {index+1}
                value={value} 
                storyPoint = {storyPoint}
                handleValueOfCard = {handleValueOfCard}
              />

            )
          })
        }


        </div>
        <div className="footer-container__button">

            <button className={roleStatus[0]=='moderator'?'reset-btn':'btn-hidden'}  onClick={handleResetStatus}>Reset</button>
            <button className={roleStatus[0]=='moderator'?'reveal-btn':'btn-hidden'}  onClick={handleStoryStatus}>Reveal</button>


        </div>
        
    </div>
  )
}

export default CardSection 