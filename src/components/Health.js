import React, { useState } from 'react';
import './style.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Health() {
  const [symptoms, setSymptoms] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [weightData] = useState([
    { month: 'Jan', weight: 200 },
    { month: 'Feb', weight: 210 },
    { month: 'Mar', weight: 215 },
    { month: 'Apr', weight: 220 },
    { month: 'May', weight: 225 },
    { month: 'Jun', weight: 230 },
    { month: 'Jul', weight: 235 },
  ]);

  const [healthChecks, setHealthChecks] = useState([
    { name: 'Clear eyes', checked: false },
    { name: 'No shell cracks', checked: false },
    { name: 'Active movement', checked: false },
    { name: 'Normal eating habits', checked: false },
  ]);

  const handleSymptomChange = (e) => {
    setSymptoms(e.target.value);
  };

  const handleCheckChange = (index) => {
    const newChecks = [...healthChecks];
    newChecks[index].checked = !newChecks[index].checked;
    setHealthChecks(newChecks);
    setHealthScore(newChecks);
  };

  const setHealthScore = (checks) => {
    const score = checks.filter(check => check.checked).length * 25;
    setDiagnosis(`Health Score: ${score}%`);
  };

  const diagnose = () => {
    if (symptoms.toLowerCase().includes('eye')) {
      setDiagnosis('Possible eye infection. Consult a vet.');
    } else if (symptoms.toLowerCase().includes('shell')) {
      setDiagnosis('Possible shell rot. Ensure clean habitat and consult a vet.');
    } else {
      setDiagnosis('Unknown symptoms. Consult a vet for a detailed checkup.');
    }
  };

  const handleSubmit = () => {
    alert('Health check submitted!');
  };

  return (
    <div>
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="health-container">
          <section className="content-section large-section">
            <h2>Health Check List</h2>
            <div className="health-check-list">
              {healthChecks.map((check, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    checked={check.checked}
                    onChange={() => handleCheckChange(index)}
                  />
                  {check.name}
                </label>
              ))}
            </div>
            <button className="submit-button" onClick={handleSubmit}>Submit</button>
          </section>
          <section className="content-section large-section">
            <h2>Symptom Checker</h2>
            <div className="symptom-checker">
              <textarea
                value={symptoms}
                onChange={handleSymptomChange}
                placeholder="Enter symptoms here"
                rows="6"
              ></textarea>
              <button onClick={diagnose}>Diagnose</button>
              <p>{diagnosis}</p>
            </div>
          </section>
          <section className="content-section large-section">
            <h2>Health Metrics</h2>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={weightData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="weight" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </section>
        </main>
      </div>
      <footer>
        <p>Copyright © 2024 Turtle Care Sharing</p>
      </footer>
    </div>
  );
}

export default Health;
