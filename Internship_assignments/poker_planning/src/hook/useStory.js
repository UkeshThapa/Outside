import { useEffect, useState } from "react";
import axios from "axios";
import {useParams,useNavigate } from "react-router-dom";


const useStory = () => {
  const {id} = useParams();

  const [story, setStory] = useState([]);

  const getStory = async (data) => {
    try {
      const res = await axios.get("http://localhost/php/pokerplanning/",{ params: {...data} }).then((res)=>{
        setStory(res.data);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  



  const deleteStory = async (data) =>{
    try {
      const res = await axios.delete("http://localhost/php/pokerplanning/",{ params: {...data} })
      const newStories = story.filter((stories) => stories.story_id !== data.story_id);
      setStory(newStories);
    } catch (error) {
      console.log(error.message);
    }

  }

  const addStory = async (data) => {
    try {
        console.log(data);
      await axios.post("http://localhost/php/pokerplanning/", data)
    } catch (error) {
      console.log(error.message);
    }
  };
  return {story,addStory,getStory,deleteStory,setStory};
};

export default useStory;
