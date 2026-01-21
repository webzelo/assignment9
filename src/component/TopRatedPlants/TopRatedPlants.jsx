import React, { useState, useEffect } from 'react';
import './TopRatedPlants.css';
import { NavLink } from 'react-router';

const TopRatedPlants = () => {
  
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await fetch('/plants.json'); 
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        setPlants(data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchPlants();
  }, []); 

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <section className="top-rated-plants">
      <h2 className="section-title">🌿 Top Rated Indoor Plants
</h2>
      <div className="plants-cards">
        {plants.map((plant) => (
          <div key={plant.id} className="plant-card">
            <img src={plant.image} alt={plant.plantName} />
            <h3>{plant.plantName}</h3>
            <p>{plant.category}</p>
            <p>${plant.price}</p>
            <p>Rating: {plant.rating}</p>
            
            <div className="mt-2"><NavLink className="view-details" to={`/PlantDetailsPage/${plant.plantId}`}>View Details</NavLink></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRatedPlants;
