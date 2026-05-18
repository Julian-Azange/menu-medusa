// app/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { QrCode, MapPin, PhoneCall, ChevronRight } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="h-[100dvh] bg-[#050505] text-white flex flex-col items-center justify-center relative overflow-hidden selection:bg-[#d4af37]/30">

      {/* BOTÓN FLOTANTE DEL QR (Esquina superior derecha) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute top-6 right-6 sm:top-8 sm:right-8 z-50"
      >
        <Link href="/qr">
          <button className="flex items-center gap-2 bg-[#111111]/80 backdrop-blur-md border border-white/10 text-[#d4af37] hover:bg-white/10 hover:text-white px-4 py-2 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:scale-105">
            <QrCode className="w-4 h-4" />
            <span className="text-xs sm:text-sm tracking-wide">QR Mesa</span>
          </button>
        </Link>
      </motion.div>

      {/* FONDO DINÁMICO CON ORBES DE LUZ */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[5%] left-[10%] w-[20rem] h-[20rem] md:w-[40rem] md:h-[40rem] bg-[#d4af37]/10 rounded-full blur-[100px] mix-blend-screen"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 20, 0],
            y: [0, 40, -30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[5%] right-[10%] w-[18rem] h-[18rem] md:w-[35rem] md:h-[35rem] bg-[#1a4a38]/20 rounded-full blur-[100px] mix-blend-screen"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-4xl h-full py-8 md:py-16">

        {/* Logo Medusa */}
        <motion.div
          initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 mt-4 mb-4 md:mt-8 md:mb-8 shrink-0"
        >
          <Image
            src="/medusa-logo.png"
            alt="MEDUSA Logo"
            fill
            className="object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.2)]"
            priority
          />
        </motion.div>

        {/* Slogan Poético */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-12 md:mb-16 relative px-2"
        >
          <p className="text-base sm:text-lg md:text-2xl font-serif text-gray-300 italic tracking-wide max-w-xl mx-auto leading-loose">
            "Cambiamos vidas a través de experiencias <span className="text-[#d4af37] font-semibold">mágicas</span> e <span className="text-[#d4af37] font-semibold">inolvidables</span>."
          </p>
        </motion.div>

        {/* BOTÓN PRINCIPAL - HOMOLOGADO AL ESTILO DEL BOTÓN QR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center w-full"
        >
          <Link href="/menu">
            <button className="group flex items-center gap-3 bg-[#111111]/80 backdrop-blur-md border border-white/10 text-[#d4af37] hover:bg-white/10 hover:text-white px-12 py-4 rounded-full font-bold text-lg md:text-xl transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] hover:scale-105 shrink-0">
              Explorar la Carta
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </motion.div>

        {/* TARJETAS DE INFORMACIÓN (GLASSMORPHISM) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="w-full max-w-lg grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 mt-12 md:mt-20 shrink-0"
        >
          {/* Ubicación */}
          <div className="flex items-center gap-5 bg-white/[0.02] border border-white/10 backdrop-blur-xl p-6 md:p-8 rounded-2xl hover:bg-white/[0.04] transition-colors shadow-2xl">
            <div className="bg-[#d4af37]/10 p-2.5 rounded-full flex-shrink-0">
              <MapPin className="w-5 h-5 text-[#d4af37]" />
            </div>
            <div className="text-left flex flex-col gap-1.5">
              <p className="text-[#d4af37] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-0.5">Ubicación</p>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">Variante principal<br />Calle 7 #5 - 30, Altamira</p>
            </div>
          </div>

          {/* Reservas */}
          <a
            href="https://wa.me/573147819983"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-5 bg-white/[0.02] border border-white/10 backdrop-blur-xl p-6 md:p-8 rounded-2xl hover:bg-white/[0.04] transition-colors shadow-2xl cursor-pointer group"
          >
            <div className="bg-[#d4af37]/10 p-2.5 rounded-full flex-shrink-0 group-hover:bg-[#d4af37]/20 transition-colors">
              <PhoneCall className="w-5 h-5 text-[#d4af37]" />
            </div>
            <div className="text-left flex flex-col gap-1.5">
              <p className="text-[#d4af37] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-0.5">Reservas</p>
              <p className="text-gray-200 text-lg md:text-xl font-medium tracking-wide leading-none">314 781 9983</p>
            </div>
          </a>
        </motion.div>

      </div>
    </main>
  );
}