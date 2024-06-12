import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './style.css';

function Article2() {
  return (
    <div>
      <Header />
      <div className="main-content">
        <Sidebar />
        <main>
          <div className="article-content">
            <div className="content-box">
              <h2>Chinese Three-keeled Pond Turtle</h2>
              <p>The Chinese Three-keeled Pond Turtle, also known as the Chinese Flower Turtle, primarily inhabits streams and lakes in southern China. They prefer warm climates and feed on insects, aquatic plants, and small fish.</p>
            </div>
            <div className="comments-section">
              <h3>Comments</h3>
              <div className="comment">
                <p>User1: This is a comment.</p>
              </div>
              <div className="comment">
                <p>User2: This is another comment.</p>
              </div>
              <form className="comment-form">
                <textarea placeholder="Add a comment..." rows="4"></textarea>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Article2;
