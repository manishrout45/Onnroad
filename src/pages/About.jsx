import React from 'react';

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
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src="/images/about-banner.jpg"
          alt="About Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <div className="text-center text-white px-6 animate-fadeIn">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">About Onnroad</h1>
            <p className="mt-4 text-xl font-light">Your Journey Begins with Us</p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-blue-600 py-20 px-4">
        <div className="max-w-5xl mx-auto relative  shadow-2xl rounded-3xl border-t-8 border-green-500 p-10">
          <img
            src="/images/mission-vision-icon.png"
            alt="Icon"
            className="w-24 h-24 absolute -top-12 left-1/2 transform -translate-x-1/2 rounded-full bg-white shadow-lg p-2 border-4 border-green-500"
          />
          <h2 className="text-3xl font-bold text-center text-yellow-400 mt-14">Our Mission & Vision</h2>
          <p className="mt-6 text-lg text-center text-white leading-relaxed">
            To offer top-quality, eco-conscious vehicle rentals and empower people to move freely with confidence and style.
          </p>
          <p className="mt-4 text-lg text-center text-white font-semibold">
            We envision a world where every ride is safe, enjoyable, and affordable.
          </p>
        </div>
      </div>

      {/* Our Team */}
      <div className="bg-green-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Meet Our Team</h2>
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
                  <h3 className="text-xl font-semibold text-green-800">{member.name}</h3>
                  <p className="text-green-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company Story */}
<div className="bg-gradient-to-br from-green-100 via-white to-emerald-100 py-20 px-4">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    {/* Text Content */}
    <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8 md:p-12">
      <h2 className="text-3xl font-bold text-green-800 mb-4">Our Story</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        Founded with a passion for freedom and movement, Onnroad Rentals has become a trusted name in car and bike rentals across India. 
        From major cities to small towns, we’ve helped thousands explore the open road.
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


      {/* Call to Action */}
      <div className="bg-blue-100 py-16 px-6 text-white text-center">
        <h2 className="text-4xl font-extrabold text-green-700 mb-4">Ready to Hit the Road?</h2>
        <p className="text-lg mb-8 text-green-700">Book your ride today and travel your way with Onnroad.</p>
        <a
          href="/vehicles"
          className="inline-block bg-white text-green-700 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-green-100 transition"
        >
          Browse Our Vehicles
        </a>
      </div>
    </section>
  );
};

export default About;
