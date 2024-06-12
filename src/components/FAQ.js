/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './style.css';
import Header from './Header';
import Sidebar from './Sidebar';

function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [faqs, setFaqs] = useState([
    {
      question: "What do turtles eat?",
      answer: "Turtles can eat a variety of foods, including vegetables, fruits, and protein sources."
    },
    {
      question: "How often should I clean my turtle's tank?",
      answer: "You should clean your turtle's tank at least once a week, and do partial water changes more frequently."
    },
    {
      question: "Do turtles need a heat lamp?",
      answer: "Yes, most turtles need a heat lamp to regulate their body temperature and stay healthy."
    },
  ]);

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="faq-container">
          <section className="content-section">
            <h2>Frequently Asked Questions</h2>
            <input
              type="text"
              className="faq-search"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="faq-list">
              {filteredFaqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
      <footer>
        <p>Copyright © 2024 Turtle Care Sharing</p>
      </footer>
    </div>
  );
}

export default FAQ;
