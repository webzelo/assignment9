import React, { useEffect, useState } from 'react';
import './PlantCareTips.css';

const PlantCareTips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/plantCareTips.json')
      .then(res => res.json())
      .then(data => {
        setTips(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching plant care tips:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center my-10">Loading plant care tips...</p>;
  }

  return (
    <section className="plant-care-section">
      <h2 className="section-title">🌿 Plant Care Tips</h2>

      <div className="tips-grid">
        {tips.map(tip => (
          <div key={tip.id} className="tip-card">
            <div className="tip-icon">{tip.icon}</div>
            <h3>{tip.title}</h3>
            <p>{tip.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlantCareTips;
