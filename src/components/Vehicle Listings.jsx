// src/pages/Vehicles.jsx
import React, { useState } from 'react';
import VehicleDetail from '../pages/Vehicle Detail Page';
const vehicles = [
  {
    id: 1,
    name: 'Maruti Suzuki Alto',
    description: 'Comfortable and fuel-efficient Car.',
    price: 50,
    image: 'src/assets/images/Vehicles/Cars/alto (2).webp',
    category: 'car',
  },
  {
    id: 2,
    name: 'Royal Enfield',
    description: 'Royal bike with excellent performance.',
    price: 500,
    image: 'src/assets/images/Vehicles/Bike/Royalenfield.webp',
    category: 'bike',
  },
  {
    id: 3,
    name: 'Ertiga',
    description: 'Reliable and spacious SUV for family trips.',
    price: 3000,
    image: 'src/assets/images/Vehicles/Cars/Ertiga.webp',
    category: 'car',
  },
  {
    id: 4,
    name: 'Bajaj Platina',
    description: 'A fast and agile motorcycle for thrill-seekers.',
    price: 500,
    image: 'src/assets/images/Vehicles/Bike/Platina-1.png',
    category: 'bike',
  },
  {
    id: 5,
    name: 'Swift Dzire',
    description: 'Luxury SUV with a premium driving experience.',
    price: 2500,
    image: 'src/assets/images/Vehicles/Cars/Swift-dzire.webp',
    category: 'car',
  },
  {
    id: 6,
    name: 'Bajaj CT 100',
    description: 'Iconic American motorcycle for cruising.',
    price: 500,
    image: 'src/assets/images/Vehicles/Bike/Bajaj-CT_100.avif',
    category: 'bike',
  },
  {
    id: 7,
    name: 'Maruti Celerio',
    description: 'Powerful sports car with great performance.',
    price: 2000,
    image: 'src/assets/images/Vehicles/Cars/Maruti Celerio.webp',
    category: 'car',
  },
  {
    id: 8,
    name: 'Destini',
    description: 'Adventure bike built for long-distance journeys.',
    price: 400,
    image: 'src/assets/images/Vehicles/Bike/Destini.webp',
    category: 'bike',
  },
  {
    id: 9,
    name: 'Renault KWID',
    description: 'Powerful sports car with great performance.',
    price: 2500,
    image: 'src/assets/images/Vehicles/Cars/Renault KWID.webp',
    category: 'car',
  },
  {
    id: 10,
    name: 'Glamour',
    description: 'Iconic American motorcycle for cruising.',
    price: 500,
    image: 'src/assets/images/Vehicles/Bike/Glamour.avif',
    category: 'bike',
  },
  {
    id: 11,
    name: 'Tata Tiago',
    description: 'Powerful sports car with great performance.',
    price: 2500,
    image: 'src/assets/images/Vehicles/Cars/Tata Tiago.webp',
    category: 'car',
  },
  {
    id: 12,
    name: 'TVS Jupiter',
    description: 'Powerful sports car with great performance.',
    price: 400,
    image: 'src/assets/images/Vehicles/Bike/TVS-Jupiter-Classic-Edition.jpg',
    category: 'bike',
  },
  {
    id: 13,
    name: 'Hero HF Deluxe',
    description: 'Iconic American motorcycle for cruising.',
    price: 500,
    image: 'src/assets/images/Vehicles/Bike/Hero HF Deluxe.webp',
    category: 'bike',
  },
  {
    id: 14,
    name: 'Activa',
    description: 'Powerful sports car with great performance.',
    price: 400,
    image: 'src/assets/images/Vehicles/Bike/Activa.webp',
    category: 'bike',
  },
  {
    id: 15,
    name: 'Xtreme',
    description: 'Powerful sports car with great performance.',
    price: 500,
    image: 'src/assets/images/Vehicles/Bike/xtreme.webp',
    category: 'bike',
  },
  {
    id: 16,
    name: 'Honda Shine',
    description: 'Iconic American motorcycle for cruising.',
    price: 500,
    image: 'src/assets/images/Vehicles/Bike/Honda Shine.webp',
    category: 'bike',
  },
  {
    id: 17,
    name: 'TVS_apache',
    description: 'Iconic American motorcycle for cruising.',
    price: 500,
    image: 'src/assets/images/Vehicles/Bike/TVS_apache.jpg',
    category: 'bike',
  },
  {
    id: 18,
    name: 'TVS_star-city',
    description: 'Iconic American motorcycle for cruising.',
    price: 500,
    image: 'src/assets/images/Vehicles/Bike/TVS_star-city.webp',
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
    <section className="py-16 bg-blue-100">
     
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
                <span className="text-lg font-bold text-blue-600">₹{vehicle.price}/day</span>
               <a
              href={`/vehicles/${vehicle.id}`}
              target="_blank"
              rel="noopener noreferrer"
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
