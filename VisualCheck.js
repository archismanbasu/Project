import React from 'react';
import './VisualCheck.css';
import { Link } from 'react-router-dom';

function VisualCheck() {
  return (
    <div className="visual-check-container">
      <div className="visual-check-content">
        <h1>Visual Check</h1>
        <button className="btn btn--primary btn--large">START</button>
      </div>
      <div className="visual-check-output">
        <h2>Visual Check Output</h2>
        {/* Add the content or component that displays the visual check output here */}
      </div>
    </div>
  );
}

export default VisualCheck;
