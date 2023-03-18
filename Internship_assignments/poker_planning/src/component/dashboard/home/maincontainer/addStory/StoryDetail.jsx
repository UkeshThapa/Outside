import React from 'react'
import "./StoryDetail.scss";
const StoryDetail = () => {
  return (
    <tr>
        <td>
            <div className="index">
                <p>
                    1

                </p>

            </div>
        </td>
        <td>
            <div className="story-title">
                <p>
                    story
                </p>
                <div className="story-btn">
                <button id='vote-btn'>vote</button>
            </div>
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