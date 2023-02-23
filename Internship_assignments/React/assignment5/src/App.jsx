import React,{ useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss'
import LogIn from "./authentication/login/LogIn"
import SignUp from './authentication/signup/SignUp';
import Dashboard from './Dashboard/Dashboard';
import Overview from './Dashboard/overview/Overview';
import TicketContainer from './Dashboard/Ticket/TicketContainer';

function App() {


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
