import React from "react";
import "../styles/Contact.css";
import logo from "../assets/logo.jpg";

const Contact = () => {
  return (
    <div className="contact-page">

      {/* HEADER */}
      <section className="contact-header">
        <h1>Get in Touch</h1>
        <p>We're here to support you. Reach out to our team anytime.</p>
      </section>

      {/* CONTACT INFO + MAP */}
      <section className="contact-info-section">

        {/* INFO CARD */}
        <div className="contact-card">
          <img src={logo} alt="Company Logo" className="contact-logo" />

          <h3>Human Resource & Information System</h3>
          <p className="tagline">
            Empowering teams with modern HR solutions.
          </p>

          <div className="info-list">
            <p><strong>📍 Address:</strong> Delhi, India</p>
            <p><strong>📞 Phone:</strong> +91 98765 43210</p>
            <p><strong>📧 Email:</strong> support@mycompany.com</p>
            <p><strong>🕒 Working Hours:</strong> Mon–Fri, 9:00 AM – 6:00 PM</p>
          </div>
        </div>

        {/* MAP */}
        <div className="contact-map">
          <iframe
            title="Google Map"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "16px" }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3504.7208577619535!2d77.2489735!3d28.5481089!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c5169e0e05%3A0xcd70c7b07c55f036!2sHemkunt%20Chambers!5e0!3m2!1sen!2sin!4v1765370312140!5m2!1sen!2sin">
          </iframe>
        </div>

      </section>

      {/* CONTACT FORM */}
      <section className="contact-form-section">
        <h2>Send Us a Message</h2>

        <form className="contact-form">
          <div className="form-row">
            <div className="form-input-block">
              <label>Name</label>
              <input type="text" placeholder="Your name" />
              
            </div>
            <br />

            <div className="form-input-block">
              <label>Email</label>
              <input type="email" placeholder="your@email.com" />
            </div>
          </div>

          <label>Subject</label>
          <input type="text" placeholder="How can we help you?" />

          <label>Message</label>
          <textarea placeholder="Write your message here..."></textarea>

          <button className="send-btn">Send Message</button>
        </form>
      </section>

    </div>
  );
};

export default Contact;
