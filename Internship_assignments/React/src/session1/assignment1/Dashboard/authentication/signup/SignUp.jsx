import React,{useState} from "react";

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
    <div className="sign-up" onSubmit={handleSubmitChange}>
      <form action="">
        <label htmlFor="fullName">FULLNAME:</label>
        <input 
          type="text" 
          name="fullName" 
          id="fullName" 
          autoComplete="off" 
          value={signUpDetails.fullName}
          onChange ={handleInputChange}
        />
        <br />
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          name="email" 
          id="email" 
          autoComplete="off" 
          value={signUpDetails.email}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="off"
          value={signUpDetails.password}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <label htmlFor="password">CONFIRM PASSWORD:</label>
        <input
          type="password"
          name="conformPassword"
          id="conformPassword"
          autoComplete="off"
          value={signUpDetails.conformPassword}
          onChange={handleInputChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SignUp;
