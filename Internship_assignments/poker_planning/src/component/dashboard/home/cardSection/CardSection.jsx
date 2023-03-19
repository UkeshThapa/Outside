import React, { useState,useContext } from 'react'
import Card from './card/card'
import "./CardSection.scss"
import useStory from '../../../../hook/useStory'
import { storyContext } from '../../../../App'

const CardSection = () => {


  const [storyId,setStoryId] = useContext(storyContext);

  const {addStoryPoints} = useStory();

  const [storyPoint,setStoryPoint] = useState(null);

  const fibonacciSeries =[1,2,3,5,8,13,21,34,55]

  function handleValueOfCard(value){
    setStoryPoint(value)
  }

  function handleStoryPoint (){
    console.log(storyPoint)
    addStoryPoints({action:'addStoryPoints',story_id:storyId,story_points:storyPoint,user_id:Number(sessionStorage.getItem('user_id'))})
  }
  
  function handleStoryStatus(){
    console.log(storyPoint)
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
          {/* <Card/>
          <Card/> */}
        </div>
        <div className="footer-container__button">

            <button className="submit-btn" onClick={handleStoryPoint}>submit</button>
            <button className="reveal-btn" onClick={handleStoryStatus}>reveal</button>


        </div>
        
    </div>
  )
}

export default CardSection 