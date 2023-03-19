import React, { useState,useContext } from 'react'
import Card from './card/card'
import "./CardSection.scss"
import useStory from '../../../../hook/useStory'
import { storyContext} from '../../../../App'
import { useParams } from 'react-router-dom'
const CardSection = () => {

  const session_id = useParams();
  const [storyId,setStoryId] = useContext(storyContext);
  const {addStoryPoints,updateHiddenStatus} = useStory();

  const [storyPoint,setStoryPoint] = useState(null);

  const fibonacciSeries =[1,2,3,5,8,13,21,34,55]

  function handleValueOfCard(value){
    setStoryPoint(value)
    addStoryPoints({action:'addStoryPoints',session_id:`${session_id.id}`,story_id:storyId,story_points:storyPoint,user_id:Number(sessionStorage.getItem('user_id'))})
  }

 
  
  function handleStoryStatus(){
    updateHiddenStatus({action:'updateHiddenStatus',storyStatus:'show',session_id:`${session_id.id}`});    
  }
  
  function handleResetStatus(){
    updateHiddenStatus({action:'updateHiddenStatus',storyStatus:'hidden',session_id:`${session_id.id}`});    
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

            <button className="submit-btn" onClick={handleResetStatus}>Reset</button>
            <button className="reveal-btn" onClick={handleStoryStatus}>Reveal</button>


        </div>
        
    </div>
  )
}

export default CardSection 