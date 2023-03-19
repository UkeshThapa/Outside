import React from 'react'
import "./Card.scss";


const Card = ({value,storyPoint,handleValueOfCard}) => {
  return (
    <div className={storyPoint==value?"single_card_active":"single_card"} onClick={()=>handleValueOfCard(value)}>
        <h3>
          {value}
        </h3>
    </div>
  )
}

export default Card