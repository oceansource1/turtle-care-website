import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './style.css';

function Article3() {
  return (
    <div>
      <Header />
      <div className="main-content">
        <Sidebar />
        <main>
          <div className="article-content">
            <div className="content-box">
              <h2>Yellow-margined Box Turtle</h2>
              <p>The Yellow-margined Box Turtle, also known as the Chinese Box Turtle, lives in forests and grasslands in southern China. They are omnivorous, primarily feeding on fruits, vegetables, and small insects.</p>
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

export default Article3;
