import React from 'react';
import './ThermalCheck.css';
import { Link } from 'react-router-dom';

function ThermalCheck() {
  return (
    <div className="thermal-check-container">
      <div className="thermal-check-content">
        <h1>Thermal Check</h1>
        <Link to="/radar-check">
          <button className="btn btn--primary btn--medium">NEXT</button>
        </Link>
      </div>
      <div className="thermal-check-window">
        {/* Replace this with the actual thermal sensor output */}
        <p>Thermal Sensor Output: [Placeholder]</p>
      </div>
    </div>
  );
}

export default ThermalCheck;
