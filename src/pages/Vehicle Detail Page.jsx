// src/pages/VehicleDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const vehicleData = {
  1: {
    name: 'Honda Civic',
    description: 'Comfortable and fuel-efficient sedan.',
    specifications: {
      Transmission: 'Automatic',
      Seats: 5,
      'Fuel Type': 'Petrol',
    },
    price: 50,
    image: '/images/honda-civic.jpg',
  },
  2: {
    name: 'Yamaha R15',
    description: 'Sporty bike with excellent performance.',
    specifications: {
      Transmission: 'Manual',
      Seats: 2,
      'Fuel Type': 'Petrol',
    },
    price: 30,
    image: '/images/yamaha-r15.jpg',
  },
  // Add more vehicle data as needed
};

const VehicleDetail = () => {
  const { id } = useParams();
  const vehicle = vehicleData[id];

  if (!vehicle) {
    return <div className="text-center py-16">Vehicle not found.</div>;
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img src={vehicle.image} alt={vehicle.name} className="w-full rounded-lg shadow-md" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">{vehicle.name}</h2>
          <p className="text-gray-700 mb-4">{vehicle.description}</p>
          <ul className="mb-4">
            {Object.entries(vehicle.specifications).map(([key, value]) => (
              <li key={key}><strong>{key}:</strong> {value}</li>
            ))}
          </ul>
          <span className="text-2xl font-bold text-blue-600">${vehicle.price}/day</span>
          <div className="mt-6">
            <a href="/booking" className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">Book Now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleDetail;
