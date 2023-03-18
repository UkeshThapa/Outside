import React from "react";
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



function App() {



  
  return (
    <>
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
    </>
  );
}

export default App;
