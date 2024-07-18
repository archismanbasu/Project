import React from 'react';
import './Home.css';
import { Button } from './Button';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Our Website</h1>
      <p>Our meditation analysis project combines thermal imaging, radar sensing, and visual analysis to evaluate the effectiveness of your meditation practice. Thermal imaging tracks changes in body temperature, reflecting physiological responses during meditation. Radar sensing measures subtle movements and fluctuations in breathing patterns, providing insights into your relaxation level. Visual analysis assesses posture and facial expressions, indicating focus and calmness.

By integrating these technologies, our system generates a comprehensive assessment of your meditation correctness percentage. This percentage reflects how well you align with optimal meditation techniques, such as maintaining a relaxed state, steady breathing, and proper posture. The analysis helps you understand your meditation performance and guides improvements for a more effective and fulfilling practice.

With real-time feedback and detailed reports, our project empowers you to enhance your meditation experience, achieve deeper relaxation, and cultivate mindfulness.</p>
<Button buttonStyle="btn--outline" buttonSize="btn--large" to="/thermal-check">
        TRY NOW
      </Button>
    </div>
  );
}

export default Home;
