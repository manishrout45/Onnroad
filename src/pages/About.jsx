import React from 'react';
import { FaPhoneAlt, FaCheckCircle } from 'react-icons/fa';


const teamMembers = [
  {
    name: 'John Doe',
    role: 'Founder & CEO',
    image: '/images/john-doe.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'Operations Manager',
    image: '/images/jane-smith.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'Operations Manager',
    image: '/images/jane-smith.jpg',
  },
  // Add more members...
];


const About = () => {
  return (
    <section className="text-gray-800">
{/* Hero Banner */}
<div
  className="relative h-[80vh] bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('https://img.freepik.com/free-photo/men-with-bikes-summer-versus-winter_23-2150457466.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740')", // Change path to your image
  }}
>
{/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

  {/* Text Content */}
  <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
    <div className="text-white max-w-3xl animate-fadeIn">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-md hover:scale-105 transition-transform duration-500">
        About Onnroad
      </h1>
      <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-200 hover:text-yellow-400 transition-colors duration-300">
        Your Journey Begins with Us — travel smarter, safer, and in style.
      </p>

      <a
        href="/vehicles"
        className="mt-8 inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
      >
        Browse Our Vehicles
      </a>
    </div>
  </div>
</div>


      {/* Mission & Vision */}
<div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 py-20 px-4">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    
    {/* Left Side Image or Icon */}
    <div className="flex justify-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3159/3159066.png"
        alt="Mission Vision Icon"
        className="w-64 h-64 object-contain drop-shadow-xl"
      />
    </div>

    {/* Text Content */}
    <div className="bg-white rounded-3xl shadow-xl p-10 md:p-12">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center md:text-left">Our Mission & Vision</h2>
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="text-green-600 text-2xl">
            🚗
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>Mission:</strong> To offer top-quality, eco-conscious vehicle rentals and empower people to move freely with confidence and style.
          </p>
        </div>
        <div className="flex items-start gap-4">
          <div className="text-yellow-500 text-2xl">
            🌍
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>Vision:</strong> We envision a world where every ride is safe, enjoyable, and affordable for everyone.
          </p>
        </div>
      </div>
    </div>

  </div>
</div>


      {/* Our Team */}
      <div className="bg-blue-100 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Meet Our Team</h2>
          <p className="text-gray-600 mb-12">The people who drive our vision forward</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-blue-600">{member.name}</h3>
                  <p className="text-green-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

     {/* Company Story */}
<div className="bg-gradient-to-br from-blue-100 via-white to-emerald-100 py-20 px-4">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    
    {/* Text Content */}
    <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8 md:p-12">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Story</h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        Founded with a passion for freedom and movement, <strong>Onnroad Rentals</strong> has become a trusted name in car and bike rentals across India. 
        From bustling cities to serene hill stations, we’ve helped thousands of customers explore the open road with ease and confidence.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
  We aim to make travel easy, affordable, and enjoyable with reliable vehicles and great service across India.
</p>

    </div>

    {/* Image on Right */}
    <div className="w-full h-full">
      <img
        src="https://img.freepik.com/free-vector/goal-achievement-teamwork-business-concept-career-growth-cooperation-development-project_107791-29.jpg?t=st=1746357272~exp=1746360872~hmac=4c3ddf9035f9e7fb3c28d62778f3f907815389268269b9f278f2bee41327c208&w=1060"
        alt="Company Story"
        className="w-full h-96 object-cover rounded-2xl shadow-md"
      />
    </div>
  </div>
</div>

 <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 gap-12">
        {/* Left image block */}
        <div className="relative w-full md:w-1/2">
          <img
            src="https://img.freepik.com/free-photo/vehicle-road_23-2151919257.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740" 
            alt="Eiffel Tower"
            className="rounded-tl-[120px] rounded-br-[120px] shadow-xl object-cover"
          />

          {/* 30% Discount */}
          <div className="absolute top-10 right-6 text-right">
            <h3 className="text-4xl font-bold text-white italic">30%</h3>
            <p className="text-2xl font-semibold text-gray-800">Discount</p>
          </div>

          {/* Phone card */}
          <div className="absolute bottom-6 left-6 bg-white shadow-lg rounded-xl px-6 py-4 flex items-center gap-4 w-[260px]">
            <div className="text-blue-500 text-2xl">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="text-sm text-gray-400">BOOK TOUR NOW</p>
              <p className="text-xl font-semibold text-gray-900">768-283-7771</p>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="w-full md:w-1/2">
          <p className="text-blue-500 italic text-lg mb-2">Get to know us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Plan Your Trip with Trevily
          </h2>
          <p className="text-gray-600 mb-6">
            There are many variations of passages of available but the majority have suffered
            alteration in some form, by injected hum randomised words which don't look even slightly.
          </p>

          {/* Features List */}
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-blue-500 mt-1" />
              <span className="font-semibold text-gray-800">
                Invest in your simply neighborhood
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-blue-500 mt-1" />
              <span className="font-semibold text-gray-800">
                Support people in free text extreme need
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-blue-500 mt-1" />
              <span className="font-semibold text-gray-800">
                Largest global industrial business community
              </span>
            </li>
          </ul>

          {/* CTA Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition">
            BOOK WITH US NOW
          </button>
        </div>
      </div>
    </section>


      {/* Call to Action */}
      <div className="bg-blue-100 py-16 px-6 text-white text-center">
        <h2 className="text-4xl font-extrabold text-blue-600 mb-4">Ready to Hit the Road?</h2>
        <p className="text-lg mb-8 text-gray-700">Book your ride today and travel your way with Onnroad.</p>
        <a
          href="/vehicles"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-green-500 transition"
        >
          Browse Our Vehicles
        </a>
      </div>
    </section>
  );
};

export default About;
