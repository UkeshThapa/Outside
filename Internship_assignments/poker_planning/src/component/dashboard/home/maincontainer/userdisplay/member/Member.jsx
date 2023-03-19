import React from 'react'
import "./Member.scss";
const Member = ({user}) => {
  return (
    <div className='member'>
        <div className="member__card__hidden">
                <h3></h3>
        </div>
        <div className="member__name">
            <h3>{user.fullName}</h3>
        </div>

    </div>
  )
}

export default Member