import React, { useState } from 'react';
import './style.css';
import Header from './Header';
import Sidebar from './Sidebar';

function Feeding() {
  const [selectedType, setSelectedType] = useState('all');
  const [age, setAge] = useState('');
  const [species, setSpecies] = useState('');

  const foods = [
    { type: 'vegetable', name: 'Lettuce', species: ['Red-Eared Slider', 'Painted Turtle'] },
    { type: 'fruit', name: 'Strawberry', species: ['Red-Eared Slider'] },
    { type: 'protein', name: 'Worms', species: ['African Sideneck Turtle', 'Box Turtle'] },
    { type: 'pellets', name: 'Turtle Pellets', species: ['Red-Eared Slider', 'Painted Turtle', 'Box Turtle'] },
  ];

  const filteredFoods = selectedType === 'all' ? foods : foods.filter(food => food.type === selectedType);

  const generateFeedingPlan = () => {
    if (!species || !age) {
      alert('Please select a species and age.');
      return;
    }

    // Generate a simple feeding plan based on species and age
    const plan = foods
      .filter(food => food.species.includes(species))
      .map(food => `${food.name}: ${Math.floor(Math.random() * 10 + 1)}g`);

    alert(`Feeding Plan for ${species} (Age: ${age}):\n${plan.join('\n')}`);
  };

  return (
    <div>
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="feeding-container">
          <section className="content-section">
            <h2>Food Types</h2>
            <div className="food-filter">
              <label>
                <input
                  type="radio"
                  name="foodType"
                  value="all"
                  checked={selectedType === 'all'}
                  onChange={() => setSelectedType('all')}
                />
                All
              </label>
              <label>
                <input
                  type="radio"
                  name="foodType"
                  value="vegetable"
                  checked={selectedType === 'vegetable'}
                  onChange={() => setSelectedType('vegetable')}
                />
                Vegetables
              </label>
              <label>
                <input
                  type="radio"
                  name="foodType"
                  value="fruit"
                  checked={selectedType === 'fruit'}
                  onChange={() => setSelectedType('fruit')}
                />
                Fruits
              </label>
              <label>
                <input
                  type="radio"
                  name="foodType"
                  value="protein"
                  checked={selectedType === 'protein'}
                  onChange={() => setSelectedType('protein')}
                />
                Protein
              </label>
              <label>
                <input
                  type="radio"
                  name="foodType"
                  value="pellets"
                  checked={selectedType === 'pellets'}
                  onChange={() => setSelectedType('pellets')}
                />
                Pellets
              </label>
            </div>
            <div className="food-list">
              {filteredFoods.map((food, index) => (
                <div key={index} className="food-item">
                  {food.name}
                </div>
              ))}
            </div>
          </section>
          <section className="content-section">
            <h2>Feeding Plan Generator</h2>
            <div className="feeding-plan-generator">
              <label>
                Species:
                <input
                  type="text"
                  value={species}
                  onChange={(e) => setSpecies(e.target.value)}
                  placeholder="Enter turtle species"
                />
              </label>
              <label>
                Age (in years):
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Enter turtle age"
                />
              </label>
              <button onClick={generateFeedingPlan}>Generate Feeding Plan</button>
            </div>
          </section>
          <section className="content-section">
            <h2>Daily Intake</h2>
            <div className="intake-progress">
              <label>
                Protein:
                <progress value="70" max="100"></progress>
              </label>
              <label>
                Vegetables:
                <progress value="50" max="100"></progress>
              </label>
              <label>
                Fruits:
                <progress value="30" max="100"></progress>
              </label>
              <label>
                Pellets:
                <progress value="90" max="100"></progress>
              </label>
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

export default Feeding;
