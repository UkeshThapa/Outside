import { useEffect, useState } from "react";
import axios from "axios";
import {useParams,useNavigate } from "react-router-dom";

const useParticipants = () => {
  
  const [participants, setParticipants] = useState([]);
  const {id} = useParams();



  const addParticipants = async (data) => {
    try {   
      await axios.post("http://localhost/php/pokerplanning/", data)
    } catch (error) {
      console.log(error.message);
    }
  };


  useEffect(() => {

  
    const fetchData = async () => {
      const result = await axios.get('http://localhost/php/pokerplanning/',{ params: {session_id:id,action:'allParticipants'} });
      setParticipants(result.data);

    };
    

      fetchData();
      const intervalId = setInterval(() => {
        fetchData();
      }, 5000);


    return () => clearInterval(intervalId);
  }, []);
  


  return {participants,addParticipants};
  
};


export default useParticipants;
