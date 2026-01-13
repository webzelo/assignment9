import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './HeroSection.css';
 
// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            'background-image':
              'url(https://images.unsplash.com/photo-1551970634-747846a548cb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Create Your Perfect Green Sanctuary
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Bringing Nature to Your Home
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Explore our curated collection of indoor plants that elevate your home decor and improve air quality. Discover plants that thrive in your space and create a peaceful, vibrant environment.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Breathe Life Into Your Space
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Air-Purifying Plants for Every Home
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Our handpicked selection of indoor plants not only beautifies your space but also cleanses the air, offering a healthier, more relaxed living atmosphere. Find the perfect plant for your home today.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Nurture Your Green Thumb
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Expert Plant Care for Beginners
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Whether you’re a seasoned plant lover or a beginner, our expert tips and easy-to-care-for plants will guide you on your journey to creating the perfect indoor garden. Start growing today!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
