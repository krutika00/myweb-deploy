import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Registration.css'; // Import your CSS file

function Registaion() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegistration = () => {
    if (username.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      setError('Please fill in all fields.');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match.');
    } else {
      setError('');
      // Handle registration logic here
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-form">
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
        <label className="input-label">Confirm Password</label>
        <input
          className="input-field"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br />
        {error && <p className="error-message">{error}</p>}
        <button className="registration-button" onClick={handleRegistration}>
          Register
        </button>
        <p className="login-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Registaion;
