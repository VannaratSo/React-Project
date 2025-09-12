import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTelegram } from "react-icons/fa";
import DLT1 from '../assets/DLT1.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] md:w-[85%] rounded-2xl z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/20 backdrop-blur-xl border border-blue/30 shadow-lg"
          : "bg-white/10 backdrop-blur-lg border border-blue/20"
      }`}
    >
      
      <div className="flex items-center justify-between px-6 py-3">
        <img className="h-10" src={DLT1} alt="Delightech Logo" />

        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li className="hover:text-blue-400 transition cursor-pointer">Home</li>
          <li className="hover:text-blue-400 transition cursor-pointer">Services</li>
          <li className="hover:text-blue-400 transition cursor-pointer">Investor</li>
          <li className="hover:text-blue-400 transition cursor-pointer">Business Portfolio</li>
          <li className="hover:text-blue-400 transition cursor-pointer">Contact</li>
        </ul>
         <div className="flex space-x-4 text-lg">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-400">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
            <FaLinkedinIn />
          </a>
        </div>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black/70 backdrop-blur-xl border-t border-white/20 rounded-b-2xl px-6 py-4 space-y-4 text-white">
          <a href="#" className="block hover:text-blue-400">Home</a>
          <a href="#" className="block hover:text-blue-400">Services</a>
          <a href="#" className="block hover:text-blue-400">Showreel</a>
          <a href="#" className="block hover:text-blue-400">Team</a>
          <a href="#" className="block hover:text-blue-400">Contact</a>
          <div className="flex gap-6 pt-4 text-lg">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
              <FaLinkedinIn />
            </a>
            <a href="https://telegram.org" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
              <FaTelegram />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
