import { motion } from "framer-motion";
import mockup from "../assets/iphone 16 Pro.png";
import mockup1 from "../assets/iphone 16 Pro.png";

const services = [
  {
    title: "LUYLEUN",
    highlight: "Moblie App",
    desc: "We provide premium service focused on financial innovation and digital excellence. Our experts craft unique solutions tailored to your business growth.",
    img: mockup1,
  },
  {
    title: "Bom nin",
    highlight: "Luy kak",
    desc: "Custom strategies designed for financial services. We deliver intuitive and user-friendly experiences, driving customer satisfaction and trust.",
    img: mockup,
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-Services py-20 px-6 lg:px-20 text-center flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
        Our <span className="text-blue-500">Services</span>
      </h2>

      <div className="space-y-28">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col  md:flex-row items-center md:items-center gap-20 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Section */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white leading-snug">
                {service.title}{" "}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  {service.highlight}
                </span>
              </h3>
              <p className="mt-4 text-gray-300 text-base leading-relaxed max-w-md mx-auto md:mx-0">
                {service.desc}
              </p>
              <button className="mt-6 px-6 py-2 rounded-full border border-blue-400 text-blue-300 hover:bg-blue-600 hover:text-white transition">
                Read more →
              </button>
            </div>

            {/* Image Section */}
            <div className="flex-1 flex justify-center md:justify-end">
              <img
                src={service.img}
                alt={service.highlight}
                className="w-64 md:w-80 lg:w-96 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;