import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './style.css';

function MySelfIntroduction() {
  return (
    <div>
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="introduction-container">
          <section className="content-section">
            <h2>Yueyang's Self Introduction</h2>
            <p>
              Hello! My name is Yueyang. I am a web developer and a passionate turtle enthusiast. I started this platform to share knowledge and promote awareness about turtle care, especially focusing on unique turtle species in China.
            </p>
            <p>
              Through this platform, I aim to provide comprehensive guides and support to turtle lovers worldwide. Thank you for visiting, and I hope you find the information here helpful and inspiring!
            </p>
          </section>
        </main>
      </div>
      <footer>
        <p>Copyright © 2024 Turtle Care Sharing</p>
      </footer>
    </div>
  );
}

export default MySelfIntroduction;
