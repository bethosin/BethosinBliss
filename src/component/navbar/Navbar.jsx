import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Bethosin Bliss Logo"
            className="h-16 md:h-20 w-auto object-contain transition duration-300 hover:scale-105"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8 text-blue-900 font-medium">
          <Link to="/" className="hover:text-blue-700">
            Home
          </Link>
          <Link to="/products" className="hover:text-blue-700">
            Shop
          </Link>
          <Link to="/contact" className="hover:text-blue-700">
            Contact
          </Link>
        </div>

        {/* HAMBURGER */}
        <button
          className="md:hidden text-blue-900 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4 space-y-4 text-blue-900">
          <Link onClick={() => setIsOpen(false)} to="/" className="block">
            Home
          </Link>

          <Link
            onClick={() => setIsOpen(false)}
            to="/products"
            className="block"
          >
            Shop
          </Link>

          <Link
            onClick={() => setIsOpen(false)}
            to="/contact"
            className="block"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
