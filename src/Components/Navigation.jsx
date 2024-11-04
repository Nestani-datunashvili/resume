import React, { useState } from "react";
import "./Navigation.css";
import avatar from "../Assets/User avatar.png";
import skills from "../Assets/Skills.png";
import experience from "../Assets/Experience.png";
import feedbacks from "../Assets/Feedbacks.png";
import about from "../Assets/Icon about.png";
import arrow from "../Assets/arrow.png";
import edu from "../Assets/edu.png";
import portfolio from "../Assets/Portfolio.png";
import back from "../Assets/back.png";
import burger from "../Assets/Menu.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [click, setCklick] = useState(false);

  const hadleclick = () => {
    setCklick(!click);
  };

  return (
    <nav className={`navigation ${click ? "clicked" : ""}`}>
      <img
        className="burger-menu"
        src={burger}
        alt="burger-menu"
        onClick={hadleclick}
      />
      <div className="nav-content">
        <div className="img-box">
          <img src={avatar} alt="User Avatar" />
        </div>

        <h1>John Doe</h1>
      </div>
      <ul>
        <li>
          <a href="#about">
            <img src={about} alt="about icon" />
          </a>

          <a className="nav-title" href="#about">
            About me
          </a>
        </li>
        <li>
          <a href="#education">
            <img src={edu} alt="education icon" />
          </a>
          <a className="nav-title" href="#education">
            Education
          </a>
        </li>
        <li>
          <a href="#experience">
            <img src={experience} alt="experience icon" />
          </a>

          <a className="nav-title" href="#experience">
            Experience
          </a>
        </li>
        <li>
          <a href="#skills">
            <img src={skills} alt="skills icon" />
          </a>

          <a className="nav-title" href="#skills">
            Skills
          </a>
        </li>
        <li>
          <img src={portfolio} alt="postfolio icon" />
          <a href="#portfolio"></a>

          <a className="nav-title" href="#portfolio">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact">
            <img src={arrow} alt="arrow icon" />
          </a>

          <a className="nav-title" href="#contact">
            Contacts
          </a>
        </li>
        <li>
          <a href="#feedbacks">
            <img src={feedbacks} alt="feedback icon" />
          </a>

          <a className="nav-title" href="#feedbacks">
            Feedbacks
          </a>
        </li>
      </ul>
      <Link to={"/"}>
        <div className="back-box">
          <img src={back} alt="back" />
          <button className="button back">Go Back</button>
        </div>
      </Link>
    </nav>
  );
};

export default Navigation;
