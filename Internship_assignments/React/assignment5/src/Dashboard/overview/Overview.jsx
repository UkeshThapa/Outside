import React from "react";
import "./Overview.scss";

const Overview = () => {
  return (
    <div className="overview-container">
      <div className="card-container">
        <div className="container">
          <h1>unsolved</h1>
          <h2>60</h2>
        </div>
      </div>
      <div className="card-container">
        <div className="container">
          <h1>Overdue</h1>
          <h2>16</h2>
        </div>
      </div>
      <div className="card-container">
        <div className="container">
          <h1>Open</h1>
          <h2>43</h2>
        </div>
      </div>
      <div className="card-container">
        <div className="container">
          <h1>On hold</h1>
          <h2>64</h2>
        </div>
      </div>
    </div>
  );
};

export default Overview;
