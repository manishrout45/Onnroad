import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClasses = (path) =>
    location.pathname === path
      ? "px-4 py-1 rounded-md text-white bg-blue-600 font-semibold transition-all duration-300"
      : "px-4 py-1 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-all duration-300";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white text-blue-600 p-4 shadow-sm fixed top-0 w-full z-50 border-b-4 border-yellow-500">

      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="h-10 w-auto">
  <img
    src="src/assets/logo/onnroad.png"
    alt="ONNROAD Logo"
    className="h-16  object-contain"
  />
</div>

       {/* Mobile Menu Button (Hamburger Icon) */}
<button
  onClick={toggleMenu}
  className="lg:hidden text-2xl focus:outline-none text-blue-600 z-50"
  aria-label="Toggle menu"
>
  {isMenuOpen ? (
    <i className="fas fa-times"></i> // Cross icon when menu is open
  ) : (
    <i className="fas fa-bars"></i>  // 3-bar icon when menu is closed
  )}
</button>


        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-end w-full">
          <ul className="flex gap-8 w-full justify-end">
            <li>
              <Link to="/" className={linkClasses("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={linkClasses("/about")}>
                About
              </Link>
            </li>
            <li>
              <Link to="/vehicles" className={linkClasses("/vehicles")}>
                Vehicles
              </Link>
            </li>
            <li>
              <Link to="/booking" className={linkClasses("/booking")}>
                Booking
              </Link>
            </li>
            <li>
              <Link to="/contact" className={linkClasses("/contact")}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/faq" className={linkClasses("/faq")}>
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/privacypolicy" className={linkClasses("/privacypolicy")}>
                T&C
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu (Popup) */}
<div
  className={`lg:hidden fixed inset-0 bg-white  ${isMenuOpen ? "block" : "hidden"} z-40`}
>
  <div className="flex flex-col h-full">
    
    {/* Top Section: Logo + Close Button */}
    <div className="flex items-center justify-between px-6 py-1 shadow-md">
      {/* Logo */}
      <img src="src/assets/logo/onnroad.png" alt="Logo" className="w-18 h-16 object-contain" />
      
    </div>

    {/* Menu Title */}
    <div className="px-6 pt-6">
      <h2 className="text-xl font-bold text-gray-800 tracking-wide">
        MENU
      </h2>
      {/* Green underline */}
      <div className="w-16 h-1 bg-green-500 mt-1"></div>
    </div>

    {/* Menu Links */}
    <ul className="flex flex-col items-start space-y-2 mt-8 px-6 text-gray-800 text-lg font-medium">
      <li className="w-full">
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className={`block w-full py-2 px-4 rounded-md ${location.pathname === "/" ? "bg-blue-600 text-white" : "hover:bg-gray-100"}`}
        >
          Home
        </Link>
      </li>
      <li className="w-full">
        <Link
          to="/about"
          onClick={() => setIsMenuOpen(false)}
          className={`block w-full py-2 px-4 rounded-md ${location.pathname === "/about" ? "bg-blue-600 text-white" : "hover:bg-gray-100"}`}
        >
          About
        </Link>
      </li>
      <li className="w-full">
        <Link
          to="/vehicles"
          onClick={() => setIsMenuOpen(false)}
          className={`block w-full py-2 px-4 rounded-md ${location.pathname === "/vehicles" ? "bg-blue-600 text-white" : "hover:bg-gray-100"}`}
        >
          Vehicles
        </Link>
      </li>
      <li className="w-full">
        <Link
          to="/booking"
          onClick={() => setIsMenuOpen(false)}
          className={`block w-full py-2 px-4 rounded-md ${location.pathname === "/booking" ? "bg-blue-600 text-white" : "hover:bg-gray-100"}`}
        >
          Booking
        </Link>
      </li>
      <li className="w-full">
        <Link
          to="/faq"
          onClick={() => setIsMenuOpen(false)}
          className={`block w-full py-2 px-4 rounded-md ${location.pathname === "/faq" ? "bg-blue-600 text-white" : "hover:bg-gray-100"}`}
        >
          FAQ
        </Link>
      </li>
      <li className="w-full">
        <Link
          to="/privacypolicy"
          onClick={() => setIsMenuOpen(false)}
          className={`block w-full py-2 px-4 rounded-md ${location.pathname === "/privacypolicy" ? "bg-blue-600 text-white" : "hover:bg-gray-100"}`}
        >
          T&C
        </Link>
      </li>
      <li className="w-full">
        <Link
          to="/contact"
          onClick={() => setIsMenuOpen(false)}
          className={`block w-full py-2 px-4 rounded-md ${location.pathname === "/contact" ? "bg-blue-600 text-white" : "hover:bg-gray-100"}`}
        >
          Contact
        </Link>
      </li>
    </ul>
  </div>
</div>

    </nav>
  );
};

export default Navbar;
