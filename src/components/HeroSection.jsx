const HeroSection = () => {
  return (
    <div className="relative w-full min-h-[110vh] bg-blue-500 text-white flex items-center justify-center px-6 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-blue-300 opacity-20 rounded-full blur-[120px] animate-pulse z-0 "></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-yellow-200 opacity-10 rounded-full blur-[100px] animate-ping z-0"></div>

      {/* Optional Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/30 to-blue-900/50 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center py-24">
        {/* Text Content */}
        <div className="text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-xl tracking-tight">
            Ride with Ease, <br />
            <span className="text-yellow-400">Rent with Confidence</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl drop-shadow-md">
            Premium car and bike rentals designed for every kind of trip. Flexible plans, affordable rates, and zero hassles.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition-all duration-300 shadow-2xl hover:scale-105">
              Book Now
            </button>
            <button className="bg-white-900 text-blue-800 font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-blue-800 transition-all duration-300 shadow-2xl hover:scale-105">
              Learn More
            </button>
          </div>
        </div>

        {/* Car Image with Floating Animation */}
        <div className="relative group">
          <img
            src="src/assets/images/view-3d-car-removebg-preview.png"
            alt="Luxury Sports Car"
            className="w-full max-w-md mx-auto transform transition-transform duration-500 group-hover:rotate-[-3deg] group-hover:scale-105 drop-shadow-[0_15px_35px_rgba(0,0,0,0.35)] animate-float"
          />
        </div>
      </div>

      {/* Floating Animation Keyframe */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
