const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-12 px-4" style={{ backgroundColor: '#1e3a8a' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Company Info */}
        <div className="space-y-4">
          <div className="flex justify-center md:justify-start">
            <img
              src="src/assets/logo/onnroad_light.png" // Replace with the correct path to your logo image
              alt="Onnroad Logo"
              className="w-48 h-18 object-contain "
            />
          </div>
          {/*<h4 className="text-3xl font-bold text-yellow-400 mb-4">Onnroad</h4>*/}
          <p className="text-lg">
            Your trusted partner for vehicle rentals. Drive with comfort and confidence.
          </p>
          <p className="text-sm">
  <a href="/privacypolicy" className="text-gray-300 hover:underline hover:text-yellow-300">
    Privacy Policy / T&C
  </a>
</p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-2xl font-semibold text-yellow-400 mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-yellow-300 transition-colors">Home</a></li>
            <li><a href="/vehicles" className="hover:text-yellow-300 transition-colors">Vehicles</a></li>
            <li><a href="/rentals" className="hover:text-yellow-300 transition-colors">Rentals</a></li>
            <li><a href="/contact" className="hover:text-yellow-300 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-2xl font-semibold text-yellow-300 mb-4">Contact Us</h4>
          <p className="text-lg">123 Onnroad Avenue</p>
          <p className="text-lg">Puri, Odisha, 75____</p>
          <p className="text-lg">Email: onnroad2016@gmail.com</p>
          <p className="text-lg">Phone:+91 768 283 7771</p>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="mt-12 border-t border-blue-700 pt-6 text-center text-sm">
        <div className="flex justify-center gap-x-8 mb-4">
          <a href="https://www.facebook.com/onnroadindia/" className="text-2xl hover:text-yellow-400 transition-colors">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-2xl hover:text-yellow-400 transition-colors">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCQbxdprsdGvn2ENEVBio4Fw" className="text-2xl hover:text-yellow-400 transition-colors">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://www.instagram.com/onnroadindia/" className="text-2xl hover:text-yellow-400 transition-colors">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <hr />
        <p className="pt-2">&copy; 2025 Onnroad. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
