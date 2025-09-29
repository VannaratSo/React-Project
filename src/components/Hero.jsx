import { motion } from "framer-motion";
import mockup from "../assets/DLT.png";
import { useTranslation } from "react-i18next";
 
const Hero = () => {
  const { t } = useTranslation(["home","common"]);
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 py-6 lg:px-20 overflow-hidden gap-20 "
    >
      <div className="absolute inset-0 hero-gradient -z-10"></div>

      <div className=" items-center lg:items-start lg:text-left z-20">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white mb-8"
          
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
        {t("headline", { ns: "home" })}<span className="text-blue-500">{t("span", { ns: "home" })} </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200 max-w-md mb-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {t("description", { ns: "home" })}
        </motion.p>

        <motion.button
          className="px-6 py-3  hover:bg-blue-600 text-white rounded-3xl border transition duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          {t("explore", { ns: "common" })}
        </motion.button>
      </div>

      <motion.div
        className="flex-1/2 flex justify-center lg:mt-3 max-w-md"
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
          className="flex-1/2 w-auto max-w-[400px]  lg:max-w-[600px] drop-shadow-2xl"
        />
      </motion.div>
    </section>
  );
};

export default Hero;