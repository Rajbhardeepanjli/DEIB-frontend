import React, { useState } from "react";
import "./ContactForm.css";
import axios from "axios"; // Import Axios

const ContactForm = () => {
  const [activeForm, setActiveForm] = useState("general");
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    contact: "",
    message: "",
    areaOfInterest: "",
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Form Validation
  const validateForm = () => {
    let newErrors = {};
  
    if (!formData.fullname.trim()) {
      newErrors.fullname = "Full name is required.";
    } else if (formData.fullname.length < 3) {
      newErrors.fullname = "Full name must be at least 3 characters.";
    }
  
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
  
    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required.";
    } else if (!/^\d{10}$/.test(formData.contact)) {
      newErrors.contact = "Contact number must be a 10-digit number.";
    }
  
    if (activeForm === "general") {
      if (!formData.message.trim()) {
        newErrors.message = "Message is required.";
      } else if (formData.message.length < 10) {
        newErrors.message = "Message must be at least 10 characters.";
      }
    }
  
    if (activeForm === "volunteer" && !formData.areaOfInterest.trim()) {
      newErrors.areaOfInterest = "Area of Interest is required.";
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Stop submission if validation fails

    const endpoint = activeForm === "general" ? "general" : "volunteer";

    try {
      const response = await axios.post(
        `https://deib-backend-1.onrender.com/contact/${endpoint}`,
        formData
      );
      setErrors({ formSuccess: response.data.message });

      setFormData({
        fullname: "",
        email: "",
        contact: "",
        message: "",
        areaOfInterest: "",
      }); // Reset Form
    } catch (error) {
      setErrors({ formError: "Submission failed. Please try again." });
    }
  };

  return (
    <div className="form-container">
      <hr className="divider1" />
      <h1 className="form-title">SEND A MESSAGE</h1>

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

      <form className="form" onSubmit={handleSubmit}>
        {errors.formError && <p className="error-text">{errors.formError}</p>}
        {errors.formSuccess && (
          <p className="success-text">{errors.formSuccess}</p>
        )}

        <div className="form-group">
          <label htmlFor="fullname" className="form-label">
            Full name
          </label>
          <input
            type="text"
            id="fullname"
            placeholder="Full name"
            className="form-input"
            value={formData.fullname}
            onChange={handleChange}
          />
          {errors.fullname && <p className="error-text">{errors.fullname}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email Address <span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="contact" className="form-label">
            Contact number
          </label>
          <input
            type="text"
            id="contact"
            placeholder="Contact number"
            className="form-input"
            value={formData.contact}
            onChange={handleChange}
          />
          {errors.contact && <p className="error-text">{errors.contact}</p>}
        </div>

        {activeForm === "general" && (
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message here..."
              className="form-textarea"
              rows="5"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className="error-text">{errors.message}</p>}
          </div>
        )}

        {activeForm === "volunteer" && (
          <div className="form-group">
            <label htmlFor="areaOfInterest" className="form-label">
              Area of Interest
            </label>
            <input
              type="text"
              id="areaOfInterest"
              placeholder="Area of Interest"
              className="form-input"
              value={formData.areaOfInterest}
              onChange={handleChange}
            />
            {errors.areaOfInterest && (
              <p className="error-text">{errors.areaOfInterest}</p>
            )}
          </div>
        )}

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
