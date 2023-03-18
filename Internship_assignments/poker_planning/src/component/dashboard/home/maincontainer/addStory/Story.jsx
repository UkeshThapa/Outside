import React, { useState,useEffect } from "react";
import Modal from "../../../../Model/Model";
import "./Story.scss";
import useStory from "../../../../../hook/useStory";
import { useParams } from "react-router-dom";
import StoryDetail from "./StoryDetail";

const Story = () => {

  const {story,addStory,getStory,deleteStory,updateStoryStatus} = useStory();
  const session_id = useParams();

  const [showModel, setShowModel] = useState(false);
  function handleModel() {
    document.body.style.overflow = "unset";
    setShowModel(!showModel);
    
  }

  useEffect(()=>{
    getStory({action:'getStory',session_id:`${session_id.id}`})
  }
  ,[])

        // store the story details
    const [storyDetail, setStoryDetail] = useState({
        title: "",
        description: ""
        });

    const handleInputChange = (e) => {
        setStoryDetail((prev) => ({
            ...prev,
            [e.target.name]:e.target.value,
        }));
        
        };

        const handleSubmitForm = (event) => {
            event.preventDefault();
            addStory({action:'addStory',session_id:`${session_id.id}`,...storyDetail});
            setTimeout(() => {
              getStory({action:'getStory',session_id:`${session_id.id}`})
            }, 500);
          };
          

      const [checkActive,setCheckActive] = useState(null);

      function handleChange(id){
        setCheckActive(id)
        updateStoryStatus({action:'updateStoryStatus',story_id:id})
        setTimeout(() => {
          getStory({action:'getStory',session_id:`${session_id.id}`})
        }, 500);
      }



  return (
    <div className="story-container">
      <table className="story-table">
        <thead className="tableHeader">
          <tr>
            <th>
              <div className="header">
                <i className="icon-add" id="add" onClick={handleModel} ></i>
                {showModel && (
                  <Modal handleClose={handleModel} show={showModel}>
                    <div className="model-container">
                        <div className="header-title">

                            <h2>Add Story</h2>
                        </div>
                        <form className="form-container" onSubmit={handleSubmitForm}>
                            <div className="story-titleForm">
                                <label htmlFor="" className="title">Story Title:</label>
                                <input type="text" id="story-title-input" name="title" value={storyDetail.title} onChange={handleInputChange} required={true} />
                            </div>
                            <div className="story-description">
                                <label htmlFor="" className="description">Description</label>
                                <textarea rows={5} type="text" id="story-description-input" name="description" value={storyDetail.description} onChange={handleInputChange}/>
                            </div>
                            <div className="submit-button">
                                <button type="submit" id="submit">Submit</button>
                            </div>
                        </form>

                    </div>

                  </Modal>
                )}
              </div>
            </th>
            <th>
              <div className="header">
                <h3>Add Story</h3>
              </div>
            </th>
            <th>
              <div className="header">
                {/* <i className="icon-trash" id="trash"></i> */}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            story.map((story,index)=>{
              return(
                <StoryDetail
                  key={index}
                  index = {index+1}
                  stories={story} 
                  deleteStory= {deleteStory}
                  checkActive = {checkActive}
                  handleChange = {handleChange}
                />

              )
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default Story;
