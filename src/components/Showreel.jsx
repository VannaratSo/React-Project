import React from "react";
import { useState } from "react";
import ANGKOR from '../assets/mockup (1).png'
import Phone from '../assets/mockup (2).png'
import Phone1 from '../assets/mockup (3).png'
const videos = [
  {
    id: ANGKOR,
    title: "Showreel 2025",
    thumbnail: ANGKOR,
  },
  {
    id: Phone,
    title: "",
    thumbnail: Phone,
  },
  {
    id: Phone1,
    title: "Bank",
    thumbnail: Phone1,
  },
  {
    id: "h",
    title: "Banking App",
    thumbnail: Phone,
  },
  {
    id: "VIDEO_ID_5",
    title: "Banking",
    thumbnail: "/thumbnails/spatial.jpg",
  },
];

const Showreel = () => {
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  return (
    <section className="bg-Showreel py-16 px-6 lg:px-20 text-center bg-white dark:bg-gray-800 transition-colors duration-300">
      <h2 className="text-3xl md:text-4xl font-bold text-dark mb-8  dark:text-white">
       Show <span className="text-blue-400">Reel</span>
      </h2>
      <p className="text-gray-400 mb-10 text-gray-600 dark:text-gray-300">
        Welcome to Delightech – powering innovation in finance.
      </p>

      <div className="relative aspect-video max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg shadow-blue-500/30 mb-8">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${activeVideo.id}?rel=0&showinfo=0`}
          title={activeVideo.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide max-w-5xl mx-auto ">
        {videos.map((video) => (
          <button
            key={video.id}
            onClick={() => setActiveVideo(video)}
            className={`flex-shrink-0 w-60 rounded-xl overflow-hidden bg-dark border-2 overflow-hidden shadow-lg shadow-blue-500/30 bg-black/20 backdrop-blur-lg text-gray-600 dark:text-gray-300border border-white/20  mb-8  ${
              activeVideo.id === video.id
                ? "border-blue-500"
                : "border-transparent hover:border-gray-500"
            }`}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-36 object-cover"
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Showreel;
