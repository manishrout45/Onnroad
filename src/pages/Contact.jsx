import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-white overflow-hidden">
      {/* Hero Image Section */}
      <div className="relative h-64 md:h-96 bg-cover bg-center" style={{ backgroundImage: "url('/contact-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-white text-4xl md:text-5xl font-bold">Let’s Connect</h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 md:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-blue-800">Contact Us</h2>
          <p className="text-gray-600 mt-2">Have questions? We’d love to hear from you.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info Left */}
          <div className="space-y-8" data-aos="fade-right">
            {[{
              Icon: MapPin,
              title: "Our Office",
              info: "123 Tech Street, Innovation City, Country"
            }, {
              Icon: Mail,
              title: "Email Us",
              info: "support@nootech.com"
            }, {
              Icon: Phone,
              title: "Call Us",
              info: "+123 456 7890"
            }].map(({ Icon, title, info }, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition-all flex items-start gap-4 border-l-4 border-blue-500">
                <Icon className="text-blue-600 w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-700 text-lg">{title}</h4>
                  <p className="text-gray-500 text-sm">{info}</p>
                </div>
              </div>
            ))}

            {/* Social Media */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition-all border-l-4 border-blue-500">
              <h4 className="font-semibold text-gray-700 text-lg mb-4">Follow Us</h4>
              <div className="flex gap-5 text-blue-600">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="hover:scale-110 transition">
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form Right */}
          <div className="relative" data-aos="fade-left">
            <div className="absolute inset-0 -z-10">
              <img src="/contact-illustration.png" alt="illustration" className="w-full h-full object-contain opacity-10" />
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600">
              <h3 className="text-2xl font-semibold text-gray-700 mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    placeholder="Write your message..."
                    rows="5"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600" data-aos="zoom-in-up">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Find Us on the Map</h3>
          <div className="w-full h-80 overflow-hidden rounded-lg shadow-inner">
            <iframe
              src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              title="Office Map"
            ></iframe>
          </div>
        </div>
      </div>

      {/* SVG Divider */}
      <div className="relative mt-20">
        <svg className="absolute w-full bottom-0" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="#eff6ff" d="M0,96L1440,10L1440,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Contact;
