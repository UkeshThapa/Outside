import React,{useEffect, useState} from 'react'
import './Login.scss'
import logo from '../../assets/logo.jpg';
import useUsers from '../../hook/useUser';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link} from "react-router-dom";
import {useParams,useNavigate } from "react-router-dom";



const LogIn = () => {

  const navigateToDashboard = useNavigate()

  useEffect(()=>{
    if(window.localStorage.getItem("loggedState")){
      navigateToDashboard("/session")
    }
  },[])

  const {postAction,logInStatus,setLogInStatus} = useUsers();
  // password display on text and encoded
    const [passwordDisplay, setPasswordDisplay] = useState({
      icon: <FaEyeSlash />,
      passwordType: "password",
    });

    
    // store the login details
    const [logInDetail, setLogInDetail] = useState({
      email: "",
      password: "",
      rememberMe: false,
    });
    
    
    const handlePasswordDisplayType = (event) => {
      setPasswordDisplay((prev) => ({
      ...prev,
      icon:
      passwordDisplay.passwordType === "password" ? (
        <FaEye />
        ) : (
          <FaEyeSlash />
          ),
          passwordType:
          passwordDisplay.passwordType === "password" ? "text" : "password",
        }));
      };
      
      const handleInputChange = (e) => {
        setLogInDetail((prev) => ({
          ...prev,
          [e.target.name]:
          e.target.name === "rememberMe" ? !prev.rememberMe : e.target.value,
        }));
        
      };
      

      

      const handleSubmitForm = (event) => {
        event.preventDefault();
        postAction({action:'logIn',...logInDetail});
        // console.log(logInStatus);
        // if(logInStatus){
        //   //l
        //   localStorage.setItem("loggedState",true)
        //   navigateToDashboard('/')
        //   setLogInStatus(false);
          
        // }
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <figure className='logo-img-wrapper'>
          <img className='logo-img' src={logo} alt="logo" />
        </figure>
        <h3>LOGIN FORM</h3>
        <p>Enter your email and password below</p>
      </div>
      <form action="" onSubmit={handleSubmitForm} className="form-container">
        <div className="email-container">
          <label htmlFor="email" id="email-label">
            EMAIL
          </label>
          <input
            type="email"
            name="email"
            id="email-input"
            autoComplete="off"
            placeholder="Email address"
            value={logInDetail.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="password-container">
          <div className="label-container">
            <label htmlFor="password" id="password-label">
              Password
            </label>
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
              onChange={handleInputChange}
              
            />
            <span id="display-password" onClick={handlePasswordDisplayType}>
              {passwordDisplay.icon}
            </span>
          </div>
        </div>
        <div className="rememberMe-container">
          <input
            type="checkbox"
            name="rememberMe"
            id="rememberMe-input"
          />
          <label htmlFor="rememberMe-label" id="rememberMe-label">
            Remember Me
          </label>
        </div>
        <button type="submit" id="login-button">
          Login
        </button>
        <div className="signup-page-container">
          <p>
            Don't have an account?{" "}
            <Link to={"/signup"} id="signup-page-redirect">
              SignUp
            </Link>
          </p>
        </div>
      </form>
    </div>

  )
}

export default LogIn