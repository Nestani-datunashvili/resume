import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <h3>Experience</h3>
      <div className="experience-content">
        <div className="experience-content-years">
          <span className="experience-title">Google</span>
          <span className="year">2013-2014</span>
        </div>

        <div className="experience-content-text">
          <h4>Front-end developer / php programmer</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringil
          </p>
        </div>
      </div>

      <div className="experience-content">
        <div className="experience-content-years">
          <span className="experience-title">Twitter</span>
          <span className="year">2012</span>
        </div>

        <div className="experience-content-text">
          <h4>Web Developer</h4>
          <p>
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
            tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
            ac, enim
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
