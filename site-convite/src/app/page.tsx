"use client";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Features from "./components/Skills";
import CTASection from "./components/CTASection";
import Contato from "./contact/page";
import About from "./about/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-x-hidden">
      {/* Cabeçalho sempre fixo no topo */}
      <Header />

      {/* Container principal ocupando o espaço total */}
      <main className="flex flex-col flex-grow justify-center items-center container mx-auto px-4 sm:px-6 lg:px-8">
        <section
          id="HeroSection"
          className="flex flex-col justify-center items-center min-h-screen bg-black text-center p-10 "
        >
          <HeroSection />
        </section>
        <section id="About">
          <About />
        </section>
        <section id="Features">
          <Features />
        </section>
      </main>

      {/* Seção CTA fixa na parte inferior */}
      <div className="mt-auto w-full">
        <CTASection />
        <section id="Contact">
          <Contato />
        </section>
      </div>
    </div>
  );
}
