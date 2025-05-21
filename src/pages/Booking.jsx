import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaRegCommentDots,
  FaMotorcycle,
} from "react-icons/fa";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bikeModel: "",
    startDate: "",
    endDate: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, bikeModel, startDate, endDate, message } = formData;

    const whatsappText = `*New Booking Request*%0A
👤 Name: ${name}%0A
📧 Email: ${email}%0A
📞 Phone: ${phone}%0A
🏍️ Bike Model: ${bikeModel}%0A
📅 Rental Dates: ${startDate} to ${endDate}%0A
📝 Additional Message: ${message}`;

    const phoneNumber = "918018490270"; // ✅ Replace with your WhatsApp number
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-72 flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/rainbow-end-road-landscape_23-2151596648.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740')",
        }}
      >
        
        <h1 className="text-4xl font-bold drop-shadow-lg" data-aos="fade-down">
          Book Your Ride
        </h1>
      </div>

      {/* Step Section */}
<section className="py-20 bg-white" data-aos="fade-up">
  <div className="container mx-auto px-4 max-w-6xl">
    <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-800">How It Works</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Step 1 */}
      <div className="bg-gray-50 rounded-2xl shadow-md p-8 hover:bg-green-100 transition-all duration-300">
        <div className="w-16 h-16 flex items-center justify-center bg-green-200 text-green-700 text-3xl rounded-full mx-auto mb-6">
          🚗
        </div>
        <h3 className="text-xl font-semibold text-center mb-3">Choose a Vehicle</h3>
        <p className="text-gray-600 text-center">Browse our listings and pick the perfect car for your trip.</p>
      </div>
      
      {/* Step 2 */}
      <div className="bg-gray-50 rounded-2xl shadow-md p-8 hover:bg-yellow-100 transition-all duration-300">
        <div className="w-16 h-16 flex items-center justify-center bg-yellow-200 text-yellow-700 text-3xl rounded-full mx-auto mb-6">
          📝
        </div>
        <h3 className="text-xl font-semibold text-center mb-3">Fill Booking Form</h3>
        <p className="text-gray-600 text-center">Enter your details, rental dates, and preferences.</p>
      </div>

      {/* Step 3 */}
      <div className="bg-gray-50 rounded-2xl shadow-md p-8 hover:bg-blue-100 transition-all duration-300">
        <div className="w-16 h-16 flex items-center justify-center bg-blue-200 text-blue-700 text-3xl rounded-full mx-auto mb-6">
          ✅
        </div>
        <h3 className="text-xl font-semibold text-center mb-3">Confirm & Ride</h3>
        <p className="text-gray-600 text-center">We’ll confirm your booking and you’re ready to go!</p>
      </div>
    </div>
  </div>
</section>


      {/* Booking Form */}
      <section className="py-16" data-aos="fade-up">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-10 max-w-5xl">
          {/* Form Section */}
          <div className="flex-1 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Booking Form</h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 mb-1">Full Name</label>
                <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                  <FaUser className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full focus:outline-none"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Email Address</label>
                <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                  <FaEnvelope className="text-gray-500 mr-2" />
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full focus:outline-none"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Phone Number</label>
                <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                  <FaPhone className="text-gray-500 mr-2" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full focus:outline-none"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Bike Model Field */}
              <div>
                <label className="block text-gray-700 mb-1">Bike Model</label>
                <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                  <FaMotorcycle className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    name="bikeModel"
                    required
                    className="w-full focus:outline-none"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Rental Dates</label>
                <div className="flex gap-4">
                  <div className="flex items-center border border-gray-300 rounded px-3 py-2 w-1/2">
                    <FaCalendarAlt className="text-gray-500 mr-2" />
                    <input
                      type="date"
                      name="startDate"
                      required
                      className="w-full focus:outline-none"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex items-center border border-gray-300 rounded px-3 py-2 w-1/2">
                    <FaCalendarAlt className="text-gray-500 mr-2" />
                    <input
                      type="date"
                      name="endDate"
                      required
                      className="w-full focus:outline-none"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Additional Requests</label>
                <div className="flex items-start border border-gray-300 rounded px-3 py-2">
                  <FaRegCommentDots className="text-gray-500 mr-2 mt-1" />
                  <textarea
                    name="message"
                    rows="4"
                    className="w-full focus:outline-none"
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="bg-green-600 text-white w-full py-3 rounded-full font-semibold hover:bg-green-700 transition mt-8"
              >
                Send Booking via WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex-1 bg-yellow-100 p-8 rounded-lg shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Need Help?</h3>
              <p className="text-gray-700 mb-6">
                If you have any questions or need assistance with your booking, feel free to contact us.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li>📧 <strong>Email:</strong> onnroad2016@gmail.com</li>
                <li>☎️ <strong>Phone:</strong> +91 768 283 7771</li>
                <li>📍 <strong>Location:</strong> Puri, Odisha, 75____</li>
              </ul>
            </div>

            <img
              src="https://img.freepik.com/free-vector/order-ride-concept-illustration_114360-5040.jpg"
              alt="Customer Support"
              className="mt-8 w-full h-auto rounded-md shadow-md"
              data-aos="fade-up"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
