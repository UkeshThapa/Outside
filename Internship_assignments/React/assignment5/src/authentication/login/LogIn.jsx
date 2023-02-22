import React, { useState } from "react";
import "./LogIn.scss";
import logo from '../../assets/sidebar_logo.png'
import {FaEyeSlash,FaEye} from "react-icons/fa";
import { Link,useNavigate } from "react-router-dom";
import useUsers from "../../hooks/useUser";
import axios from "axios";


const LogIn = () => {
  const navigateToDashboard = useNavigate()
  const [loginFail,setLoginFail] = useState(false)
  const {users,errorMessage,userStatus,addUser} = useUsers()
  const [logInDetail,setLogInDetail] = useState({
    email : "",
    password : "",
    rememberMe : false
  })


  const [passwordDisplay,setPasswordDisplay] = useState({
    icon : <FaEyeSlash/>,
    passwordType : 'password'
  })



  const handleInputChange =(e)=>{
    setLogInDetail(prev=>({
      ...prev,
      [e.target.name] : e.target.name==="rememberMe"?!prev.rememberMe:e.target.value
    }))
  }

  const getUsers = async() =>{
    
    const userData = await axios.get(`http://localhost:3006/users?email=${logInDetail.email}&password=${logInDetail.password}`);
    
    if(userData.data.length > 0){
      navigateToDashboard("/dashboard")
    }

    else{
      setLoginFail(true)
      setTimeout(()=>{
        setLoginFail(false)
      },1000)
    }

  }


  const handleSubmitForm =(event)=>{ 
    event.preventDefault();
    console.log(logInDetail)
    getUsers()

  }

  const handlePasswordDisplayType = (event)=>{
    
    setPasswordDisplay(prev=>({
      ...prev,
      icon : passwordDisplay.passwordType ==="password"?<FaEye/>:<FaEyeSlash/>,
      passwordType:passwordDisplay.passwordType ==="password"?"text":"password"
    }))
  
  }



  return (
    <div className="login-container">
      <div className="logo-container">
      <h1>{loginFail?"error: login failed" :""}</h1>
        
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
          <div className="password-input-container">
            <input
              type={passwordDisplay.passwordType}
              name="password"
              id="password-input"
              autoComplete="off" 
              placeholder="Password"   
              value={logInDetail.password}
              onChange = {handleInputChange}
            />
            <span id="display-password" onClick={handlePasswordDisplayType}>{passwordDisplay.icon}</span>
          </div>
        </div>
        <div className="rememberMe-container">
            <input type="checkbox" name="rememberMe" id="rememberMe-input" onChange={handleInputChange}/>
            <label htmlFor="rememberMe-label" id="rememberMe-label">Remember Me</label>
        </div>
        <button type="submit" id="login-button">Login</button>
        <div className="signup-page-container">
          <p>Don’t have an account? 
            <Link id="signup-page-redirect" to={'/signup'}> Sign up</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
