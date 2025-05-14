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
  "logo1.png", "logo2.png", "logo3.png", "logo4.png",
  "logo5.png", "logo6.png", "logo7.png", "logo8.png",
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

      {/* Testimonials */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-12">What Our Clients Say</h2>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
          >
            {[
              { name: 'John Doe', image: '/images/client1.jpg', feedback: 'Excellent service and a great selection of vehicles!' },
              { name: 'Jane Smith', image: '/images/client2.jpg', feedback: 'Affordable prices and friendly staff. Highly recommend!' },
              { name: 'Mike Johnson', image: '/images/client3.jpg', feedback: 'The booking process was seamless and quick.' },
            ].map((client, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <img src={client.image} alt={client.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
                  <p className="text-gray-700 italic mb-4">"{client.feedback}"</p>
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
          className="h-12 grayscale hover:grayscale-0 transition duration-300"
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

    </>
  );
};

export default Home;
