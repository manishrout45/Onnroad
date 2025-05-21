const HeroSection = () => {
  return (
   <div className="relative w-full min-h-[110vh] text-white flex items-center justify-center px-6 overflow-hidden">

  {/* Background Image Layer */}
  <div
    className="absolute inset-0 bg-center bg-cover z-0"
    style={{
      backgroundImage: "url('https://img.freepik.com/free-photo/young-couple-choosing-car-car-show-room_1303-20426.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740')",
    }}
  ></div>

  {/* Transparent Blue Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-800/70 via-blue-700/60 to-indigo-800/60 z-10"></div>


      {/* Decorative Blobs */}
      <div className="absolute top-[-150px] left-[-150px] w-[550px] h-[550px] bg-blue-300 opacity-20 rounded-full blur-[120px] animate-pulse z-0"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[450px] h-[450px] bg-yellow-300 opacity-20 rounded-full blur-[110px] animate-ping z-0"></div>

      {/* Optional Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/40 to-indigo-900/60 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center py-24 px-4 sm:px-6">
        {/* Text Content */}
        <div className="text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-300 to-pink-400 text-transparent bg-clip-text drop-shadow-lg">
              Ride with Ease,
            </span>
            <br />
            <span className="text-yellow-300">Rent with Confidence</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl drop-shadow-md">
            Premium car and bike rentals designed for every kind of trip. Flexible plans, affordable rates, and zero hassles.
          </p>

          <div className="flex gap-4 flex-wrap">
            {/* Book Now Button */}
            <a href="/booking">
              <button className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-full border-2 border-yellow-400 shadow-xl hover:bg-blue-600 hover:text-yellow-400 hover:scale-105 transition-all duration-300">
                Book Now
              </button>
            </a>

            {/* Learn More Button */}
            <a href="/learn-more">
              <button className="bg-transparent text-white border-2 border-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105">
                Learn More
              </button>
            </a>
          </div>
        </div>

        {/* Car Image with Animation */}
        <div className="relative group flex justify-center items-center">
          <img
  src="/src/assets/images/view-3d-car-removebg-preview.png"
  alt="Luxury Sports Car"
  className="w-full max-w-[44rem] transform transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-105 drop-shadow-[0_20px_45px_rgba(0,0,0,0.5)] animate-float"
/>

        </div>
      </div>

      {/* Float Animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
