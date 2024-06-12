import React, { useState } from 'react';
import './style.css';
import Header from './Header';
import Sidebar from './Sidebar';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);

    if (value.length > 1) {
      const filteredSuggestions = names.filter((name) =>
        name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setName(suggestion);
    setShowSuggestions(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted');
  };

  const names = ['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown'];

  return (
    <div>
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="contact-container">
          <section className="content-section">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  autoComplete="off"
                />
                {showSuggestions && (
                  <ul className="suggestions">
                    {suggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </section>
        </main>
      </div>
      <footer>
        <p>Copyright © 2024 Turtle Care Sharing</p>
      </footer>
    </div>
  );
}

export default ContactUs;
