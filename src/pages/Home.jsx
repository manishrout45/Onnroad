import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Vehicles from "../components/Vehicle Listings";
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const logos = [
  "Honda_logo.png", "Bajaj_logo.png", "Hero_logo.png", "hyundai_logo.png",
  "Suzuki_logo.png", "TVS_logo.png", "RoyalEnfield_logo.png", "TATA_logo.png",
];


const Home = () => {
  
  return (
    <>
      <HeroSection />

      <Vehicles />

      {/* Our Fleet */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-12">Our Fleet</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { image: 'https://img.freepik.com/free-photo/white-sport-sedan-with-colorful-tuning-road_114579-5044.jpg?t=st=1746435601~exp=1746439201~hmac=7c73afd4aff9da66460461a54e1e73d998137cb65a025563d9d1a2c77d4111c0&w=1380', title: 'Sedans', description: 'Comfortable and efficient for city drives.' },
              { image: 'https://img.freepik.com/free-photo/blue-jeep-photo-shooting-sunset_114579-4043.jpg?t=st=1746435894~exp=1746439494~hmac=f47807abb9d415cf38d3431b01b94ef93eb6f3bf011dbf5f569b17adeadadb8c&w=1380', title: 'SUVs', description: 'Spacious and powerful for all terrains.' },
              { image: 'https://img.freepik.com/free-photo/young-handsome-man-riding-motorbike-countryside-road_176420-2553.jpg?t=st=1746436011~exp=1746439611~hmac=07e165be1e2f55123b9b199d9cb5ca2c3a6779a69b5f4c120df9041766aceb44&w=1380', title: 'Bikes', description: 'Agile and economical for quick commutes.' },
            ].map((vehicle, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                <img src={vehicle.image} alt={vehicle.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{vehicle.title}</h3>
                  <p className="text-gray-600">{vehicle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
  {/* Left Text Section */}
  <div className="col-span-1 flex flex-col justify-start space-y-2">
    <h4 className="font-semibold text-sm uppercase text-blue-500">Choose Your Place</h4>
    <h2 className="text-4xl font-bold text-gray-900 leading-tight">
      Popular <span className="block">Destinations</span>
    </h2>
    <p className="text-gray-500">
  Explore some of the most breathtaking places around Puri and Bhubaneswar. Perfect for your next adventure. 
  From serene beaches and ancient temples to vibrant markets and cultural landmarks, these destinations offer unforgettable experiences for every kind of traveler.
</p>
<p className="text-gray-500 mt-4">
  Whether you're seeking peaceful retreats in nature, spiritual journeys through historic sites, or lively urban vibes, there's something here to inspire every step of your journey. Start discovering your dream destination today.
</p>

  </div>

  {/* Destination Cards */}
  <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      { name: "Konark", image: "https://cdn.britannica.com/19/251919-050-D3E64798/konark-sun-temple-orissa-india-unesco-heritage-site.jpg" },
      { name: "Jagannath Temple Puri", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCA6RmNwBS8OnqIeijDl3rEvQ6otqopCsaAg&s" },
      { name: "Golden Beach Puri", image: "https://assets.odishabytes.com/wp-content/uploads/2020/10/Puri.jpeg" },
      { name: "Dhauli Giri", image: "https://bhubaneswartourism.in/images/places-to-visit/headers/dhauli-giri-hills-bhubaneswar-tourism-entry-fee-timings-holidays-reviews-header.jpg" },
      { name: "Lingaraj Temple", image: "https://img-cdn.publive.online/fit-in/1200x675/filters:format(webp)/sambad-english/media/media_files/2025/02/12/9vebIYsNrfHLFBAWABlD.JPG" },
      { name: "Khandagiri Caves", image: "https://img.veenaworld.com/wp-content/uploads/2021/10/Udaygiri-and-Khandagiri.jpg" },
    ].map((place, index) => (
      <div key={index} className="relative overflow-hidden rounded-lg shadow-lg h-56">
        <img src={place.image} alt={place.name} className="w-full h-full object-cover" />
        <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
          {place.name}
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Our Track Record */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Our Track Record</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '👥', number: '10K+', label: 'Happy Customers' },
              { icon: '🚘', number: '500+', label: 'Vehicles Available' },
              { icon: '🏆', number: '100+', label: 'Awards Won' },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-5xl mb-4">{stat.icon}</div>
                <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

            
{/* Booking Info Section */}
<section className="py-16 bg-gray-50">
  <div className="max-w-5xl mx-auto px-4 ">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">Hassle-Free Vehicle Rentals</h2>
    <p className="text-gray-600 text-lg leading-relaxed mb-4">
      Whether you’re planning a weekend getaway or need a vehicle for daily commuting, we've got you covered.
      Our easy-to-use platform lets you quickly book bikes or cars at your convenience. Choose from a wide range
      of vehicles, fill out a simple form, and hit the road in no time!
    </p>
    <p className="text-gray-600 text-lg leading-relaxed">
      With flexible rental plans, competitive prices, and a seamless booking process, renting a vehicle has
      never been easier. Book online, pick up at your chosen location, and enjoy the ride!
    </p>
  </div>
</section>



      {/* Testimonials */}
<section className="py-20 bg-gray-100">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold text-blue-600 mb-12">What Our Clients Say</h2>

    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={true}
      centeredSlides={false}
      slidesPerView={1}
      spaceBetween={20}
      breakpoints={{
        425: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="testimonial-swiper px-4"
    >
      {[
        { name: 'John Doe', image: 'https://img.freepik.com/free-photo/portrait-interesting-young-man-winter-clothes_158595-914.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740', feedback: 'Excellent service and a great selection of vehicles!' },
        { name: 'Jane Smith', image: 'https://img.freepik.com/free-vector/minimalist-geometric-judith-s-tiktok-profile-picture_742173-12131.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740', feedback: 'Affordable prices and friendly staff. Highly recommend!' },
        { name: 'Mike Johnson', image: 'https://img.freepik.com/free-photo/serious-man-looking-camera_23-2147799044.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740', feedback: 'The booking process was seamless and quick also have Effortless.' },
        { name: 'Emily Davis', image: 'https://img.freepik.com/free-vector/doodle-creative-gaming-profile-picture_1421494-148.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740', feedback: 'Super reliable vehicles and fast booking!' },
      ].map((client, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 h-[350px] w-full max-w-sm mx-auto">
            <img src={client.image} alt={client.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
            <p className="text-gray-700 italic mb-4">{`"${client.feedback}"`}</p>
            <h4 className="font-semibold text-blue-500">{client.name}</h4>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>

       {/* Our Partners - Swiper Slider */}
<motion.section
  className="max-w-7xl mx-auto py-20 px-6"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <motion.div className="text-center mb-14" variants={fadeUp}>
    <h3 className="text-4xl font-bold text-blue-600 mb-4">Our Partners</h3>
    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
    We partner with trusted automotive brands and top-rated service providers to ensure a seamless rental experience for you.
    </p>
  </motion.div>

  <Swiper
    modules={[Autoplay]}
    autoplay={{ delay: 2500, disableOnInteraction: false }}
    breakpoints={{
      320: { slidesPerView: 2, spaceBetween: 20 },
      640: { slidesPerView: 3, spaceBetween: 30 },
      1024: { slidesPerView: 5, spaceBetween: 40 },
    }}
    loop={true}
    className="px-4"
  >
    {logos.map((logo, index) => (
      <SwiperSlide key={index} className="flex justify-center">
        <img
          src={`/images/${logo}`}
          alt={`Partner ${index + 1}`}
          className="h-24 grayscale hover:grayscale-0 transition duration-300"
        />
      </SwiperSlide>
    ))}
  </Swiper>
</motion.section>



      {/* CTA - Get Started */}
<motion.section
  className="bg-blue-600 text-white py-20 px-6"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <motion.div className="max-w-4xl mx-auto text-center" variants={fadeUp}>
    <h3 className="text-4xl font-bold mb-4">Ready to Hit the Road?</h3>
    <p className="text-lg mb-8">Book your ride today and experience seamless, affordable, and reliable transportation.</p>
    <a 
      href="/booking" 
      className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
    >
      Book Your Ride Now
    </a>
  </motion.div>
</motion.section>
{/* Floating IMP Button with 'Click Here' label */}
<div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-1">
  <span className="text-md text-yellow-500 font-bold animate-bounce ">
    Click Here
  </span>
  <a
    href="/privacypolicy"
    className="flex items-center justify-center bg-red-600 text-yellow-400 font-bold rounded-full w-16 h-16 shadow-lg hover:bg-red-700 transition-all duration-300 text-lg border-4 border-yellow-400"
    title="Important"
  >
    IMP
  </a>
</div>



    </>
  );
};

export default Home;
