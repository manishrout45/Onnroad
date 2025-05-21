import { Mail, Phone, MapPin, Facebook, Twitter, Youtube, Instagram } from "lucide-react";
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
      <div className="relative h-64 md:h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/portrait-young-smiling-woman-explains-something-video-call-sits-headphones-with_1258-201867.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740')" }}>
      {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-white text-4xl md:text-5xl font-bold">Let’s Connect</h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 md:px-8 bg-gray-100">
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
              info: "Puri, Odisha, 75____"
            }, {
              Icon: Mail,
              title: "Email Us",
              info: "onnroad2016@gmail.com"
            }, {
              Icon: Phone,
              title: "Call Us",
              info: "+91 768 283 7771"
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
                {[
      { Icon: Facebook, url: "https://www.facebook.com/onnroadindia/" },
      { Icon: Twitter, url: "https://twitter.com/yourprofile" },
      { Icon: Youtube, url: "https://www.youtube.com/channel/UCQbxdprsdGvn2ENEVBio4Fw" },
      { Icon: Instagram, url: "https://www.instagram.com/onnroadindia/" },
    ].map(({ Icon, url }, i) => (
      <a
        key={i}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition"
      >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form Right */}
          <div className="relative" data-aos="fade-left">
            <div className="absolute inset-0 -z-10 opacity-20">
              <img src="" alt="Connect with Us" className="w-full h-full object-contain opacity-10" />
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
        <div className=" bg-blue-50 p-8 rounded-xl shadow-lg border-t-4 mt-10 border-blue-600" data-aos="zoom-in-up">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Find Us on the Map</h3>
          <div className="w-full h-80 overflow-hidden rounded-lg shadow-inner">
            <iframe
              src="https://www.google.com/maps?q=Puri,Odisha&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              title="Office Map"
            ></iframe>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default Contact;
