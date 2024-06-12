import React, { useState } from 'react';
import './style.css';
import Header from './Header';
import Sidebar from './Sidebar';

function Basics() {
  const [showDiet, setShowDiet] = useState(false);
  const [showHealth, setShowHealth] = useState(false);
  const [showBehavior, setShowBehavior] = useState(false);
  const [showBreeding, setShowBreeding] = useState(false);

  return (
    <div>
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="basics-container">
          <section className="content-section">
            <h2>Basic Information</h2>
            <p>Turtles are reptiles of the order Testudines. They are characterized by a special bony or cartilaginous shell developed from their ribs and acting as a shield.</p>
            <p>Turtles require a specific environment to thrive, including appropriate temperature, humidity, and lighting.</p>
          </section>
          <section className="content-section">
            <h2
              className={`collapsible-header ${showDiet ? 'active' : ''}`}
              onClick={() => setShowDiet(!showDiet)}
            >
              Diet {showDiet ? '▼' : '▶'}
            </h2>
            {showDiet && (
              <div className="collapsible-content">
                <p>Turtles have specific dietary needs depending on their species. A balanced diet for most turtles includes vegetables, fruits, and protein sources.</p>
                <p>Avoid feeding turtles with dairy products, processed foods, or toxic plants.</p>
                <img src="images/food.jpg" alt="Turtle Diet" className="section-image" />
              </div>
            )}
          </section>
          <section className="content-section">
            <h2
              className={`collapsible-header ${showHealth ? 'active' : ''}`}
              onClick={() => setShowHealth(!showHealth)}
            >
              Health Care {showHealth ? '▼' : '▶'}
            </h2>
            {showHealth && (
              <div className="collapsible-content">
                <p>Regular health checks and a clean habitat are crucial for turtle health. Common health issues include shell rot, respiratory infections, and parasites.</p>
                <p>Ensure proper hydration and provide a UVB light source for vitamin D3 synthesis.</p>
                <div className="image-carousel">
                  <img src="images/ill1.jpg" alt="Health Care 1" className="carousel-image" />
                  <img src="images/ill2.jpg" alt="Health Care 2" className="carousel-image" />
                  <img src="images/ill3.jpg" alt="Health Care 3" className="carousel-image" />
                </div>
              </div>
            )}
          </section>
          <section className="content-section">
            <h2
              className={`collapsible-header ${showBehavior ? 'active' : ''}`}
              onClick={() => setShowBehavior(!showBehavior)}
            >
              Behavior {showBehavior ? '▼' : '▶'}
            </h2>
            {showBehavior && (
              <div className="collapsible-content">
                <p>Turtles exhibit various behaviors such as basking, burrowing, and swimming. Understanding these behaviors helps in providing better care.</p>
                <p>Be observant of any changes in behavior, as they can indicate health issues.</p>
              </div>
            )}
          </section>
          <section className="content-section">
            <h2
              className={`collapsible-header ${showBreeding ? 'active' : ''}`}
              onClick={() => setShowBreeding(!showBreeding)}
            >
              Breeding {showBreeding ? '▼' : '▶'}
            </h2>
            {showBreeding && (
              <div className="collapsible-content">
                <p>Breeding turtles requires specific conditions and care. Provide a safe nesting area and monitor the health of pregnant turtles.</p>
                <p>Proper care of hatchlings is essential for their survival and growth.</p>
              </div>
            )}
          </section>
        </main>
      </div>
      <footer>
        <p>Copyright © 2024 Turtle Care Sharing</p>
      </footer>
    </div>
  );
}

export default Basics;
