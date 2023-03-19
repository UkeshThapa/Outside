import React,{useState} from 'react'
import "./StoryDetail.scss";
import useStory from '../../../../../hook/useStory';
import { useParams } from 'react-router-dom';
import Modal from '../../../../Model/Model';


const StoryDetail = ({index,stories,deleteStory,checkActive,handleChange,participants,handelSingleStory}) => {
    const {id} = useParams()
    const {getSingleStoryDetail} = useStory()

    function handleDelete(id){
        deleteStory({story_id:id,action:'deleteStoryById'})
    }
    const roleStatus = participants.filter(participant=>participant.user_id==sessionStorage.getItem('user_id')).map(participant=>participant.role)
    
    const [showModel, setShowModel] = useState(false);



    function handleModel() {
        document.body.style.overflow = "unset";
        setShowModel(!showModel);
        handelSingleStory(stories.story_id,id)
      }


  return (
    <tr className='body-story'>
        <td>
            <div className="index">
                {
                  roleStatus[0]=='moderator'?'':<h3>{index}</h3> 
                }
                <input className={roleStatus[0]=='moderator'?'story_status':'hide_radio'} type="radio" name='active_story' checked={stories.storyStatus=='active' } value={stories.story_id}
                
                onChange={()=>handleChange(stories.story_id)}
                />

            </div>
        </td>
        <td>
            <div className="story-title" >
                <p onClick={handleModel}>
                    {
                    stories.storyName.length > 10 ? `${stories.storyName.substring(0,8)}...` : stories.storyName
                    
                    }
                </p>

                {showModel && (
                  <Modal handleClose={handleModel} show={showModel}>
                    <div className="model-container">
                        <div className="header-title">

                            <h2>Story Detail</h2>
                        </div>
                        <form className="form-container" >
                            <div className="story-titleForm">
                                <label htmlFor="" className="title">Story Title:</label>
                                <input type="text" id="story-title-input" name="title" defaultValue={stories.storyName} />
                            </div>
                            <div className="story-description">
                                <label htmlFor="" className="description">Description</label>
                                <textarea rows={5} type="text" id="story-description-input" name="description" defaultValue={stories.description} />
                            </div>
                            <div className="story-Average">
                                <label htmlFor="" className="description">Story Average</label>
                                <textarea rows={5} type="text" id="story-average-input" name="average" defaultValue={stories.description} />
                            </div>

                        </form>

                    </div>

                  </Modal>
                )}

                <div className="story-btn">
                <button className={stories.storyStatus=='active'?'vote-btn-active':'vote-btn'}>{stories.storyStatus=='active'?"voting":"vote"}</button>
            </div>
            </div>
        </td>
        <td>
            <div className='trash'>
                <i className={roleStatus[0]=='moderator'?'icon-trash':''} onClick={()=>{handleDelete(stories.story_id)}}></i>
            </div>
        </td>
    </tr>
  )
}

export default StoryDetail