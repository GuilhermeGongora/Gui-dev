"use client";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center">
      {/* Cabeçalho sempre fixo no topo */}
      <Header />

      {/* Container principal ocupando o espaço total */}
      <main className="flex flex-col flex-grow justify-center items-center container mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <Features />
      </main>

      {/* Seção CTA fixa na parte inferior */}
      <div className="mt-auto w-full">
        <CTASection />
      </div>
    </div>
  );
}
