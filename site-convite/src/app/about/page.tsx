"use client";

import { Typewriter } from "react-simple-typewriter";
import Header from "../components/Header";
import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <>
      <Header />

      <div className="min-h-screen  bg-black text-[#00ff00] flex flex-col md:flex-row items-center justify-center ">
        {/* Imagem animada */}
        <motion.div className="flex flex-col items-center justify-center p- font-mono">
          <motion.img
            className="w-48 h-48 m-5 rounded-full object-cover shadow-lg mb-6 transition-transform duration-500 ease-in-out hover:scale-110"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeIn" }}
            src="/images/eu.jpg"
            alt="Foto do desenvolvedor Guilherme Góngora"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-mono "
          >
            <h2 className="font-mono font-bold text-3x1">
              <Typewriter
                words={[
                  "Domine os mais diversos assuntos do mundo da tecnologia!",
                ]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                cursorColor="#22c55e"
              />
            </h2>
          </motion.div>
        </motion.div>

        {/* Caixa de texto animada */}
        <motion.div
          className="p-6 rounded-lg shadow-lg max-w-xl text-center md:text-left gap-6 transition duration-700 ease-in-out hover:bg-slate-950 hover:scale-105"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.p
            className="text-xl text-[#00ff00] leading-relaxed font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            Gosto de desafios, afinal, eles fazem parte da jornada e devem ser
            pensados logicamente e resolvidos com precisão. Estudante de TI na
            Escola e Faculdade Fortec, tenho experiência com desenvolvimento de
            softwares, interfaces e jogos. Atuo em projetos Back-end e
            Front-end. No tempo livre, gosto de programar projetos pessoais,
            praticar atividades físicas, jogar online, estudar astronomia e
            física, ler livros e assistir filmes e séries.
          </motion.p>
        </motion.div>
      </div>
    </>
  );
}
