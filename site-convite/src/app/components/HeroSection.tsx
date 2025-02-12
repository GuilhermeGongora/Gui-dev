"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="text-center py-20 bg-slate-950">
      <motion.h1
        className="text-6xl font-bold text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 10, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        GE, EU TE AMO MUITO, AMOR!💖💕
      </motion.h1>
      <motion.p
        className="text-2xl font-bold text-white py-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 10, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Domine Git, JavaScript, Next.js, PostgreSQL e muito mais!
      </motion.p>
      <motion.button
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Quero me inscrever
      </motion.button>
    </div>
  );
}
