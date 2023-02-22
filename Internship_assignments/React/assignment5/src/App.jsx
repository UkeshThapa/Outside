import React,{ useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss'
import LogIn from "./authentication/login/LogIn"
import SignUp from './authentication/signup/SignUp';
import Dashboard from './Dashboard/Dashboard';
import Overview from './Dashboard/overview/Overview';
import TicketContainer from './Dashboard/Ticket/TicketContainer';
import useTickets from './hooks/useTickets';

function App() {
  const {tickets,errorMessage,addTickets} = useTickets()

  const [ticketDetail,setTicketDetail] = useState({
    name : "",
    message : "",
    priority : ""
  })

  const handleInputChange =(e)=>{
    setTicketDetail(prev=>({
      ...prev,
      [e.target.name] : e.target.value
    }))
  }

  const handleSubmitForm =(event)=>{ 
    event.preventDefault();
    console.log(ticketDetail)
    addTickets(ticketDetail)
  }

  return (
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <div className='signUp-auth-container'>
                <LogIn/>
            </div>    
            }>  
          </Route>
          <Route path='/signup' element={
            <div className='signUp-auth-container'>
                <SignUp/>
            </div>    
            }>  
          </Route>
          <Route path='dashboard' element={<Dashboard/>}>
            <Route path='ticket' element={<TicketContainer/>}></Route>
            <Route path='overview' element={<Overview/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App
