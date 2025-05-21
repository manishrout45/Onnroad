// src/pages/VehicleDetail.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const vehicleData = {
  1: {
    name: 'Maruti Suzuki Alto',
    description: 'Comfortable and fuel-efficient sedan perfect for city driving.',
    specifications: {
      Transmission: 'Automatic',
      Seats: 5,
      'Fuel Type': 'Petrol',
    },
    price: 50,
    image: '/src/assets/images/Vehicles/Cars/alto (2).webp',
  },
  2: {
    name: 'Yamaha R15',
    description: 'Sporty bike with excellent performance and stunning design.',
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
  const navigate = useNavigate();
  const vehicle = vehicleData[id];

  if (!vehicle) {
    return <div className="text-center py-16 text-red-500 text-xl font-semibold">Vehicle not found.</div>;
  }

  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate('/vehicles')}
          className="mb-6 inline-flex items-center text-blue-600 hover:underline font-semibold"
        >
          ← Back
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full h-full overflow-hidden rounded-2xl shadow-lg">
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
            />
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h1 className="text-4xl font-extrabold text-blue-800 mb-4">{vehicle.name}</h1>
            <p className="text-gray-600 text-lg mb-6">{vehicle.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {Object.entries(vehicle.specifications).map(([key, value]) => (
                <div key={key} className="bg-blue-50 p-4 rounded-lg shadow-sm">
                  <p className="text-sm font-semibold text-blue-600">{key}</p>
                  <p className="text-md font-bold text-gray-700">{value}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mb-6">
              <span className="text-3xl font-extrabold text-green-600">₹{vehicle.price}<span className="text-sm text-gray-500"> / day</span></span>
              <a
                href="/booking"
                className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-6 py-3 rounded-full font-semibold shadow transition duration-200"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleDetail;
