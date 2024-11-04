import React from "react";
import "./Contact.css";
import skype from "../Assets/skype.png";
import phone from "../Assets/phone.png";
import fb from "../Assets/fb.png";
import mail from "../Assets/mail.png";
import twitter from "../Assets/akar-icons_twitter-fill.png";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h3 className="contact-title">Conatct</h3>
      <div>
        <div className="conatct-content">
          <img src={phone} alt="phone-icon" />
          <p className="conatct-content-title">500 342 242</p>
        </div>

        <div className="conatct-content">
          <img src={mail} alt="mail-icon" />
          <p className="conatct-content-title">office@kamsolutions.pl</p>
        </div>

        <div className="conatct-content">
          <img src={twitter} alt="twitter-icon" />
          <div>
            <p className="conatct-content-title">Twitter</p>
            <p className="conatct-content-url">https://twitter.com/wordpress</p>
          </div>
        </div>

        <div className="conatct-content">
          <img src={fb} alt="fb-icon" />
          <div>
            <p className="conatct-content-title">Facebook</p>
            <p className="conatct-content-url">
              https://www.facebook.com/facebook
            </p>
          </div>
        </div>

        <div className="conatct-content">
          <img src={skype} alt="skype-icon" />
          <div>
            <p className="conatct-content-title">Skype</p>
            <p className="conatct-content-url">kamsolutions.pl</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
