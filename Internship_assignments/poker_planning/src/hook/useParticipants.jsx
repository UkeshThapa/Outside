import { useEffect, useState } from "react";
import axios from "axios";
import {useParams,useNavigate } from "react-router-dom";

const useParticipants = () => {
  
  const [participants, setParticipants] = useState([]);
  const {id} = useParams();

  // console.log(id)



  // const getParticipants = async (data) => {
  //   try {
  //     const res = await axios.get("http://localhost/php/pokerplanning/",{ params: { ...data} });
  //     // setParticipants(res.data);
  //     console.log(res)
  //     // setParticipants(res.data)

  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  const addParticipants = async (data) => {
    try {   
      await axios.post("http://localhost/php/pokerplanning/", data)
    } catch (error) {
      console.log(error.message);
    }
  };


  // useEffect(() => {

    
  //   const fetchData = async () => {
  //     const result = await axios.get('http://localhost/php/pokerplanning/',{ params: {session_id:id,action:'allParticipants'} });
  //     setParticipants(result.data);
  //     console.log('hello')
  //   };
    
  //   // Fetch data initially when component mounts
  //   if(!error){      
  //     fetchData();
  //     const intervalId = setInterval(() => {
  //       fetchData();
  //     }, 5000);
  //   }

  //   // Fetch data periodically every 5 seconds
    
  //   // Clean up interval when component unmounts
  //   return () => clearInterval(intervalId);
  // }, []);
  


  // useEffect(()=>{getParticipants({session_id:id,action:'allParticipants'})},
  // []);


  return {participants,addParticipants};
  
};


export default useParticipants;
