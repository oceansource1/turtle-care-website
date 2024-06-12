import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import './style.css';

function TurtleDetail() {
  const { id } = useParams();
  const [turtle, setTurtle] = useState(null);

  useEffect(() => {
    fetch('/turtles.json')
      .then(response => response.json())
      .then(data => {
        const selectedTurtle = data.find(t => t.id === parseInt(id));
        setTurtle(selectedTurtle);
      });
  }, [id]);

  if (!turtle) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="turtle-detail-container">
          <h1>{turtle.name}</h1>
          <img src={`/${turtle.image}`} alt={turtle.name} className="turtle-image" />
          <p>{turtle.description}</p>
        </main>
      </div>
      <footer>
        <p>Copyright © 2024 Turtle Care Sharing</p>
      </footer>
    </div>
  );
}

export default TurtleDetail;
