import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import TopRatedPlants from '../TopRatedPlants/TopRatedPlants';
import PlantCareTips from '../PlantCareTips/PlantCareTips';
import GreenExperts from '../GreenExperts/GreenExperts';


const Home = () => {
    return (
        <div>
            <HeroSection />
            <TopRatedPlants />
            <PlantCareTips />
            <GreenExperts />
        </div>
    );
};

export default Home;