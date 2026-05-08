// app/menu/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { menuData } from "@/lib/data";
import { ChevronLeft } from "lucide-react";
import { CategoryTabs } from "../components/layout/menu/CategoryTabs";
import { ProductCard } from "../components/layout/menu/ProductCard";

export default function MenuPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white pb-24 font-sans relative overflow-x-hidden">

            {/* --- DESTELLOS NEÓN DE FONDO --- */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[100px] mix-blend-screen"></div>
                <div className="absolute top-1/2 -right-20 w-80 h-80 bg-[#1a4a38]/20 rounded-full blur-[100px] mix-blend-screen"></div>
            </div>

            <div className="relative z-10">
                {/* --- HEADER CON LOGO Y BOTÓN ATRÁS --- */}
                <header className="flex items-center justify-between px-6 pt-10 pb-6">
                    {/* Botón Volver */}
                    <Link
                        href="/"
                        className="p-2 bg-[#111111]/80 backdrop-blur-md rounded-full border border-white/10 hover:bg-white/5 transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6 text-[#d4af37]" />
                    </Link>

                    {/* Logo (Tamaño ajustado para cabecera) */}
                    <div className="relative w-20 h-20">
                        <Image
                            src="/medusa-logo.png"
                            alt="Medusa Logo"
                            fill
                            className="object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                            priority
                        />
                    </div>

                    {/* Placeholder invisible para que el flexbox mantenga el logo perfectamente centrado */}
                    <div className="w-10 h-10"></div>
                </header>

                {/* --- CONTENIDO PRINCIPAL --- */}
                <div className="px-6">
                    <Tabs defaultValue="cocteles" className="w-full">
                        <CategoryTabs categories={menuData.categories} />

                        {Object.entries(menuData.items).map(([categoryKey, items]) => (
                            <TabsContent
                                key={categoryKey}
                                value={categoryKey}
                                className="grid grid-cols-1 gap-4 mt-2 outline-none"
                            >
                                {items.map((item, index) => (
                                    <ProductCard key={item.id} item={item} index={index} />
                                ))}
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </div>
        </main>
    );
}