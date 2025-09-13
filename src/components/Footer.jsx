
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTelegram } from "react-icons/fa";
import DLT1 from '../assets/tagline (1).png'
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-1 grid md:grid-cols-3 gap-12">
        <div>
          <img className="h-12" src={DLT1} alt="Delightech Logo" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="/services" className="hover:text-blue-400 transition">Services</a></li>
            <li><a href="/team" className="hover:text-blue-400 transition">Team</a></li>
            <li><a href="/about" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="/investor" className="hover:text-blue-400 transition">Investor</a></li>
          </ul>
        </div>

        {/* Column 3 - Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
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
          <a href="https://telegram.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
            <FaTelegram />
          </a>
        </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Delightech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
