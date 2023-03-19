import React, { useEffect, useState } from "react";
import "./AddSession.scss";
import { useNavigate } from "react-router-dom";
import useSession from "../../../hook/useSession";

const AddSession = () => {

  const {sessions,loading, addSession,sessionId,setLoading} = useSession();
  const navigate = useNavigate();
  const [sessionDetails, setSessionDetails] = useState({
    sessionName: "",
    sessionDescription: "",
  });

  const handleInputChange = (e) => {
    setSessionDetails((prev) => ({ 
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  function handelNavigationToHomePage() {
    navigate("/session");
  }
  
  function navigateToHome(){
    if(loading==false){
      navigate(`/session/${sessionId}`);

    }    
  }


  useEffect(navigateToHome,[loading]);

  function handleSubmitChange(e) {
    e.preventDefault();
    addSession({ action: "addSession",creator_id:Number(sessionStorage.getItem("user_id")),...sessionDetails });

  }

  return (
    <div className="session-container">
      <div className="session-header">
        <h2>Create Session</h2>
      </div>
      <form action="" onSubmit={handleSubmitChange}>
        <div className="sessionName-container">
          <label htmlFor="sessionName" id="sessionNameLabel">
            Name<sup>*</sup>
          </label>
          <input
            required={true}
            type="text"
            id="sessionNameInput"
            name="sessionName"
            value={sessionDetails.sessionName}
            onChange={handleInputChange}
          />
        </div>
        <div className="sessionDescription-container">
          <label htmlFor="sessionDescription" id="sessionDescriptionLabel">
            Description
          </label>
          <textarea
            type="text"
            id="sessionDescriptionInput"
            name="sessionDescription"
            value={sessionDetails.sessionDescription}
            onChange={handleInputChange}
          />
        </div>
        <div className="button-container">
          <button className="cancel" onClick={handelNavigationToHomePage}>
            Cancel
          </button>
          <button className="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddSession;
