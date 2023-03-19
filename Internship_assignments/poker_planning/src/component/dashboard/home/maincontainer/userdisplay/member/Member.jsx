import React from 'react'
import "./Member.scss";
const Member = ({user,status}) => {
  return (
    <div className='member'>
        <div className={status=='hidden'?'member__card hidden_background':'member__card'}>
                <h3 className={status=='hidden'?'text__hidden':''}>{user.points}</h3>
        </div>
        <div className="member__name">
            <h3>{user.fullName}</h3>
        </div>

    </div>
  )
}

export default Member