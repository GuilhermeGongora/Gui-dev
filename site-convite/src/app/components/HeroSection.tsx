"use client";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import DownloadComponent from "./DownloadComponent";

export default function HeroSection() {
  return (
    <div className="text-center py-10 bg-black ">
      <motion.h1
        className="text-7xl font-bold text-[#00ff00] font-mono my-10"
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
          cursorColor="#00ff00" // Tailwind green-500
        />
      </motion.h1>
      <motion.h2
        className="text-4nx1 font-bold text-[#00ff00] py-5 font-mono"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
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

      <DownloadComponent />
    </div>
  );
}
