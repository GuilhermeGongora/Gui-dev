"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

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
      <div className="max-w-9xl mx-auto flex justify-between items-center">
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-2xl font-bold cursor-pointer text-[#00ff00]"
          >
            <Typewriter
              words={["Guilherme Gongora"]}
              loop={1}
              cursor
              cursorStyle="|"
              deleteSpeed={50}
              cursorColor="#00ff00" // Tailwind green-500
            />
          </motion.div>
        </Link>

        <nav className="flex space-x-6 text-lg">
          <motion.div whileHover={{ scale: 1.5 }}>
            <Link
              href="/#About"
              onClick={(e) => handleSmoothScroll(e, "#About")}
              className="transition-colors text-[#00ff00] font-mono"
            >
              <Typewriter
                words={["Sobre"]}
                loop={1}
                cursor
                cursorStyle="|"
                deleteSpeed={50}
                cursorColor="#00ff00" // Tailwind green-500
              />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.5 }}>
            <Link
              href="/#Features"
              onClick={(e) => handleSmoothScroll(e, "#Features")}
              className="hover:text-slate-300 transition-colors font-mono"
            >
              <Typewriter
                words={["Sobre"]}
                loop={1}
                cursor
                cursorStyle="|"
                deleteSpeed={50}
                cursorColor="#00ff00" // Tailwind green-500
              />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.5 }}>
            <Link
              href="/#Contato"
              onClick={(e) => handleSmoothScroll(e, "#Contact")}
              className="transition-colors text-[#00ff00] font-mono"
            >
              <Typewriter
                words={["Contato"]}
                loop={1}
                cursor
                cursorStyle="|"
                deleteSpeed={50}
                cursorColor="#00ff00" // Tailwind green-500
              />
            </Link>
          </motion.div>
        </nav>
      </div>
    </motion.header>
  );
}
