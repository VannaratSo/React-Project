import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./i18n";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Services from "./components/Services";
import About from "./components/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ThemeProvider } from "./Context/ThemeContext";
import { AuthProvider } from "./Context/AuthContext";
import RequireAuth from "./components/RequireAuth";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <div className="min-h-screen light:bg-gray-300 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/dashboard"
                element={
                  <RequireAuth>
                    <Dashboard />
                  </RequireAuth>
                }
              />
              {/* 👇 remove duplicate "/" route */}
              {/* <Route path="/" element={<Navigate to="/dashboard" replace />} /> */}
            </Routes>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
