import React from "react";
import errorPage from "../../assets/404.png";
import "./ErrorPage.scss";

const ErrorPage = () => {
  return (
    <div className="error-page-container">
      <figure>
        <img src={errorPage} alt="" />
      </figure>
    </div>
  );
};

export default ErrorPage;
