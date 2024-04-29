import React from 'react';
import './ContactUs.css'
import email from '../Svg/mail.svg'
import location from '../Svg/location.svg'
import phone from '../Svg/phone.svg'
import facebook from '../Svg/facebook.svg'
import linkedIn from '../Svg/linkedIn.svg'
import instagram from '../Svg/instagram.svg'
import twitter from '../Svg/twitter.svg'



const ContactUs = () => {
  const sendEmail = () => {
    // Logic to send email
  };

  const reset = () => {
    // Logic to reset form
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail();
    reset();
  };

  return (
    <div className="containerForm">
      <div className="contentChat">
        <div className="contactus">Contact Us</div>
        <div className="contentChatINside">
          <p>"Welcome to HarshMeal! We're here to serve you. Feel free to reach out with any questions, comments. Simply fill out the form below, and we'll get back to you as soon as possible. Your satisfaction is our priority!"</p>
          <div className="location">
            <img src={location} alt="" height="22" />
            <span>24 Lucknow, UttarPradesh, India</span>
          </div>
          <div className="location">
            <img src={email} alt="" height="22" />
            <span>hvimal605@gmail.com</span>
          </div>
          <div className="location">
            <img src={phone} alt="" height="22" />
            <span>9528932927</span>
          </div>
          <div className="socialMedia">
            <a href="https://www.instagram.com/hvimal605?igsh=MWZ2MDBwcGZzMHM3aw=="><img src={facebook} alt="" /></a>
            <a href="https://www.instagram.com/hvimal605?igsh=MWZ2MDBwcGZzMHM3aw=="><img src={twitter} alt="" /></a>
            <a href="https://www.instagram.com/hvimal605?igsh=MWZ2MDBwcGZzMHM3aw=="><img src={linkedIn} alt="" /></a>
            <a href="https://www.instagram.com/hvimal605?igsh=MWZ2MDBwcGZzMHM3aw=="><img src={instagram} alt="" /></a>
          </div>
        </div>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="inputs">
          <input type="text" id="name" placeholder="Your Name" required />
          <input type="email" id="email" placeholder="Your Email" required />
          <input type="text" id="phone" placeholder="Your Phone no." required />
          <input type="text" id="company" placeholder="Company" required />
          <textarea id="message" placeholder="How can we help you ?"></textarea>
          <button type="submit" className="submitbtnh">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
