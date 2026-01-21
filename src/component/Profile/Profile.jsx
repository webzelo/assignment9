import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext'; 
import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init'; 
import './Profile.css'; 

const Profile = () => {
  const { user, loading } = useContext(AuthContext); 
  const [name, setName] = useState(user?.displayName || ''); 
  const [photo, setPhoto] = useState(user?.photoURL || ''); 
  const [loadingUpdate, setLoadingUpdate] = useState(false); 

  
  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setLoadingUpdate(true);
    
    try {
     
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
      setLoadingUpdate(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      setLoadingUpdate(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>; 
  }
console.log(user)
  return (
    <div className="profile-container">
      <h2>Your Profile</h2>
      <div className="profile-details">
        {/* User photo */}
        <div className="profile-photo">
          <img src={user?.photoURL || "https://i.ibb.co.com/0VsgFt90/Raisul-Islam-Nihad-Linkedin-Profile-Photo.jpg"} alt="Profile" />
        </div>
        <div className="profile-info">
          <p><strong>Name:</strong> {user?.displayName || 'N/A'}</p>
          <p><strong>Email:</strong> {user?.email || 'N/A'}</p>
        </div>
      </div>
      <h3>Update Profile</h3>
      <form onSubmit={handleProfileUpdate} className="update-profile-form">
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter your name" 
        />
        <label htmlFor="photo">Photo URL</label>
        <input 
          type="text" 
          id="photo" 
          value={photo} 
          onChange={(e) => setPhoto(e.target.value)} 
          placeholder="Enter your photo URL" 
        />
        <button type="submit" disabled={loadingUpdate}>
          {loadingUpdate ? 'Updating...' : 'Update Profile'}
        </button>
      </form>
    </div>
  );
};

export default Profile;
