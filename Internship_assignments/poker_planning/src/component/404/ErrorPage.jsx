import React from 'react'
import logo from '../../assets/404.png'
import './ErrorPage.scss';
import { FaArrowLeft} from "react-icons/fa";
const ErrorPage = () => {
  return (
    <div className='error-page-container'> 
      <figure className='error-page-logo'>
        <img src={logo} alt="errorpage logo" />
      </figure>
      <div className='pageDetails'>
        <h1>Oops, We can seem to find
            the page what you are looking for.</h1>
        <p>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
      </div>
      <button className='button-error-page'><FaArrowLeft className='arrow-icon'/>Back to Home Page</button>
    </div>
  )
}

export default ErrorPage