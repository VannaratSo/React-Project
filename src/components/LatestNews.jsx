import React from "react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import new1 from '../assets/1.png'
import new2 from '../assets/2.png'

const newsData = [
  {
    date: "20 SEP 2025",
    title: "Delightech Launches New Corporate Website",
    image: new1,
    link: "#",
  },
  {
    date: "10 SEP 2025",
    title: "Our Team Attends Cambodia Tech Expo 2025",
    image: new2,
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
   const { t } = useTranslation(["lastnews"]);
  return (
    <section id="LatestNews" className="py-40 px-6 lg:px-20 text-center light:bg-gray-800 flex flex-col items-center bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-white uppercase">
            {t("headline", { ns: "lastnews" })}<span className="text-blue-500"> {t("span", { ns: "lastnews" })}</span>
          </h2>
          <a
            href="#"
            className="text-blue-600 font-medium hover:underline flex items-center gap-1"
          >
          </a>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8">
          {newsData.map((item, index) => (
            <a
              href={item.link}
              key={index}
              className="rounded-2xl overflow-hidden dark:bg-white/10 backdrop-blur-lg border border-white/40 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-xs font-medium bg-black/10 text-gray-200 px-3 py-1 rounded-full shadow">
                  {item.date}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-dark dark:text-white group-hover:text-blue-600 transition">
                  {item.title}
                </h3>
                <span className="flex items-center gap-1 text-sm text-blue-600 mt-4 font-medium">
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
