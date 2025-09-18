
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTelegram, FaYoutube,} from "react-icons/fa";
import DLT1 from '../assets/tagline (1).png'
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-3 gap-8">
        <div>
          <img className="h-12" src={DLT1} alt="Delightech Logo" />
        </div>
        <div>
          <h3 className="text-lg font-semibold  text-blue-500 mb-4">Quick Links</h3>
          <ul className=" space-y-2">
            <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="/services" className="hover:text-blue-400 transition">Services</a></li>
            <li><a href="/team" className="hover:text-blue-400 transition">Business Portfolio</a></li>
            <li><a href="/about" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-500 mb-4">Follow Us</h3>
         <div className="flex flex  space-x-4 pt-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
            <FaFacebook />
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
           <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-red-400">
            <FaYoutube/>
          </a>
        </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
         {new Date().getFullYear()} Delightech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
