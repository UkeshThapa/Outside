import { useEffect, useState } from "react";
import axios from "axios";


const useStory = () => {

  const [story, setStory] = useState([]);

  const getStory = async () => {
    try {
      const res = await axios.get("http://localhost/php/pokerplanning/");
      setStory(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  

  const addStory = async (data) => {
    try {
        console.log(data);
      await axios.post("http://localhost/php/pokerplanning/", data)
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getStory();
  }, []);

  return {story,addStory};
};

export default useStory;
