import React from "react";
import "./Feedbacks.css";
import feedbackAvatar from "../Assets/feetback avatar.png";

const Feedbacks = () => {
  return (
    <div className="feedbacks" id="feedbacks">
      <h3>Feedbacks</h3>
      <div className="feedbacks-content">
        <p className="feedbacks-text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus.
        </p>
        <div className="feedbacks-avatar">
          <img src={feedbackAvatar} alt="feedbackAvatar" />
          <p>
            Martin Friman Programmer, <span> somesite.com</span>
          </p>
        </div>
      </div>

      <div className="feedbacks-content">
        <p className="feedbacks-text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus.
        </p>
        <div className="feedbacks-avatar">
          <img src={feedbackAvatar} alt="feedbackAvatar" />
          <p>
            Martin Friman Programmer, <span> somesite.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
