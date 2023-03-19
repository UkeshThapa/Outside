import { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

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
        toast.success('successfully session added')
      }
      ) 
    } catch (error) {
      console.log(error.message);
      toast.error('error adding session')
    }
  };

  const deleteSession = async (data) => {
    try {
      const res = await axios.delete("http://localhost/php/pokerplanning/", {
        params: { ...data },
      });
      const newSessions = sessions.filter(
        (session) => session.session_id !== data.session_id
      );
      setSessions(newSessions);
      toast.success('successfully session deleted')
    } catch (error) {
      console.log(error.message);
    }
  };
  



  useEffect(() => {
    getSessions();
  }, []);

  return {loading, sessions,addSession,sessionId,getSessions,checkSession,error,deleteSession};
};

export default useSession;
