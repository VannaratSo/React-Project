import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="backdrop-blur-lg bg-white/10 border-t border-white/20 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <h2 className="text-2xl font-bold">Delightech</h2>
        <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-gray-200 text-sm">
          <li><a href="#home" className="hover:text-blue-300">Home</a></li>
          <li><a href="#services" className="hover:text-blue-300">Services</a></li>
          <li><a href="#team" className="hover:text-blue-300">Team</a></li>
          <li><a href="#about" className="hover:text-blue-300">About</a></li>
          <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
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
      </div>
      <div className="mt-8 text-center text-gray-400 text-xs">
        © {new Date().getFullYear()} Delightech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
