import React,{useState,createContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss'
import LogIn from "./authentication/login/LogIn"
import SignUp from './authentication/signup/SignUp';
import Dashboard from './Dashboard/Dashboard';
import Overview from './Dashboard/overview/Overview';
import TicketDetails from './Dashboard/Ticket/TicketDetails';


export const searchContext = createContext()


function App() {
  const [searchKey,setSearchKey] = useState("") 
  
  return (
    <searchContext.Provider value={[searchKey,setSearchKey]}>
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
            <Route path='Ticket' element={<TicketDetails/>}></Route>
            <Route path='Overview' element={<Overview/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
    </searchContext.Provider>
  )
}

export default App
