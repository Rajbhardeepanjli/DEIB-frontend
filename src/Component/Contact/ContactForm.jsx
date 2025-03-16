import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [activeForm, setActiveForm] = useState("general");

  return (
    <div className="form-container">
      {/* Divider Line */}
      <hr className="divider1" />

      {/* Title */}
      <h1 className="form-title">SEND A MESSAGE</h1>

      {/* Toggle Buttons */}
      <div className="toggle-buttons">
        <button
          className={`toggle-btn ${activeForm === "general" ? "active" : ""}`}
          onClick={() => setActiveForm("general")}
        >
          General Enquiries
        </button>
        <button
          className={`toggle-btn ${activeForm === "volunteer" ? "active" : ""}`}
          onClick={() => setActiveForm("volunteer")}
        >
          Volunteers
        </button>
      </div>

      {/* Form */}
      {activeForm === "general" ? (
        <form className="form">
          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="fullname" className="form-label">
              Full name
            </label>
            <input
              type="text"
              id="fullname"
              placeholder="Full name"
              className="form-input"
            />
          </div>

          {/* Email Address */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="form-input"
              required
            />
          </div>

          {/* Contact Number */}
          <div className="form-group">
            <label htmlFor="company" className="form-label">
              Contact number
            </label>
            <input
              type="number"
              id="company"
              placeholder="Contact number"
              className="form-input"
            />
          </div>

          {/* Message */}
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message here..."
              className="form-textarea"
              rows="5"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      ) : (
        <form className="form">
          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="volunteerName" className="form-label">
              Full name
            </label>
            <input
              type="text"
              id="volunteerName"
              placeholder="Full name"
              className="form-input"
            />
          </div>

          {/* Email Address */}
          <div className="form-group">
            <label htmlFor="volunteerEmail" className="form-label">
              Email Address <span className="required">*</span>
            </label>
            <input
              type="email"
              id="volunteerEmail"
              placeholder="Email Address"
              className="form-input"
              required
            />
          </div>

          {/* Contact Number */}
          <div className="form-group">
            <label htmlFor="volunteerContact" className="form-label">
              Contact number
            </label>
            <input
              type="number"
              id="volunteerContact"
              placeholder="Contact number"
              className="form-input"
            />
          </div>

          {/* Area of Interest */}
          <div className="form-group">
            <label htmlFor="areaOfInterest" className="form-label">
              Area of Interest
            </label>
            <input
              type="text"
              id="areaOfInterest"
              placeholder="Area of Interest"
              className="form-input"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
