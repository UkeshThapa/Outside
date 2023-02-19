import React,{useState} from "react";
import logo from '../../../../../assets/sidebar_logo.png'
import './signUp.scss'



const SignUp = () => {

  const [signUpDetails,setSignUpDetails] = useState({
    fullName : "",
    email : "",
    password : "",
    conformPassword : ""
  });

  const handleInputChange = (e) =>{
    setSignUpDetails( prev =>({
      ...prev,
      [e.target.name] : e.target.value
    }))
  }

  const handleSubmitChange = (e)=>{
    e.preventDefault()
    console.log(signUpDetails)
    
  }

  return (
    <div className="signUp-container" >
      <div className="logo-container">
        <figure>
          <img src={logo} alt="logo" />
        </figure>
        <h2>Dashboard Kit</h2>
        <h3>Sign Up to Dashboard Kit</h3>
        <p>Enter your email and password below</p>
      </div>
      <form action="" onSubmit={handleSubmitChange} className="form-container">
        <label htmlFor="fullName" id="fullname-label">FULLNAME</label>
        <input 
          type="text" 
          name="fullName" 
          id="fullName" 
          autoComplete="off"
          placeholder="Fullname" 
          value={signUpDetails.fullName}
          onChange ={handleInputChange}
        />
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          name="email" 
          id="email" 
          autoComplete="off" 
          placeholder="Email address"
          value={signUpDetails.email}
          onChange={handleInputChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="off"
          placeholder="Password"
          value={signUpDetails.password}
          onChange={handleInputChange}
        />
        <label htmlFor="password">CONFIRM PASSWORD:</label>
        <input
          type="password"
          name="conformPassword"
          id="conformPassword"
          autoComplete="off"
          placeholder="Confirm Password"
          value={signUpDetails.conformPassword}
          onChange={handleInputChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SignUp;
