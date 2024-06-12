import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import Header from './Header';
import Sidebar from './Sidebar';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // 这里可以添加登录逻辑
    alert(`Logged in as: ${username}`);
    navigate('/');
  };

  const handleGuestLogin = () => {
    // 访客登录逻辑
    alert('Logged in as Guest');
    navigate('/');
  };

  const handleRegister = () => {
    // 这里可以添加注册逻辑
    alert('Redirecting to Register Page');
    navigate('/register');
  };

  return (
    <div>
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="login-main">
          <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="login-button">Login</button>
            </form>
            <button onClick={handleGuestLogin} className="guest-button">Login as Guest</button>
            <button onClick={handleRegister} className="register-button">Register</button>
          </div>
        </main>
      </div>
      <footer>
        <p>Copyright © 2024 Turtle Care Sharing</p>
      </footer>
    </div>
  );
}

export default Login;
