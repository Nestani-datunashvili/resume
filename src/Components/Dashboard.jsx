import React from "react";
import avatar from "../Assets/User avatar.png";
import bg from "../Assets/background.png";
import "./Dashboard.css";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="dashboard-body" style={{ backgroundImage: `url(${bg})` }}>
      <div className="mask"> </div>
      <div className="main-content">
        <img src={avatar} />
        <h1>John Doe</h1>
        <h2>Programmer. Creative. Innovator</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque
        </p>
        <Link to="/resume">
          <button className="button">Know More</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
