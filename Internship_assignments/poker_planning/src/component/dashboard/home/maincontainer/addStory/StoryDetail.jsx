import React,{useState} from 'react'
import "./StoryDetail.scss";
import useStory from '../../../../../hook/useStory';
import { useParams } from 'react-router-dom';




const StoryDetail = ({index,stories,deleteStory,checkActive,handleChange}) => {

    function handleDelete(id){
        deleteStory({story_id:id,action:'deleteStoryById'})
    }



  return (
    <tr className='body-story'>
        <td>
            <div className="index">
                <input type="radio" name='active_story' checked={stories.storyStatus=='active' }  id='story_status' value={stories.story_id}
                
                onChange={()=>handleChange(stories.story_id)}
                />

            </div>
        </td>
        <td>
            <div className="story-title">
                <p>
                    {
                    stories.storyName.length > 10 ? `${stories.storyName.substring(0,8)}...` : stories.storyName
                    
                    }
                </p>
                <div className="story-btn">
                <button className='vote-btn'>{stories.storyStatus=='active'?"voting":"vote"}</button>
            </div>
            </div>
        </td>
        <td>
            <div className='trash'>
                <i className='icon-trash' onClick={()=>{handleDelete(stories.story_id)}}></i>
            </div>
        </td>
    </tr>
  )
}

export default StoryDetail