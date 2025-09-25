import React from "react";
import mockup from "../assets/Bomnin.png";
import mockup1 from "../assets/luyleun (2).png";

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
    <section id="services" className="py-40 px-6 lg:px-20 text-center flex flex-col items-center bg-white dark:bg-gray-800 transition-colors duration-300">
      <h2 className="text-5xl md:text-4xl font-bold text-dark text-center mb-6 text-lg  dark:text-white">
        Our <span className="text-blue-500">Services</span>
      </h2>

      <div className="space-y-28">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col  md:flex-row items-center md:items-center gap-40 ${
              index % 2 == 1 ? "md:flex-row-reverse" : ""
            }`}
          >

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white  leading-snug">
                {service.title}{" "}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  {service.highlight}
                </span>
              </h3>
              <p className="mt-4 text-gray-300 text-gray-800 dark:text-white text-base leading-relaxed max-w-md mx-auto md:mx-0">
                {service.desc}
              </p>
              <button className="mt-6  dark:text-white  px-6 py-2 rounded-full border dark:border-white hover:bg-blue-600 hover:text-white transition">
                Read more →
              </button>
            </div>

            <div className="flex-1/2 flex justify-center md:justify-end">
              <img
                src={service.img}
                alt={service.highlight}
                className="w-64 md:w-1 lg:w-96"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;