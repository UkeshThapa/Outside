import React from 'react';
import './App.scss';
import { ToastContainer } from "react-toastify";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn  from './component/authentication/LogIn'
import ErrorPage from './component/404/ErrorPage';
import SignUp from './component/authentication/SignUp';
import Dashboard from './component/dashboard/Dashboard';


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route
        path='/'
        element ={<Dashboard/>}
      >
      </Route>
      <Route
        path='/login'
        element = {
          <div className='authentication'>
            <LogIn/>
          </div>
              
        }
      >
      </Route>
      <Route
        path='/signup'
        element = {
          <div className='authentication'>
            <SignUp/>
          </div>
              
        }
      >
      </Route>
      <Route path="*" element={<ErrorPage/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
