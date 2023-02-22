import React,{ useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss'
import LogIn from "./authentication/login/LogIn"
import SignUp from './authentication/signup/SignUp';
import Dashboard from './Dashboard/Dashboard';
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
          <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes>
          

          

          {/* <div className='error-message'>
            {
              errorMessage
            }
          </div> */}
            {/* <form action="" onSubmit={handleSubmitForm}>
              <label htmlFor="name">Name</label><br />
              
              <input type="text" name="name" value={ticketDetail.name} onChange={handleInputChange}/><br /><br />
              
              <label htmlFor="message" >Message</label><br />
              
              <input type="text"name="message" value={ticketDetail.message} onChange={handleInputChange}/><br /><br />
              
              <label htmlFor="priority">Priority</label><br />
              
              <input type="text" name='priority' value={ticketDetail.priority} onChange={handleInputChange} /><br /><br />
              
              <button  style={{padding:"16px",margin:"14px"}}>Add tickets</button>
            </form> */}
          {/* <table>
            <thead>
              <tr>
                <th>name</th>          
                <th>message</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              {
                tickets.map((ticket,index)=> {
                  return(
                    <tr>
                      <td>
                        {ticket.customerName}
                      </td>
                      <td>
                        {ticket.detailsMessage}
                      </td>
                      <td>
                        {ticket.priority}
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table> */}
      </BrowserRouter>
      </div>
  )
}

export default App
