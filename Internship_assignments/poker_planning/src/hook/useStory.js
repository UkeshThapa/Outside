import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const useStory = () => {
  const { id } = useParams();
  const [story, setStory] = useState([]);
  const [storyPoint, setStoryPoint] = useState([]);
  const [status, setStatus] = useState("");

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
        });
    };

    fetchData();
    const intervalId = setInterval(() => {
      fetchData();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // active story points reveal
  const getStoryPoints = async (data) => {
    try {
      const res = await axios
        .get("http://localhost/php/pokerplanning/", { params: { ...data } })
        .then((res) => {
          setStoryPoint(res.data);
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
      console.log(result.data.storyStatus);
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
    } catch (error) {
      console.log(error.message);
    }
  };

  const addStory = async (data) => {
    try {
      await axios.post("http://localhost/php/pokerplanning/", data);
    } catch (error) {
      console.log(error.message);
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
    getStoryPoints,
    storyPoint,
    setStoryPoint,
    updateHiddenStatus,
    InsertTheStatus,
    status,
  };
};

export default useStory;
