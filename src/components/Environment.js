import React, { useEffect, useRef } from 'react';
import './style.css';
import Header from './Header';
import Sidebar from './Sidebar';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function Environment() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current === null) {
      mapRef.current = L.map('map').setView([30, 120], 4);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);

      const turtleHabitats = [
        { lat: 29.0, lng: 119.0, name: 'Chinese Pond Turtle', image: '/images/cao.jpeg' }, // 浙江
        { lat: 23.5, lng: 121.0, name: 'Chinese Striped-neck Turtle', image: '/images/hua.jpeg' }, // 台湾
        { lat: 20.0, lng: 110.0, name: 'Yellow Pond Turtle', image: '/images/qing.jpeg' }, // 海南
        { lat: 23.1, lng: 113.3, name: 'Yellow-margined Box Turtle', image: '/images/yuan.jpeg' }, // 广州
        { lat: 32.0, lng: 120.5, name: 'Spiny Turtle', image: '/images/ju.jpg' }, // 江苏
        { lat: 23.0, lng: 114.5, name: 'Big-headed Turtle', image: '/images/ying.jpg' } // 江苏
      ];

      const customIcon = L.icon({
        iconUrl: '/images/pin.png',
        iconSize: [30, 40], // 调整图钉图标的大小
        iconAnchor: [15, 40], // 图标的 (x, y) 轴的中心点
        popupAnchor: [0, -40] // 弹出框相对于图标的偏移量
      });

      turtleHabitats.forEach((habitat) => {
        const marker = L.marker([habitat.lat, habitat.lng], { icon: customIcon }).addTo(mapRef.current);
        const popupContent = `
          <div>
            <h3>${habitat.name}</h3>
            <img src="${habitat.image}" alt="${habitat.name}" style="width: 100px; height: auto;" />
          </div>
        `;
        marker.bindPopup(popupContent);
      });
    }

    return () => {
      if (mapRef.current !== null) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  const mapStyles = {
    width: '100%',
    height: '400px',
    borderRadius: '10px',
    margin: '2rem 0',
  };

  const data = [
    { x: 25, y: 60 },
    { x: 28, y: 65 },
    { x: 22, y: 55 },
    { x: 30, y: 70 },
  ];

  return (
    <div>
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="environment-container">
          <section className="content-section">
            <h2>Habitat Overview</h2>
            <p>
              Turtles require a specific environment to thrive. The habitat should provide appropriate temperature, humidity, and lighting to mimic their natural surroundings.
            </p>
          </section>
          <section className="content-section">
            <h2>Interactive Map</h2>
            <div id="map" style={mapStyles}></div>
          </section>
          <section className="content-section">
            <h2>Environment Parameters</h2>
            <ScatterChart
              width={600}
              height={400}
              margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
            >
              <CartesianGrid />
              <XAxis type="number" dataKey="x" name="Temperature" unit="°C" />
              <YAxis type="number" dataKey="y" name="Humidity" unit="%" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Legend />
              <Scatter name="Turtle Environment" data={data} fill="#8884d8" />
            </ScatterChart>
          </section>
          <section className="content-section">
            <h2>Habitat Setup and Layout</h2>
            <div className="animation-container">
              <img src="images/environment.jpg" alt="Habitat Layout" className="layout-animation" />
              <p>
                Proper setup of a turtle's habitat includes ensuring a basking area, proper substrate, and clean water. The layout should allow for both swimming and resting.
              </p>
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

export default Environment;
