import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Services from "./components/Services";
import About from "./components/About";


function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-20">
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
  );
}

export default App;
