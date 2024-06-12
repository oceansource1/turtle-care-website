import React, { useState } from 'react';
import './style.css';
import Header from './Header';
import Sidebar from './Sidebar';

const turtleSpecies = [
  {
    id: 1,
    name: 'Chinese Striped-neck Turtle',
    habitat: 'Warm, shallow water environments',
    size: '11 inches',
    description: 'The Chinese Striped-neck Turtle is named for the stripes on its neck. They are primarily found in southern China and prefer to live in warm, shallow water environments.',
    image: '/images/hua.jpeg',
  },
  {
    id: 2,
    name: 'Yellow-margined Box Turtle',
    habitat: 'Forest edges and moist grasslands',
    size: '10 inches',
    description: 'The Yellow-margined Box Turtle is named for the yellow stripes along the edges of its shell. They are found in southeastern China and prefer to live on forest edges and moist grasslands.',
    image: '/images/yuan.jpeg',
  },
  {
    id: 3,
    name: 'Yellow Pond Turtle',
    habitat: 'Shallow ponds and slow-moving rivers',
    size: '11 inches',
    description: 'The Yellow Pond Turtle is a freshwater turtle endemic to China. They are characterized by yellow spots on their throats and usually live in shallow ponds and slow-moving rivers.',
    image: '/images/qing.jpeg',
  },
  {
    id: 4,
    name: 'Big-headed Turtle',
    habitat: 'Clear streams and waterfalls',
    size: '9 inches',
    description: 'The Big-headed Turtle is named for its distinctive large head and hooked upper jaw. They mainly inhabit clear streams and waterfalls in the mountainous regions of southern China. ',
    image: '/images/ying.jpg',
  },
];

function Species() {
  const [selectedSpecies, setSelectedSpecies] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSelectSpecies = (species) => {
    setSelectedSpecies(species);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredSpecies = turtleSpecies.filter(species =>
    species.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="species-container">
          <section className="content-section">
            <h2>Turtle Species</h2>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search for a species"
              className="search-input"
            />
            <div className="species-list">
              {filteredSpecies.map(species => (
                <div key={species.id} className="species-card" onClick={() => handleSelectSpecies(species)}>
                  <img src={species.image} alt={species.name} className="species-image" />
                  <h3>{species.name}</h3>
                </div>
              ))}
            </div>
          </section>
          {selectedSpecies && (
            <section className="content-section">
              <h2>{selectedSpecies.name}</h2>
              <img src={selectedSpecies.image} alt={selectedSpecies.name} className="selected-species-image" />
              <p><strong>Habitat:</strong> {selectedSpecies.habitat}</p>
              <p><strong>Size:</strong> {selectedSpecies.size}</p>
              <p>{selectedSpecies.description}</p>
            </section>
          )}
        </main>
      </div>
      <footer>
        <p>Copyright © 2024 Turtle Care Sharing</p>
      </footer>
    </div>
  );
}

export default Species;
