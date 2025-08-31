"use client"; // Add this directive at the top

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    subject: '',
    message: '',
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://ashique.webperfection.in/form-process.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone_number: '',
          subject: '',
          message: '',
        });
      } else {
        setError(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError(true);
    }
  };

  return (
    <section id="contact" className="contact-area pt-95 pb-130 rpt-70 rpb-100 rel z-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="contact-content-part pt-5 rpt-0 rmb-55 wow fadeInUp delay-0-2s">
              <div className="section-title mb-40">
                <span className="sub-title mb-15">Get In Touch</span>
                <h2>
                  Let’s <span>Connect</span>
                </h2>
                <p>
                  Let's connect and explore new opportunities together.
                </p>
              </div>
              <h6>Personal Info</h6>
              <div className="widget_contact_info mb-35">
                <ul>
                  <li>
                    <i className="far fa-map-marker-alt" /> 45/55 Turab Ali Ka Purwa, Fatehpur,<br /> Uttar Pradesh
                  </li>
                  <li>
                    <i className="far fa-envelope" />
                    <a href="mailto:moashiq2018@gmail.com">moashiq2018@gmail.com</a>
                  </li>
                  <li>
                    <i className="far fa-phone" />
                    <a href="callto:+91 7084017971">+91 70-8401-7971</a>
                  </li>
                </ul>
              </div>
              <h5>Follow Me</h5>
              <div className="social-style-one mt-10">
                <a href="https://github.com/mohdashiq18" target="_blank">
                  <i className="fab fa-github" />
                </a>
                <a href="https://www.linkedin.com/in/ashique18/" target="_blank">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="https://x.com/moashiq18" target="_blank">
                  <i className="fab fa-twitter" />
                </a>
                <a href="https://www.instagram.com/ashiq_.ali_?igsh=ZTh0YmJ1dXZpODZj" target="_blank">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="contact-form contact-form-wrap form-style-one wow fadeInUp delay-0-4s">
              <form id="contactForm" className="contactForm" name="contactForm" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        required=""
                      />
                      <label htmlFor="name" className="for-icon">
                        <i className="far fa-user" />
                      </label>
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">    
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@gmail.com"
                        required=""
                      />
                      <label htmlFor="email" className="for-icon">
                        <i className="far fa-envelope" />
                      </label>
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="phone_number">Phone Number</label>
                      <input
                        type="text"
                        id="phone_number"
                        name="phone_number"
                        className="form-control"
                        value={formData.phone_number}
                        onChange={handleChange}
                        placeholder="+91 70-8401-7971"
                        required=""
                      />
                      <label htmlFor="phone_number" className="for-icon">
                        <i className="far fa-phone" />
                      </label>
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        required=""
                      />
                      <label htmlFor="subject" className="for-icon">
                        <i className="far fa-text" />
                      </label>
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="write message"
                        required=""
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <button type="submit" className="theme-btn">
                        Send Us Message <i className="far fa-angle-right" />
                      </button>
                      <div id="msgSubmit" className="hidden" />
                    </div>
                  </div>
                </div>
              </form>
              {success && <p>Message sent successfully!</p>}
              {error && <p>Failed to send message. Please try again later.</p>}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};

export default Contact;
