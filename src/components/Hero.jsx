import { motion } from "framer-motion";
import mockup from "../assets/mockup.png";
const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 overflow-hidden"
    >
      <div className="absolute inset-0 hero-gradient -z-10"></div>

      <div className=" items-center lg:items-start lg:text-left z-10">
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-white max-h-md mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Innovating Finance.  <span className="text-blue-500">Empowering Lives. </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200 max-w-md mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          At Delightech Co., Ltd., we specialize in creating technology-driven financial solutions that make life easier, faster, and more secure. Our flagship product, LUYLEUN, is redefining access to instant loans in Cambodia.
        </motion.p>

        <motion.button
          className="px-6 py-3  hover:bg-blue-600 text-white rounded-3xl border transition duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Explore more →
        </motion.button>
      </div>

      {/* Right: Floating Mockup */}
      <motion.div
        className="flex-1/2 flex justify-center mt-10 lg:mt-3 max-w-md"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          y: [0, -15, 0],
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <img
          src={mockup}
          alt="Mockup"
          className="flex-1/2 w-auto max-w-[1000px] sm:max-w-[1000px] md:max-w-[400px] lg:max-w-[800px] drop-shadow-2xl"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
