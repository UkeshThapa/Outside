import { useEffect, useState } from "react";
import axios from "axios";
import {useParams,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const useUsers = () => {
  const navigateToDashboard = useNavigate()
  const [users, setUsers] = useState([]);
  const [logInStatus, setLogInStatus] = useState(false);
  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost/php/pokerplanning/");
      setUsers(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  

  const postAction = async (data) => {
    try {

      await axios.post("http://localhost/php/pokerplanning/", data).then(response=>{
        if (data['action'] == 'logIn'){
          localStorage.setItem("loggedState",true)
          sessionStorage.setItem('user_id',response.data.id)
          navigateToDashboard('/session')
          toast.success('Login Successfully')
        }
        if(data['action']=='signUp'){
          navigateToDashboard('/login')
          toast.success('successfully added')
        }
        
      })      
    } catch (error) {
      console.log(error.message);
      if (data['action'] == 'logIn'){
        toast.error('Invalid email or password')
      }
      if(data['signUp']){
        toast.error('user not added!!')
      }
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return { users,postAction,logInStatus,setLogInStatus};
};

export default useUsers;
