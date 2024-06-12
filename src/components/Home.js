import React, { useEffect, useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

function Home() {
  const [turtles, setTurtles] = useState([]);

  useEffect(() => {
    fetch('/turtles.json')
      .then(response => response.json())
      .then(data => setTurtles(data));
  }, []);

  return (
    <div>
      <Header /> {/* 导航栏 */}
      <div className="main-content">
        <Sidebar /> {/* 侧边栏 */}
        <main>
          <div className="home-content-wrapper"> {/* 新增大框 */}
            <section>
              <h2>Why Keep Turtles?</h2>
              <p>
                Keeping turtles offers numerous joys and benefits. Turtles are among the most long-lived pets,
                bringing a sense of calm and delight to your life for many years.
              </p>
            </section>
            <section>
              <h2>Explore Turtle Species</h2>
              <div className="sku-container">
                {turtles.map(turtle => (
                  <div key={turtle.id} className="sku-box">
                    <Link to={`/species/${turtle.id}`}>
                      <img src={turtle.image} alt={turtle.name} />
                      <h3 className="turtle-name">{turtle.name}</h3>
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
      <footer>
        <p>Copyright © 2024 Turtle Care Sharing</p>
      </footer>
    </div>
  );
}

export default Home;
