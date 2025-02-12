"use client";

import Header from "../components/Header";
import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 ">
        {/* Imagem animada */}
        <motion.img
          className="w-48 h-48 rounded-full object-cover shadow-lg mb-6 scale-95 hover:scale-120"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          src="/images/eu.jpg"
          alt="Minha foto"
        />

        {/* Caixa de texto animada */}
        <motion.div
          className="bg-slate-800 p-6 rounded-lg shadow-lg max-w-4xl text-center md:text-left  hover:bg-slate-950 transition duration-700 ease-in-out"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.p
            className="text-lg text-gray-300 selection:bg-fuchsia-300 selection:text-fuchsia-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            Gosto de desafios, afinal, eles fazem parte da jornada, devem ser
            pensados logicamente e resolvidos de forma precisa. Estudante de TI
            na Escola e Faculdade Fortec, tenho experiências com projetos de
            desenvolvimento de softwares, interfaces e jogos. Desenvolvimento de
            projetos nos ramos Back-end e Front-end. Em momentos de lazer,
            desenvolvo alguns projetos pessoais com programação, gosto de
            praticar atividades físicas, jogar jogos online, estudar conteúdos
            de astronomia e física, ler livros, ver filmes e séries.
          </motion.p>
        </motion.div>
      </div>
    </>
  );
}
