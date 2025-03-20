"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    target: string
  ) => {
    e.preventDefault();
    document
      .querySelector(target)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className={`${
        scrolling
          ? "bg-neutral-950 transition-colors duration-700"
          : "bg-black transition-colors duration-700"
      } text-white py-4 px-6 shadow-md fixed w-full top-0 z-50`}
    >
      <div className="max-w-9xl mx-auto flex justify-between items-center space-x-1 md:px-44 lg:px-60 px-2">
        <Link
          href="/#HeroSection"
          onClick={(e) => handleSmoothScroll(e, "#HeroSection")}
          className="transition-colors text-[#00ff00] font-mono"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="relative text-[#00ff00] text-2xl font-mono font-bold transition-colors before:absolute before:bottom-0 before:left-0
              before:w-0 before:h-[2px] before:bg-[#00ff00] before:transition-all before:duration-300 hover:before:w-full"
          >
            <motion.h1>Guilherme Gongora</motion.h1>
          </motion.div>
        </Link>

        <nav className="flex space-x-6 text-lg mt-auto gap-5">
          <motion.div whileHover={{ scale: 1.5 }}>
            <Link
              href="/#About"
              onClick={(e) => handleSmoothScroll(e, "#About")}
              className="relative text-[#00ff00] font-mono 
              transition-colors before:absolute before:bottom-0 
              before:left-0 before:w-0 before:h-[2px] before:bg-[#00ff00] before:transition-all before:duration-300 hover:before:w-full"
            >
              <code>Sobre</code>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.5 }}>
            <Link
              href="/#Features"
              onClick={(e) => handleSmoothScroll(e, "#Features")}
              className="relative text-[#00AEEF] font-mono transition-colors before:absolute before:bottom-0 before:left-0 before:w-0 
               before:h-[2px] before:bg-[#00ff00] before:transition-all before:duration-300 hover:before:w-full"
            >
              <code>Sobre</code>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.5 }}>
            <Link
              href="/#Features"
              onClick={(e) => handleSmoothScroll(e, "#Features")}
              className="relative text-[#00ff00] font-mono transition-colors before:absolute before:bottom-0 
               before:left-0 before:w-0 before:h-[2px] before:bg-[#00ff00] before:transition-all before:duration-300 hover:before:w-full"
            >
              <code>Sobre</code>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.5 }}>
            <Link
              href="/#contact"
              onClick={(e) => handleSmoothScroll(e, "#Contact")}
              className="relative text-[#00ff00] font-mono transition-colors before:absolute before:bottom-0 before:left-
                before:w-0 before:h-[2px] before:bg-[#00ff00] before:transition-all before:duration-300 hover:before:w-full"
            >
              <code>Contato</code>
            </Link>
          </motion.div>
        </nav>
      </div>
    </motion.header>
  );
}
