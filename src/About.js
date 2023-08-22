import React from 'react'
import './components/About.css';

import { Link } from 'react-router-dom'



function About() {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <ul>
        <li >
            <Link to ='/about/abouthistory'>About History</Link>
        </li>
        <li>
        <Link to ='/about/aboutteam'>aboutteam</Link>
        </li>
        <li>
        <Link to ='/about/aboutapplication'>About application</Link>
        </li>
      </ul>
      <img src="/logo12.jpg" alt="About Us" className="about-image" />
      
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis purus vitae urna
        hendrerit, eu venenatis ligula tincidunt. Proin euismod dolor quis purus sollicitudin, non
        malesuada libero volutpat.
      </p>
      <p>
        Nullam vestibulum sapien eu dui vestibulum venenatis. Duis vehicula metus quis turpis
        dignissim, at rhoncus ante viverra.
      </p>
    </div>
  );
}

export default About