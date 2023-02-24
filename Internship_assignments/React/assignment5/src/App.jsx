import React, { useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import LogIn from "./authentication/login/LogIn";
import SignUp from "./authentication/signup/SignUp";
import Dashboard from "./Dashboard/Dashboard";
import ErrorPage from "./Dashboard/errorPage/ErrorPage";
import Overview from "./Dashboard/overview/Overview";
import SingleTicket from "./Dashboard/Ticket/SingleTicket/SingleTicket";
import TicketDetails from "./Dashboard/Ticket/TicketDetails";
import useTickets from "./hooks/useTickets";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";



export const searchContext = createContext();
export const ticketData = createContext();

function App() {
  const [searchKey, setSearchKey] = useState("");

  const { tickets } = useTickets();

  return (
    <ticketData.Provider value={[tickets]}>
      <searchContext.Provider value={[searchKey, setSearchKey]}>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <div className="signUp-auth-container">
                    <LogIn />
                  </div>
                }
              ></Route>
              <Route
                path="/signup"
                element={
                  <div className="signUp-auth-container">
                    <SignUp />
                  </div>
                }
              ></Route>
              <Route path="dashboard" element={<Dashboard />}>
                <Route index element={<Overview />}></Route>
                <Route path="Ticket" element={<TicketDetails />}></Route>
                <Route path="Ticket/:id" element={<SingleTicket />}></Route>
                <Route path="Overview" element={<Overview />}></Route>
              </Route>
              <Route path="*" element={<ErrorPage />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
        <ToastContainer
        autoClose ={1000}
        hideProgressBar = {false}
        newestOnTop = {false}
        closeOnClick
        theme="light"
        />
      </searchContext.Provider>
    </ticketData.Provider>
  );
}

export default App;
