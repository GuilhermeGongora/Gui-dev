"use client";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <div className="bg-black-100 dark:bg-black-900 min-h-screen flex flex-col">
      <Header />

      {/* Conteúdo principal */}

      <HeroSection />
      <Features />

      {/* Seção CTA adicionada */}
      <CTASection />
    </div>
  );
}
