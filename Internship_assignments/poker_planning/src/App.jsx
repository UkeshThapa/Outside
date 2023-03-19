import React, { createContext,useState } from "react";
import "./App.scss";
import { ToastContainer } from "react-toastify";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./component/authentication/LogIn";
import ErrorPage from "./component/404/ErrorPage";
import SignUp from "./component/authentication/SignUp";
import Dashboard from "./component/dashboard/Dashboard";
import AddSession from "./component/dashboard/createSession/AddSession";
import Home from "./component/dashboard/home/Home";
import { Outlet } from "react-router-dom";
import Navbar from "./component/dashboard/Navbar/Navbar";
import {useParams,useNavigate } from "react-router-dom";
import TableContainer from "./component/dashboard/sessionTable/TableContainer";


export const storyContext  = createContext();
export const toggleContext  = createContext();

function App() {
  
  const [storyId,setStoryId] = useState(null)
  const [toggle,setToggle] = useState(false)

  console.log(toggle)

  
  return (
    <toggleContext.Provider value={[toggle,setToggle]}>
      <storyContext.Provider value={[storyId,setStoryId]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard/>}>
              <Route path="createsession" element={<AddSession />}></Route>
              <Route path="session" element={<TableContainer/>}></Route>
              <Route path="session/:id" element={<Home/>}></Route>
            </Route>
            <Route
              path="/login"
              element={
                <div className="authentication">
                  <LogIn />
                </div>
              } 
            ></Route>
            <Route
              path="/signup"
              element={
                <div className="authentication">
                  <SignUp />
                </div>
              }
            ></Route>

            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
        </BrowserRouter>
      </storyContext.Provider>
    </toggleContext.Provider>
  );
}

export default App;
