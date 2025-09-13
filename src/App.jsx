import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Showreel from "./components/Showreel"
import Team from './components/Team'
import Services from './components/Services'
import Footer from './components/Footer'
function App() {
  return (
    <div className="relative min-h-screen text-white">
      <div className="absolute inset-0 bg-darklight-blue animate-gradient -z-10"></div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Showreel />
      <Team />
      <Footer/>
    </div>
  )
}

export default App
