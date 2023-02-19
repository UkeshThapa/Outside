import React, { useState } from "react";
import "./LogIn.scss";
import logo from '../../../../../assets/sidebar_logo.png'


const LogIn = () => {
  const [logInDetail,setLogInDetail] = useState({
    email : "",
    password : "",
    rememberMe : false
  })


  const handleInputChange =(e)=>{
    setLogInDetail(prev=>({
      ...prev,
      [e.target.name] : e.target.name==="rememberMe"?!prev.rememberMe:e.target.value
    }))
  }

  const handleSubmitForm =(event)=>{ 
    event.preventDefault();
    console.log(logInDetail)
  }


  return (
    <div className="login-container">
      <div className="logo-container">
        <figure>
          <img src={logo} alt="logo" />
        </figure>
        <h2>Dashboard Kit</h2>
        <h3>Log In to Dashboard Kit</h3>
        <p>Enter your email and password below</p>
      </div>
      <form action="" onSubmit={handleSubmitForm} className="form-container">
        <div className="email-container">
          <label htmlFor="email" id="email-label">EMAIL</label>
          <input
            type="email"
            name="email"
            id="email-input"
            autoComplete="off"
            placeholder="Email address"
            value={logInDetail.email}
            onChange = {handleInputChange}
          />
        </div>
        <div className="password-container">
          <div className="label-container">
          <label htmlFor="password" id="password-label">Password</label>
          <span id="forget-password">Forget password?</span>
          </div>
          <input
            type="password"
            name="password"
            id="password-input"
            autoComplete="off" 
            placeholder="Password"   
            value={logInDetail.password}
            onChange = {handleInputChange}
          />
        </div>
        <div className="rememberMe-container">
            <input type="checkbox" name="rememberMe" id="rememberMe-input" onChange={handleInputChange}/>
            <label htmlFor="rememberMe-label" id="rememberMe-label">Remember Me</label>
        </div>
        <button type="submit" id="login-button">Login</button>
        <div className="signup-page-container">
          <p>Don’t have an account? <span id="signup-page-redirect">Sign up</span></p>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
