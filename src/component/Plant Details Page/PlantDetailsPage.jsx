import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router'; 
import { AuthContext } from '../contexts/AuthContext/AuthContext'; 
import './PlantDetailsPage.css';  
import { ToastContainer, toast } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';

const PlantDetailsPage = () => {
  const { user } = useContext(AuthContext); 
  const navigate = useNavigate(); 
  const { plantId } = useParams();  
  const [plant, setPlant] = useState(null);  
  const [name, setName] = useState('');  
  const [email, setEmail] = useState('');  
  const [loading, setLoading] = useState(true);  

  

  
  useEffect(() => {
    console.log('Fetching plant data for plantId:', plantId); 
    fetch('/plants.json')  
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched plant data:', data); 
        const selectedPlant = data.find((plant) => plant.plantId === parseInt(plantId)); 
        if (selectedPlant) {
          setPlant(selectedPlant);  
        } else {
          toast.error('Plant not found!');  
        }
        setLoading(false);  
      })
      .catch((error) => {
        console.error('Error fetching plant details:', error);
        toast.error('Error fetching plant details');
        setLoading(false);  
      });
  }, [plantId]);  


  if (!user) {
    navigate('/login');
    return null;
  }


 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      toast.success('Consultation booked successfully!');  
      setName('');  
      setEmail('');
    } else {
      toast.error('Please fill in both fields.');  
    }
  };

  if (loading) {
    return <div>Loading plant details...</div>;  
  }

  return (
    <div className="plant-details-container">
      <h2>Plant Details</h2>
      {plant ? (
        <div className="plant-details">
          <img src={plant.image} alt={plant.plantName} className="plant-image" />
          <div className="plant-info">
            <h3>{plant.plantName}</h3>
            <p><strong>Description:</strong> {plant.description}</p>
            <p><strong>Price:</strong> ${plant.price}</p>
            <p><strong>Rating:</strong> {plant.rating}</p>
            <p><strong>Stock:</strong> {plant.availableStock}</p>
          </div>
        </div>
      ) : (
        <div>No plant details available.</div>
      )}
      
      <h3>Book Consultation</h3>
      <form onSubmit={handleSubmit} className="consultation-form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit" className="book-button">Book Now</button>
      </form>

      <ToastContainer /> 
    </div>
  );
};

export default PlantDetailsPage;
