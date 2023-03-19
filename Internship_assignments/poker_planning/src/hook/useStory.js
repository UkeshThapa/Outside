import { useState, useEffect,useContext } from "react";
import { storyContext,statusContext } from "../App";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';



const useStory = () => {
  const { id } = useParams();
  const [story, setStory] = useState([]);
  const [activeStoryPoint, setActiveStoryPoint] = useContext(storyContext)
  const [status, setStatus] = useContext(statusContext);
  const [storyId,setStoryId] = useState();


  const getStory = async (data) => {
    try {
      const res = await axios
        .get("http://localhost/php/pokerplanning/", { params: { ...data } })
        .then((res) => {
          setStory(res.data);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  // check the update in the story
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost/php/pokerplanning/", {
          params: { action: "getStory", session_id: id },
        })
        .then((res) => {
          setStory(res.data); 
          const stories = res.data
          const story_id = stories.filter(story => story.storyStatus === 'active').map(story => story.story_id)
          setStoryId(...story_id)
        });
    };

    fetchData();
    const intervalId = setInterval(() => {
      fetchData();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);


  // active story points reveal
  const getActiveStoryPoints = async (data) => {
    try {
      const res = await axios
        .get("http://localhost/php/pokerplanning/", { params: { ...data } })
        .then((res) => {
          setActiveStoryPoint(res.data);
          console.log(res.data)
        });
    } catch (error) {
      console.log(error.message);
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost/php/pokerplanning/", {
        params: { session_id: id, action: "getStatus" },
      });
      setStatus(result.data.storyStatus);
    };

    fetchData();
    const intervalId = setInterval(() => {
      fetchData();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const deleteStory = async (data) => {
    try {
      const res = await axios.delete("http://localhost/php/pokerplanning/", {
        params: { ...data },
      });
      const newStories = story.filter(
        (stories) => stories.story_id !== data.story_id
      );
      setStory(newStories);
      toast.success('successfully story deleted')
    } catch (error) {
      console.log(error.message);
    }
  };
  
  const addStory = async (data) => {
    try {
      await axios.post("http://localhost/php/pokerplanning/", data).then(()=>{
        toast.success('successfully story added')
      });
    } catch (error) {
      console.log(error.message);
      toast.error('error adding story')
    }
  };

  const addStoryPoints = async (data) => {
    try {
      await axios.post("http://localhost/php/pokerplanning/", data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateStoryStatus = async (data) => {
    try {
      await axios.post("http://localhost/php/pokerplanning/", data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const updateHiddenStatus = async (data) => {
    try {
      await axios
        .post("http://localhost/php/pokerplanning/", data)
        .then((res) => {
          console.log(res.data.storyStatus);
          setStatus(res.data.storyStatus);
        });
    } catch (error) {
      console.log(error.message);
    }
  };
  const InsertTheStatus = async (data) => {
    try {
      await axios
        .post("http://localhost/php/pokerplanning/", data)
        .then((res) => {
          setStatus(res.data.storyStatus);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return {
    story,
    addStory,
    getStory,
    deleteStory,
    updateStoryStatus,
    addStoryPoints,
    getActiveStoryPoints,
    activeStoryPoint,
    setActiveStoryPoint,
    updateHiddenStatus,
    InsertTheStatus,
    status,
    setStatus,
    storyId
  };
};

export default useStory;
