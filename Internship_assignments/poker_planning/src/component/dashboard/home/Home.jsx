import React, { useEffect } from 'react'
import useSession from '../../../hook/useSession'
import {useParams,useNavigate } from "react-router-dom";
import useParticipants from '../../../hook/useParticipants';
import Container from './maincontainer/container';
import CardSection from './cardSection/CardSection';
import "./Home.scss";

const Home = () => {
    const {checkSession,error} = useSession();
    const {participants,addParticipants,getParticipants} = useParticipants();
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
      checkSession({session_id:id,action:'checkSession'})
    },[])
    
    
    useEffect(()=>{
      if(!error){
        addParticipants({session_id:id,action:'addParticipants',user_id:Number(sessionStorage.getItem('user_id'))})

        // console.log(participants)
      }
    },[error]) 

    return (
    <div className='home-section'>
      <Container/>
      <CardSection/>
    </div>
  )
}

export default Home