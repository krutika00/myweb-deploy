// Introduction.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Introduction.css';

const Introduction = () => {
  return (
    <section className="introduction">
      <h1>Welcome to Our Website!</h1>
      <p>Discover amazing features and services.</p>
      <p><Link to="/introduction/home">open website</Link></p> 
      <p className="registration-link">
          New user? <Link to="/login">Login here</Link>
        </p>
      
    </section>
  );
};

export default Introduction;
