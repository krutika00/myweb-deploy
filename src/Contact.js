import React, { useState } from 'react';
import './components/Contact.css'; // Import your CSS file

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, message });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <label className="input-label">Name</label>
          <input
            className="input-field"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label className="input-label">Email</label>
          <input
            className="input-field"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label className="input-label">Message</label>
          <textarea
            className="input-field"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <br />
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
