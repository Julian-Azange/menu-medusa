// app/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { QrCode } from "lucide-react"; // Importamos el icono para el botón secundario

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Luz de fondo ambiental */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d4af37]/15 via-[#050505] to-[#050505] opacity-60" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-3xl">

        {/* Logo Animado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-64 h-64 md:w-80 md:h-80 mb-6"
        >
          <Image
            src="/medusa-logo.png"
            alt="MEDUSA Logo"
            fill
            className="object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.2)]"
            priority
          />
        </motion.div>

        {/* Textos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-6xl font-serif text-[#d4af37] mb-2 tracking-widest uppercase">
            Medusa
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 mb-8 tracking-[0.3em] uppercase font-light">
            Gastro Bar
          </p>
          <p className="text-sm md:text-base text-gray-500 mb-12 max-w-md mx-auto leading-relaxed">
            Altamira, Huila • Una experiencia sensorial donde la coctelería de autor y la alta cocina se encuentran.
          </p>
        </motion.div>

        {/* Botones de Acción Agrupados */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center gap-5"
        >
          {/* Botón Principal - Ver Menú */}
          <Link href="/menu">
            <button className="bg-[#d4af37] text-black hover:bg-[#b5952f] text-lg md:text-xl px-12 py-4 rounded-full font-bold transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] hover:scale-105">
              Ver Menú Digital
            </button>
          </Link>

          {/* Botón Secundario - Ir al QR */}
          <Link href="/qr">
            <button className="flex items-center gap-2 bg-transparent text-[#d4af37] border border-[#d4af37]/30 hover:bg-[#d4af37]/10 hover:border-[#d4af37] text-sm md:text-base px-6 py-2.5 rounded-full font-medium transition-all duration-300">
              <QrCode className="w-4 h-4" />
              Obtener QR
            </button>
          </Link>
        </motion.div>

      </div>
    </main>
  );
}