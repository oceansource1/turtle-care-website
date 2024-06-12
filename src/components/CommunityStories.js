import React, { useState } from 'react';
import './style.css';
import Header from './Header';
import Sidebar from './Sidebar';

const initialStories = [
  {
    id: 1,
    author: 'Alice',
    title: 'My Turtle Journey',
    content: 'I started keeping turtles 5 years ago and it has been a wonderful journey...',
    likes: 10,
    comments: [
      { id: 1, author: 'Bob', content: 'Great story!' },
      { id: 2, author: 'Charlie', content: 'Thanks for sharing!' }
    ],
    date: '2024-06-01'
  },
  {
    id: 2,
    author: 'David',
    title: 'Turtle Care Tips',
    content: 'Here are some tips for taking care of your turtles...',
    likes: 5,
    comments: [],
    date: '2024-05-20'
  },
];

function CommunityStories() {
  const [stories, setStories] = useState(initialStories);
  const [newStory, setNewStory] = useState({ author: '', title: '', content: '' });
  const [sortBy, setSortBy] = useState('date');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStory({ ...newStory, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newStory.author && newStory.title && newStory.content) {
      const newStoryWithId = { ...newStory, id: stories.length + 1, likes: 0, comments: [], date: new Date().toISOString().split('T')[0] };
      setStories([newStoryWithId, ...stories]);
      setNewStory({ author: '', title: '', content: '' });
    }
  };

  const handleLike = (id) => {
    const updatedStories = stories.map(story => story.id === id ? { ...story, likes: story.likes + 1 } : story);
    setStories(updatedStories);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    const sortedStories = [...stories].sort((a, b) => {
      if (e.target.value === 'likes') {
        return b.likes - a.likes;
      } else if (e.target.value === 'comments') {
        return b.comments.length - a.comments.length;
      } else {
        return new Date(b.date) - new Date(a.date);
      }
    });
    setStories(sortedStories);
  };

  return (
    <div>
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="community-stories-container">
          <section className="content-section">
            <h2>Submit Your Story</h2>
            <form onSubmit={handleSubmit} className="story-form">
              <label>
                Author:
                <input type="text" name="author" value={newStory.author} onChange={handleInputChange} />
              </label>
              <label>
                Title:
                <input type="text" name="title" value={newStory.title} onChange={handleInputChange} />
              </label>
              <label>
                Content:
                <textarea name="content" value={newStory.content} onChange={handleInputChange} rows="4"></textarea>
              </label>
              <button type="submit">Submit</button>
            </form>
          </section>
          <section className="content-section">
            <h2>Community Stories</h2>
            <div className="story-sort">
              <label>
                Sort by:
                <select value={sortBy} onChange={handleSortChange}>
                  <option value="date">Date</option>
                  <option value="likes">Likes</option>
                  <option value="comments">Comments</option>
                </select>
              </label>
            </div>
            <div className="stories-list">
              {stories.map(story => (
                <div key={story.id} className="story-card">
                  <h3>{story.title}</h3>
                  <p><strong>Author:</strong> {story.author}</p>
                  <p>{story.content}</p>
                  <p><strong>Date:</strong> {story.date}</p>
                  <p><strong>Likes:</strong> {story.likes}</p>
                  <button onClick={() => handleLike(story.id)}>Like</button>
                  <div className="comments">
                    <h4>Comments:</h4>
                    {story.comments.map(comment => (
                      <p key={comment.id}><strong>{comment.author}:</strong> {comment.content}</p>
                    ))}
                  </div>
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

export default CommunityStories;
