import React, { useState } from "react";
import logo from '../../assets/logo.jpg';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import "./SignUp.scss";

import { Link} from "react-router-dom";

const SignUp = () => {
  const [signUpDetails, setSignUpDetails] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordDisplay, setPasswordDisplay] = useState({
    icon: <FaEyeSlash />,
    passwordType: "password",
  });

  const [confirmPasswordDisplay, setConfirmPasswordDisplay] = useState({
    icon: <FaEyeSlash />,
    passwordType: "password",
  });

  const handleInputChange = (e) => {
    setSignUpDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmitChange = (e) => {
    e.preventDefault();
    console.log(signUpDetails);
    if (signUpDetails.password === signUpDetails.confirmPassword) {
      addUser(signUpDetails);
    }
  };

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

  const handleConfirmPasswordDisplayType = (event) => {
    setConfirmPasswordDisplay((prev) => ({
      ...prev,
      icon:
        confirmPasswordDisplay.passwordType === "password" ? (
          <FaEye />
        ) : (
          <FaEyeSlash />
        ),
      passwordType:
        confirmPasswordDisplay.passwordType === "password"
          ? "text"
          : "password",
    }));
  };

  return (
    <div className="signUp-container">
      <div className="logo-container">
        <figure className='logo-img-wrapper'>
          <img className='logo-img' src={logo} alt="logo" />
        </figure>
        <h3>Sign Up Form</h3>
      </div>
      <form action="" onSubmit={handleSubmitChange} className="form-container">
        <div className="fullname-container">
          <label htmlFor="fullName" id="fullname-label">
            FULLNAME
          </label>
          <input
            type="text"
            name="fullName"
            id="fullname-input"
            autoComplete="off"
            placeholder="Fullname"
            value={signUpDetails.fullName}
            onChange={handleInputChange}
            required = {true}
          />
        </div>

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
            value={signUpDetails.email}
            onChange={handleInputChange}
            required = {true}
          />
        </div>

        <div className="password-container">
          <label htmlFor="password" id="password-label">
            PASSWORD
          </label>
          <div className="password-input-container">
            <input
              type={passwordDisplay.passwordType}
              name="password"
              id="password-input"
              autoComplete="off"
              placeholder="Password"
              value={signUpDetails.password}
              onChange={handleInputChange}
              required = {true}
            />
            <span id="display-password" onClick={handlePasswordDisplayType}>
              {passwordDisplay.icon}
            </span>
          </div>
        </div>

        <div className="confirmpassword-container">
          <label htmlFor="password" id="confirmpassword-label">
            CONFIRM PASSWORD
          </label>
          <div className="confirmpassword-input-container">
            <input
              type={confirmPasswordDisplay.passwordType}
              name="confirmPassword"
              id="confirmpassword-input"
              autoComplete="off"
              placeholder="Confirm Password"
              value={signUpDetails.confirmPassword}
              onChange={handleInputChange}
              required = {true}
            />
            <span
              id="display-password"
              onClick={handleConfirmPasswordDisplayType}
            >
              {confirmPasswordDisplay.icon}
            </span>
          </div>
        </div>

        <button type="submit" id="signUp-button">
          Sign up
        </button>
        <div className="login-page-container">
          <p>
            Do you have an account?{" "}
            <Link to={"/login"} id="login-page-redirect">
              Log In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
