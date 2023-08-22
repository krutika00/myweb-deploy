import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Import your CSS file

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      setError('Please enter both username and password.');
    } else {
      setError('');
      // Handle login logic here
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <label className="input-label">Username</label>
        <input
          className="input-field"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label className="input-label">Password</label>
        <input
          className="input-field"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        {error && <p className="error-message">{error}</p>}
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
        <p className="registration-link">
          New user? <Link to="/login/registration">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
