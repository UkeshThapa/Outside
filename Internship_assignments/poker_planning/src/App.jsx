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
import TableContainer from "./component/dashboard/sessionTable/TableContainer";
import "react-toastify/ReactToastify.min.css";



export const storyContext  = createContext();
export const statusContext  = createContext();


function App() {
  

  const [activeStoryPoint, setActiveStoryPoint] = useState([]);
  const [status, setStatus] = useState("");

  
  return (
    <statusContext.Provider value={[status, setStatus]}>
      <storyContext.Provider value={[activeStoryPoint, setActiveStoryPoint]}>
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
        <ToastContainer
        autoClose ={1000}
        hideProgressBar = {false}
        newestOnTop = {false}
        closeOnClick
        theme="light"
        />
      </storyContext.Provider>
    </statusContext.Provider>

  );
}

export default App;
