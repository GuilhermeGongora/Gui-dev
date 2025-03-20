"use client";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  return (
    <div className="text-center  bg-black min-h-screen flex flex-col  items-center justify-center px-4">
      <motion.code
        className="text-3xl md:text-6xl lg:text-7xl font-bold text-[#00ff00] flex  font-mono m-auto my-10  text-center"
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

      <motion.h5
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00ff00] flex  font-mono mt-1 my-10  text-center "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typewriter
          words={["Desenvolvedor de Software"]}
          loop={1}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          cursorColor="#00ff00"
        />
      </motion.h5>

      <div className="mt-6 w-full flex justify-center">
        <motion.a
          href="/CV_Guilherme_Gongora.pdf"
          target="_blank "
          rel="noreferrer"
          className="
        mt-4 bg-black text-[#00ff00] border-2 px-6 py-3 rounded-lg 
        border-solid border-[#00ff00] shadow-[0_0_10px_#00ff00] 
        font-bold font-mono transition-all ease-in-out 
      "
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          whileHover={{
            scale: 1.1,
            color: "#00ff00",
            boxShadow: "0px 0px 20px #00ff00",
            transition: { duration: 0.1, ease: "easeInOut" },
          }}
          whileTap={{ scale: 0.9 }}
        >
          Download CV
        </motion.a>
      </div>
    </div>
  );
}
