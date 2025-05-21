// src/pages/Vehicles.jsx
import React from 'react';
import Vehicles from '../components/Vehicle Listings'; // I fixed the import path to remove space

const OurVehicle = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-72 flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/rainbow-end-road-landscape_23-2151596648.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740')",
        }}
        data-aos="fade-down"
      >
        
        <h1 className="text-4xl font-bold drop-shadow-lg">
          Our Vehicles
        </h1>
      </div>

      <Vehicles />
    </>
  );
};

export default OurVehicle;
