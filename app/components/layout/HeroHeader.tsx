"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroHeader() {
    return (
        <header className="relative h-[40vh] flex flex-col items-center justify-center overflow-hidden">
            {/* Luz de fondo radial dorada */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d4af37]/10 via-transparent to-transparent opacity-50" />

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-64 h-64"
            >
                <Image
                    src="/medusa-logo.png"
                    alt="MEDUSA Logo"
                    fill
                    className="object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                    priority
                />
            </motion.div>
        </header>
    );
}