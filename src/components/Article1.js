import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './style.css';

function Article1() {
  return (
    <div>
      <Header />
      <div className="main-content">
        <Sidebar />
        <main>
          <div className="article-content">
            <div className="content-box">
              <h2>Chinese Pond Turtle</h2>
              <p>The Chinese Pond Turtle, also known as the Chinese Grass Turtle, is widely distributed in rivers, lakes, and ponds in eastern and southeastern China. They are omnivorous, feeding on plants, insects, and small fish.</p>
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

export default Article1;
