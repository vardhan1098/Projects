import React, { useState, useRef } from "react";
import "../styles/Contact.css";
import { motion } from "framer-motion";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io";
import { IoLogoTiktok } from "react-icons/io5";
import emailjs from '@emailjs/browser';

function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "" });
  const { name, email, subject } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const nameRegex = /^[A-Za-z ]+$/; // Must be at least one letter
  if (!nameRegex.test(name)) {
    alert("Please enter a valid name (letters and spaces only).");
    return;
  }

  // Validate email: basic check for email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return; 
  }

  // Validate subject: ensure it's not empty
  if (subject.trim() === "") {
    alert("Please enter a message or subject.");
    return;
  }
    // Send the form using emailjs with the form reference
    emailjs
      .sendForm('service_oli2v9e', 'template_aml551h', formRef.current, 'TSOuuq35rcJb88qko')
      .then(
        () => {
          console.log('SUCCESS!');
          setForm({ name: "", email: "", subject: "" });  // Clear form after success
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="contact-section">
      <h3 className="contact-title">
        Contact <span className="highlight">Me</span>
      </h3>
      <div className="contact-container">
        {/* Left Side */}
        <motion.div
          className="contact-left"
          initial={{ x: -850 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5, type: "tween" }}
        >
          <h3 className="contact-subtitle">Get In Touch Easily</h3>
          <h4 className="contact-email">sasivardhanreddymettu@gmail.com</h4>
          <div className="social-icons">
            <IoLogoInstagram size="40px" className="icon insta" />
            <IoLogoTwitter size="40px" className="icon twitter" />
            <IoLogoFacebook size="40px" className="icon facebook" />
            <IoLogoTiktok size="40px" className="icon tiktok" />
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ x: 850 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5, type: 'tween' }}
          className="contact-right"
        >
          <form ref={formRef} onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              name="name"
              required
              onChange={handleChange}
              className="contact-input name"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              required
              name="email"
              onChange={handleChange}
              className="contact-input email"
            />
            <textarea
              className="contact-textarea"
              minLength="10"
              value={subject}
              required
              name="subject"
              onChange={handleChange}
              placeholder="Write about your project. I would love to work with you."
            ></textarea>
            <button type="submit" className="btn-submit">Submit</button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
