import React from 'react';
import './RadarCheck.css';
import { Link } from 'react-router-dom';

function RadarCheck() {
  return (
    <div className="radar-check-container">
      <div className="radar-check-content">
        <h1>Radar Check</h1>
        <Link to="/visual-check" className="btn-mobile">
          <button className="btn btn--primary btn--large">NEXT</button>
        </Link>
      </div>
      <div className="radar-check-output">
        <h2>Radar Sensor Output</h2>
        {/* Add the content or component that displays the radar sensor output here */}
      </div>
    </div>
  );
}

export default RadarCheck;
