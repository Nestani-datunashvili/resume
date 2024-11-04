import React from "react";
import "./ResumeContent.css";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Feedbacks from "./Feedbacks";

const ResumeContent = () => {
  return (
    <div className="right-content">
      <AboutMe />
      <Education />
      <Experience />
      <Skills />
      <Portfolio />
      <Contact />
      <Feedbacks />
    </div>
  );
};

export default ResumeContent;
