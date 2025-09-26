// src/components/LatestNewsDelightech.jsx
import React from "react";
import { ArrowRight } from "lucide-react";

const newsData = [
  {
    date: "20 SEP 2025",
    title: "Delightech Launches New Corporate Website",
    image: "https://via.placeholder.com/600x400",
    link: "#",
  },
  {
    date: "10 SEP 2025",
    title: "Our Team Attends Cambodia Tech Expo 2025",
    image: "https://via.placeholder.com/600x400",
    link: "#",
  },
  {
    date: "30 AUG 2025",
    title: "Partnership Announcement with Global Tech Innovators",
    image: "https://via.placeholder.com/600x400",
    link: "#",
  },
  {
    date: "15 AUG 2025",
    title: "Celebrating 2 Years of Innovation at Delightech",
    image: "https://via.placeholder.com/600x400",
    link: "#",
  },
];

const LatestNews = () => {
  return (
    <section id="LatestNews" className="py-40 px-6 lg:px-20 text-center light:bg-gray-800 flex flex-col items-center bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-white uppercase">
            Latest<span className="text-blue-500"> News</span>
          </h2>
          <a
            href="#"
            className="text-blue-600 font-medium hover:underline flex items-center gap-1"
          >
          </a>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
          {newsData.map((item, index) => (
            <a
              href={item.link}
              key={index}
              className="group block rounded-xl overflow-hidden border border-gray-300 dark:border-white/20 shadow-sm hover:shadow-md hover:border-blue-600 transition"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-xs font-medium bg-white text-blue-600 px-3 py-1 rounded-full shadow">
                  {item.date}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
                  {item.title}
                </h3>
                <span className="flex items-center gap-1 text-sm text-green-600 mt-4 font-medium">
                  Read More <ArrowRight size={16} />
                </span>
              </div>
            </a>
          ))}
        </div>
    </section>
  );
};

export default LatestNews;
