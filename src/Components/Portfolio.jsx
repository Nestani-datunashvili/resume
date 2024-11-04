import React from "react";
import "./Portfolio.css";
import card1 from "../Assets/card1.png";
import card2 from "../Assets/card2 .png";

const Portfolio = () => {
  return (
    <div className="portfolio-content" id="portfolio">
      <h3>Portfolio</h3>
      <div>
        <h4 className="portfolio-content-title">All / Code / UI</h4>
        <div className="portfolio-cards">
          <img src={card1} alt="card1" />
          <div className="card-text">
            <h4 className="card-text-title">Some text</h4>
            <p>
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
              arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
              justo. Nullam dictum felis eu pede mollis
            </p>
            <h4>View resource</h4>
          </div>
          <img src={card2} alt="card2" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
