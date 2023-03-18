import React from 'react'
import "./StoryDetail.scss";
const StoryDetail = () => {
  return (
    <tr>
        <td>
            <div className="story-btn">
                <button id='vote-btn'>vote</button>
            </div>
        </td>
        <td>
            <div className="story-title">
                <p>
                    story
                </p>
            </div>
        </td>
        <td>
            <div className='trash'>
                <i className='icon-trash'></i>
            </div>
        </td>
    </tr>
  )
}

export default StoryDetail