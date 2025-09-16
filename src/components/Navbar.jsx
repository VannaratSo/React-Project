import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaYoutube,
  FaBars,
} from "react-icons/fa";
import { FiX } from "react-icons/fi";
import logo from "../assets/DLT (2).png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-md bg-white/10 border-b border-white/30">
        <div className="flex justify-between items-center px-6 md:px-12 py-5">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-10 w-10" />
          </div>
          <div className="hidden md:flex space-x-8 text-white font-medium">
            <Link to="/" className="hover:text-blue-300 transition">
              Home
            </Link>
            <Link to="/services" className="hover:text-blue-300 transition">
              Services
            </Link>
            <Link to="/portfolio" className="hover:text-blue-300 transition">
              Business Portfolio
            </Link>
            <Link to="/contact" className="hover:text-blue-300 transition">
              Contact
            </Link>
          </div>

    
          <div className="hidden md:flex space-x-6 text-white">
            <a href="#"><FaFacebookF className="hover:text-blue-400" /></a>
            <a href="#"><FaInstagram className="hover:text-pink-400" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-blue-500" /></a>
            <a href="#"><FaTelegramPlane className="hover:text-sky-400" /></a>
            <a href="#"><FaYoutube className="hover:text-red-500" /></a>
          </div>

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FaBars />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden flex flex-col items-center bg-black/10 backdrop-blur-md text-white space-y-5 py-4">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/services" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link to="/portfolio" onClick={() => setIsOpen(false)}>
              Business Portfolio
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <div className="flex space-x-4 pt-4">
              <a href="#"><FaFacebookF className="hover:text-blue-400" /></a>
              <a href="#"><FaInstagram className="hover:text-pink-400" /></a>
              <a href="#"><FaLinkedinIn className="hover:text-blue-500" /></a>
              <a href="#"><FaTelegramPlane className="hover:text-sky-400" /></a>
              <a href="#"><FaYoutube className="hover:text-red-500" /></a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
