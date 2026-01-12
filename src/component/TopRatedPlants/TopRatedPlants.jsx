// import React, { use, useState } from 'react';
// import { AuthContext } from '../contexts/AuthContext/AuthContext';

// const TopRatedPlants = () => {
//     const plantsdata = use (AuthContext)
//     console.log(plantsdata)
//     return (
//         <div>
//             <h2>TopRatedPlants</h2>
//         </div>
//     );
// };

// export default TopRatedPlants;

// src/components/TopRatedPlants/TopRatedPlants.jsx
import React, { useState, useEffect } from 'react';
import './TopRatedPlants.css';

const TopRatedPlants = () => {
  // State for storing plants data and loading state
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch plants data when component mounts
  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await fetch('/plants.json'); // Fetch data from the JSON file
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        setPlants(data); // Set plants data in state
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Stop loading after data is fetched
      }
    };

    fetchPlants();
  }, []); // Empty dependency array means this runs only once on mount

  if (loading) {
    return <div>Loading...</div>; // Show loading message while fetching
  }

  return (
    <section className="top-rated-plants">
      <h2>Top Rated Indoor Plants</h2>
      <div className="plants-cards">
        {plants.map((plant) => (
          <div key={plant.id} className="plant-card">
            <img src={plant.image} alt={plant.plantName} />
            <h3>{plant.plantName}</h3>
            <p>{plant.category}</p>
            <p>${plant.price}</p>
            <p>Rating: {plant.rating}</p>
            <button className="view-details">View Details</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRatedPlants;
