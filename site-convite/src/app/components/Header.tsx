"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="bg-slate-950 text-white py-4 px-6 shadow-md fixed w-full top-0 z-50"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-2xl font-bold cursor-pointer"
          >
            MeuProjeto
          </motion.div>
        </Link>

        {/* Navegação */}
        <nav className="flex space-x-6 text-lg">
          <Link href="/" className="hover:text-red-300 transition-colors">
            Início
          </Link>
          <Link
            href="/sobre"
            className="hover:text-slate-300 transition-colors"
          >
            Sobre
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-300 transition-colors"
          >
            Contato
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
