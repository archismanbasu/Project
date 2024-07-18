import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <p>Explore the wide range of services we offer to help you achieve your wellness goals.</p>
      <h2>Posture Analysis</h2>
      <p>Posture analysis plays a crucial role in understanding the correctness of meditation style. In this project, posture analysis is achieved through the use of a visual camera connected to a Raspberry Pi. By capturing and analyzing the user's posture during meditation sessions, the system can assess alignment, balance, and overall posture correctness. </p>
      <h2>Thermal Analysis</h2>
      <p>Thermal analysis, a pivotal component of our project, involves capturing and interpreting thermal data using a thermal camera integrated with Raspberry Pi. This process allows for real-time monitoring and analysis of temperature variations across different areas of interest. By leveraging this technology, you can delve into crucial insights such as heat distribution patterns, identifying anomalies, and assessing thermal responses during meditation sessions. Integrating thermal analysis into your project not only enhances its depth but also provides valuable feedback on physiological and environmental aspects, contributing significantly to a holistic analysis of meditation effectiveness and overall well-being.</p>
      <h2>Radar Analysis</h2>
      <p>Radar analysis in our project involves the use of radio waves to detect objects' positions and movements. With Raspberry Pi handling the radar sensor, you can gather data on subtle movements and breathing patterns during meditation. This data can be crucial for assessing the quality of your meditation sessions, providing insights into your focus and relaxation levels. By combining radar analysis with thermal and posture analysis, your project offers a comprehensive view of your meditation practice, allowing you to track progress and make adjustments for optimal results.</p>
    </div>
  );
}

export default Services;
