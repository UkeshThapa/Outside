import React from 'react'
import "./StoryDetail.scss";
import useStory from '../../../../../hook/useStory';
import { useParams } from 'react-router-dom';
const StoryDetail = ({index,stories,deleteStory}) => {
    const session_id = useParams();

    const{story} = useStory();

    function handleDelete(id){

        console.log(story)
        deleteStory({story_id:id,action:'deleteStoryById'})
        console.log(story)


    }

  return (
    <tr className='body-story'>
        <td>
            <div className="index">
                <p>
                    {index}
                </p>

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
                <button id='vote-btn'>vote</button>
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