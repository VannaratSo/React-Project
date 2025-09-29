import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./i18n";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Services from "./components/Services";
import About from "./components/About";
import { ThemeProvider } from './Context/ThemeContext';

function App() {
  return (
     
    <ThemeProvider>
    <Router className="min-h-screen light:bg-gray-300 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
           <Route path="/About" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </Router>
    </ThemeProvider>
    
  );
}

export default App;
