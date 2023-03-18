import React ,{useEffect}from 'react'
import Navbar from './Navbar/Navbar'
import { Outlet } from "react-router-dom";
import {useParams,useNavigate } from "react-router-dom";
import TableContainer from './sessionTable/TableContainer';
import useSession from '../../hook/useSession';



const Dashboard = () => {
  
  const navigateToLogInPage = useNavigate()


  useEffect(()=>{
    if(!window.localStorage.getItem("loggedState")){
      navigateToLogInPage("/login")
    }
  },[])

  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Dashboard