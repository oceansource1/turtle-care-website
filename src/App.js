import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Article1 from './components/Article1';
import Article2 from './components/Article2';
import Article3 from './components/Article3';
import Species from './components/Species';
import Environment from './components/Environment';
import Feeding from './components/Feeding';
import Health from './components/Health';
import Basics from './components/Basics';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Register from './components/Register';
import TurtleDetail from './components/TurtleDetail';
import CommunityStories from './components/CommunityStories';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';
import MySelfIntroduction from './components/MySelfIntroduction';
import Testimonials from './components/Testimonials';
import EventsNews from './components/EventsNews';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/species" element={<Species />} />
        <Route path="/environment" element={<Environment />} />
        <Route path="/feeding" element={<Feeding />} />
        <Route path="/health" element={<Health />} />
        <Route path="/basics" element={<Basics />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login-register" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/species/:id" element={<TurtleDetail />} />
        <Route path="/communitystories" element={<CommunityStories />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/article1" element={<Article1 />} />
        <Route path="/article2" element={<Article2 />} />
        <Route path="/article3" element={<Article3 />} />
        <Route path="/myselfintroduction" element={<MySelfIntroduction />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/events-news" element={<EventsNews />} />
      </Routes>
    </Router>
  );
}

export default App;
