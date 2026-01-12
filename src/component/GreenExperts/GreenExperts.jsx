// src/components/GreenExperts/GreenExperts.jsx
import React from 'react';
import './GreenExperts.css'; // Add some CSS styling in the next step

const experts = [
  {
    id: 1,
    name: "John Doe",
    specialization: "Indoor Plants",
    image: "https://media.licdn.com/dms/image/v2/D5622AQHrsAl_tLJoJw/feedshare-shrink_480/feedshare-shrink_480/0/1708797685775?e=1769644800&v=beta&t=XaZaUSVX220Hjndnk_Gf3phS2rMM7viKGRo2l-CMjw8",
  },
  {
    id: 2,
    name: "Jane Smith",
    specialization: "Succulents",
    image: "https://media.licdn.com/dms/image/v2/C5603AQGTqhaVdKGnnw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1636153161225?e=1769644800&v=beta&t=1rZowdFBQkfuwurL_qIgu3SNBOTTRwiucyPrqkQqlHM",
  },
  {
    id: 3,
    name: "Alice Green",
    specialization: "Air Purifiers",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQGpaYzzRfC-rQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1686921999340?e=1769644800&v=beta&t=klqlA0uj5-TPGIkd2hmGlkHc9YE0YnpB5TK4xofSyM0",
  },
  {
    id: 4,
    name: "Mark Plant",
    specialization: "Cacti & Succulents",
    image: "https://media.licdn.com/dms/image/v2/D5603AQH42B9Xy_sF-Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1710978254473?e=1769644800&v=beta&t=akljGxgiDpAFREGG27s75HOUMLqa3uM7Tesl2R2i03k",
  },
];

const GreenExperts = () => {
  return (
    <section className="green-experts">
      <h2>🌿 Meet Our Green Experts</h2>
      <div className="experts-grid">
        {experts.map((expert) => (
          <div key={expert.id} className="expert-card">
            <img src={expert.image} alt={expert.name} />
            <h3>{expert.name}</h3>
            <p>{expert.specialization}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GreenExperts;
