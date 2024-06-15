import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './EventsNews.css';

const events = [
  {
    id: 1,
    title: 'Turtle Conservation Webinar',
    date: '2024-07-01',
    description: 'Join us for a webinar on turtle conservation efforts and how you can contribute.',
  },
  {
    id: 2,
    title: 'Community Turtle Walk',
    date: '2024-08-15',
    description: 'A fun and educational walk through the local park to learn about native turtle species.',
  },
  {
    id: 3,
    title: 'Turtle Care Workshop',
    date: '2024-09-10',
    description: 'A hands-on workshop on best practices for turtle care, including feeding and habitat setup.',
  },
];

const EventsNews = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="events-container">
          <section className="content-section">
            <h2>Events & News</h2>
            <div className="events-list">
              {events.map(event => (
                <div key={event.id} className="event-card">
                  <h3>{event.title}</h3>
                  <p><strong>Date:</strong> {event.date}</p>
                  <p>{event.description}</p>
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

export default EventsNews;
