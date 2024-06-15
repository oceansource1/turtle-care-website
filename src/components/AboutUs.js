import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Testimonials from './Testimonials';
import './style.css';

function AboutUs() {
  useEffect(() => {
    const canvas = document.getElementById('turtleCanvas');
    const ctx = canvas.getContext('2d');

    // 设置Canvas的尺寸
    canvas.width = 600;
    canvas.height = 400;

    // 绘制一个更复杂的乌龟形状
    function drawTurtle() {
      // 龟的身体
      ctx.fillStyle = '#008000';
      ctx.beginPath();
      ctx.ellipse(300, 200, 150, 100, 0, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();

      // 龟的头
      ctx.fillStyle = '#006400';
      ctx.beginPath();
      ctx.arc(300, 120, 40, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();

      // 龟的眼睛
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.arc(290, 110, 5, 0, 2 * Math.PI);
      ctx.arc(310, 110, 5, 0, 2 * Math.PI);
      ctx.fill();

      // 龟的四肢
      ctx.fillStyle = '#008000';
      ctx.beginPath();
      ctx.ellipse(200, 200, 20, 40, Math.PI / 4, 0, 2 * Math.PI);
      ctx.ellipse(400, 200, 20, 40, -Math.PI / 4, 0, 2 * Math.PI);
      ctx.ellipse(230, 300, 20, 40, -Math.PI / 4, 0, 2 * Math.PI);
      ctx.ellipse(370, 300, 20, 40, Math.PI / 4, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();

      // 龟的尾巴
      ctx.fillStyle = '#006400';
      ctx.beginPath();
      ctx.moveTo(300, 300);
      ctx.lineTo(320, 340);
      ctx.lineTo(280, 340);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // 龟的壳
      ctx.strokeStyle = '#006400';
      ctx.beginPath();
      ctx.moveTo(300, 100);
      ctx.lineTo(300, 300);
      ctx.moveTo(250, 150);
      ctx.lineTo(350, 150);
      ctx.moveTo(220, 200);
      ctx.lineTo(380, 200);
      ctx.moveTo(250, 250);
      ctx.lineTo(350, 250);
      ctx.stroke();
    }

    drawTurtle();
  }, []);

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
          <section className="content-section">
            <h2>Canvas Turtle Drawing</h2>
            <canvas id="turtleCanvas"></canvas>
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
