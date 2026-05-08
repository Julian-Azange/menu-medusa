// components/menu/ProductCard.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MenuItem } from "@/lib/types";
import { X, Check } from "lucide-react";

interface ProductCardProps {
    item: MenuItem;
    index: number;
}

export function ProductCard({ item, index }: ProductCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const ingredientsList = item.description.split(',').map(i => i.trim()).filter(i => i.length > 0);

    return (
        <>
            {/* TARJETA HORIZONTAL (1 Columna) */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsModalOpen(true)}
                className="cursor-pointer bg-[#111111]/80 backdrop-blur-md border border-white/5 rounded-[2rem] p-3 flex items-center shadow-lg hover:border-[#d4af37]/30 transition-colors"
            >
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-black/50 shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>

                <div className="ml-4 flex flex-col flex-grow justify-center h-full">
                    <h3 className="text-white font-bold text-base sm:text-lg leading-tight mb-1 line-clamp-1">
                        {item.name}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm line-clamp-2 mb-3 pr-2">
                        {item.description}
                    </p>

                    <div className="mt-auto flex items-center gap-2">
                        {item.type && (
                            <span className="bg-[#d4af37] text-black text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full">
                                {item.type}
                            </span>
                        )}
                        <span className="text-[#d4af37] font-bold text-sm bg-[#d4af37]/10 px-3 py-1 rounded-xl">
                            {item.price}
                        </span>
                    </div>
                </div>
            </motion.div>

            {/* MINI MODAL (Aparece al hacer tap) */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
                        {/* Fondo oscuro desenfocado */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-black/70 backdrop-blur-md"
                        />

                        {/* Contenedor del Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-[#0a0a0a] border border-[#d4af37]/20 rounded-[2rem] p-6 w-full max-w-sm shadow-[0_0_50px_rgba(212,175,55,0.1)] z-10"
                        >
                            {/* BOTÓN CERRAR - ESTILO GLASS Y Z-INDEX 50 */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation(); // Evita clics fantasma
                                    setIsModalOpen(false);
                                }}
                                className="absolute top-4 right-4 z-50 p-2 bg-black/40 backdrop-blur-xl border border-white/20 rounded-full text-white/80 hover:text-white hover:bg-black/60 hover:scale-110 transition-all shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-5">
                                <Image src={item.image} alt={item.name} fill className="object-cover" />
                            </div>

                            <h2 className="text-2xl font-serif text-[#d4af37] mb-2">{item.name}</h2>

                            <div className="flex items-center gap-2 mb-4">
                                <span className="inline-block text-[#d4af37] font-bold text-lg bg-[#d4af37]/10 px-3 py-1 rounded-xl">
                                    {item.price}
                                </span>
                                {item.type && (
                                    <span className="bg-[#d4af37] text-black text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full">
                                        {item.type}
                                    </span>
                                )}
                            </div>

                            {/* Lista de ingredientes */}
                            <div className="space-y-3 mt-2">
                                <h4 className="text-sm text-gray-400 uppercase tracking-widest border-b border-white/10 pb-2 mb-3">
                                    Ingredientes & Detalles
                                </h4>
                                <ul className="space-y-2">
                                    {ingredientsList.map((ingredient, i) => (
                                        <li key={i} className="flex items-start text-sm text-gray-300">
                                            <Check className="w-4 h-4 text-[#d4af37] mr-2 shrink-0 mt-0.5" />
                                            <span className="capitalize">{ingredient}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {item.note && (
                                <div className="mt-5 p-3 bg-white/5 rounded-xl border border-white/5">
                                    <p className="text-xs text-gray-400 italic">💡 {item.note}</p>
                                </div>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}