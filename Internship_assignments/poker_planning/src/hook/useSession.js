import { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";

const useSession = () => {
  
  const [sessions, setSessions] = useState([]);
  const [sessionId, setSessionId] = useState();
  const [loading,setLoading] = useState(null);
  const [error,setError] = useState(null);


  const navigate = useNavigate();




  const getSessions = async () => {
    try {
      const res = await axios.get("http://localhost/php/pokerplanning/",{params:{action:'getSessions',user_id:Number(sessionStorage.getItem('user_id'))}});
      setSessions(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // console.log("hello session")


  const checkSession = async(data)=>{
    try {
      const res = await axios.get("http://localhost/php/pokerplanning/",{ params: { ...data} });
      setSessions(res.data);
      setError(false);
    } catch (error) {
      console.log(error.message);
      setError(true);
      navigate("/error")
    }
  }


  const addSession = async (data) => {
    try {
      console.log(data)
      setLoading(true);
      await axios.post("http://localhost/php/pokerplanning/", data).then((res)=>{
        setSessionId(res.data.session_id)
        setLoading(false)
      }
      ) 
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getSessions();
  }, []);

  return {loading, sessions,addSession,sessionId,getSessions,checkSession,error};
};

export default useSession;
