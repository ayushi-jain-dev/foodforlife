import React from "react";
import "../contact/contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <h1 className="heading">Contact Us</h1>
        <div id="contact-box">
          <form action="">
            <div className="form-group">
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Email: </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter your Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number: </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message: </label>
              <textarea
                name="message"
                id="message"
                cols="50"
                rows="10"
                placeholder="Enter your Specifications"
              ></textarea>
            </div>
            <button className="btn">Submit</button>
          </form>
        </div>
        <footer>
          <div className="center">
            Copyright &copy; www.lavishing.com. All rights reserved
          </div>
        </footer>
      </div>
    </>
  );
};

export default Contact;
