import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Testimonials from './Testimonials';
import './style.css';

function AboutUs() {
  return (
    <div>
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="about-container">
          <section className="content-section">
            <h2>About Us</h2>
            <p>
              Welcome to Turtle Care Sharing! We are a community of turtle enthusiasts dedicated to providing the best care information for turtle lovers around the world.
            </p>
          </section>
          <section className="content-section">
            <h2>Our Journey</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">2021</div>
                <div className="timeline-content">I first encountered turtle keeping in college and gradually became an enthusiast.</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">2022</div>
                <div className="timeline-content">My passion for turtles inspired me to create a platform to share knowledge about turtle care.</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">2023</div>
                <div className="timeline-content">I expanded my efforts to include comprehensive guides on various turtle species, especially those native to China.</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">2024</div>
                <div className="timeline-content">I independently developed this platform to promote awareness and conservation of China's unique turtle species.</div>
              </div>
            </div>
          </section>
          <section className="content-section team-section">
            <h2>Meet My Self Introduction</h2>
            <div className="sku-container">
              <Link to="/myselfintroduction" className="sku-box">
                <img src="images/team1.jpg" alt="Yueyang" className="team-image" />
                <h3>Yueyang</h3>
                <p>Web Developer & Turtle Enthusiast</p>
              </Link>
            </div>
          </section>
          <Testimonials />
        </main>
      </div>
      <footer>
        <p>Copyright © 2024 Turtle Care Sharing</p>
      </footer>
    </div>
  );
}

export default AboutUs;
