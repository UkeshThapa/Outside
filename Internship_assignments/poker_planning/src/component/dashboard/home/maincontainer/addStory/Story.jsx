import React, { useState } from "react";
import Modal from "../../../../Model/Model";
import "./Story.scss";
import useStory from "../../../../../hook/useStory";
import { useParams } from "react-router-dom";
import StoryDetail from "./StoryDetail";

const Story = () => {

  const {addStory} = useStory();
  const session_id = useParams();

  const [showModel, setShowModel] = useState(false);
  function handleModel() {
    document.body.style.overflow = "unset";
    setShowModel(!showModel);
  }

  
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
            // console.log(storyDetail)
      };


  return (
    <div className="story-container">
      <table className="story-table">
        <thead>
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
                            <div className="story-title">
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
        <tbody className="body">
            <StoryDetail/>
            <StoryDetail/>
            <StoryDetail/>
            <StoryDetail/>
            <StoryDetail/>
            <StoryDetail/>
            <StoryDetail/>


        </tbody>
      </table>
    </div>
  );
};

export default Story;
