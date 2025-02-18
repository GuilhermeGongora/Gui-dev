"use client";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import DownloadComponent from "./DownloadComponent";

export default function HeroSection() {
  return (
    <div className="text-center py-10 bg-black min-h-screen flex flex-col items-center justify-center px-4">
      <motion.code
        className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#00ff00] font-mono m-auto my-10 break-all text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typewriter
          words={["Console.log(Guilherme Gongora);"]}
          loop={1}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          cursorColor="#00ff00"
        />
      </motion.code>

      <motion.h2
        className="text-xl md:text-3xl lg:text-4xl font-bold text-[#00ff00] py-5 font-mono"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Typewriter
          words={["Domine os mais diversos assuntos do mundo da tecnologia!"]}
          loop={1}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          cursorColor="#22c55e"
        />
      </motion.h2>

      <div className="mt-6 w-full flex justify-center">
        <DownloadComponent />
      </div>
    </div>
  );
}
