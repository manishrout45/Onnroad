// src/pages/Vehicles.jsx
import React, { useState } from 'react';

const vehicles = [
  {
    id: 1,
    name: 'Honda Civic',
    description: 'Comfortable and fuel-efficient sedan.',
    price: 50,
    image: '/images/honda-civic.jpg',
    category: 'car',
  },
  {
    id: 2,
    name: 'Yamaha R15',
    description: 'Sporty bike with excellent performance.',
    price: 25,
    image: '/images/yamaha-r15.jpg',
    category: 'bike',
  },
  {
    id: 3,
    name: 'Toyota Corolla',
    description: 'Reliable and spacious sedan for family trips.',
    price: 60,
    image: '/images/toyota-corolla.jpg',
    category: 'car',
  },
  {
    id: 4,
    name: 'Kawasaki Ninja 400',
    description: 'A fast and agile motorcycle for thrill-seekers.',
    price: 40,
    image: '/images/kawasaki-ninja-400.jpg',
    category: 'bike',
  },
  {
    id: 5,
    name: 'BMW X5',
    description: 'Luxury SUV with a premium driving experience.',
    price: 100,
    image: '/images/bmw-x5.jpg',
    category: 'car',
  },
  {
    id: 6,
    name: 'Harley Davidson Sportster',
    description: 'Iconic American motorcycle for cruising.',
    price: 70,
    image: '/images/harley-davidson-sportster.jpg',
    category: 'bike',
  },
  {
    id: 7,
    name: 'Ford Mustang',
    description: 'Powerful sports car with great performance.',
    price: 90,
    image: '/images/ford-mustang.jpg',
    category: 'car',
  },
  {
    id: 8,
    name: 'Honda CB500X',
    description: 'Adventure bike built for long-distance journeys.',
    price: 45,
    image: '/images/honda-cb500x.jpg',
    category: 'bike',
  },
];

const Vehicles = () => {
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);
  const [activeCategory, setActiveCategory] = useState('all');

  const handleFilter = (category) => {
    setActiveCategory(category);
    setFilteredVehicles(category === 'all' ? vehicles : vehicles.filter((v) => v.category === category));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Available Vehicles</h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {['all', 'bike', 'car'].map((type) => (
            <button
              key={type}
              onClick={() => handleFilter(type)}
              className={`px-5 py-2 rounded-full transition-all font-medium shadow-md ${
                activeCategory === type
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white'
              }`}
            >
              {type === 'all' ? 'All Vehicles' : type.charAt(0).toUpperCase() + type.slice(1) + 's'}
            </button>
          ))}
        </div>

        {/* Vehicle Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <div
            key={vehicle.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 border border-gray-200 hover:border-blue-400 p-3"
          >
            <div className="rounded-xl overflow-hidden mb-4">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="px-2">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-gray-800">{vehicle.name}</h3>
                <span className={`text-xs px-2 py-1 rounded-full uppercase font-bold ${vehicle.category === 'car' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
                  {vehicle.category}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{vehicle.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-blue-600">${vehicle.price}/day</span>
                <a
                  href={`/vehicles/${vehicle.id}`}
                  className="text-sm text-blue-600 hover:underline font-medium"
                >
                  View Details →
                </a>
              </div>
            </div>
          </div>
          
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vehicles;
