// components/menu/CategoryTabs.tsx
"use client";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Category } from "@/lib/types";

interface CategoryTabsProps {
    categories: Category[];
}

const getCategoryIcon = (label: string) => {
    const lowerLabel = label.toLowerCase();
    if (lowerLabel.includes("cócteles") || lowerLabel.includes("sodas")) return "🍹";
    if (lowerLabel.includes("cervezas")) return "🍺";
    if (lowerLabel.includes("licores") || lowerLabel.includes("vinos")) return "🍷";
    if (lowerLabel.includes("comidas") || lowerLabel.includes("picadas")) return "🍔";
    return "🍽️";
};

export function CategoryTabs({ categories }: CategoryTabsProps) {
    return (
        // 1. Damos un colchón vertical generoso (pb-8) para la sombra y el escalado
        <div className="w-full overflow-x-auto no-scrollbar pt-4 pb-8 mb-2 -mt-2">

            {/* 2. Usamos !h-auto y !p-0 para matar las restricciones de Shadcn */}
            <TabsList className="inline-flex gap-3 px-4 bg-transparent !h-auto !p-0 border-none">
                {categories.map((cat) => (
                    <TabsTrigger
                        key={cat.id}
                        value={cat.id}
                        className="
              group flex flex-col items-center justify-center 
              w-[90px] h-[90px] px-2 rounded-[22px] 
              bg-[#151515] border border-white/5 
              shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)]
              data-[state=active]:bg-[#2a2515] data-[state=active]:border-[#d4af37]/40 
              data-[state=active]:shadow-[0_0_20px_rgba(212,175,55,0.2)]
              transition-all duration-300
              outline-none focus:outline-none focus-visible:ring-0 select-none
            "
                    >
                        <span className="text-[28px] leading-none mb-1.5 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] group-data-[state=active]:scale-110 transition-transform duration-300">
                            {getCategoryIcon(cat.label)}
                        </span>

                        <span className="text-[11px] font-medium text-gray-400 group-data-[state=active]:text-[#d4af37] tracking-tight leading-[1.1] text-center w-full whitespace-normal line-clamp-2">
                            {cat.label}
                        </span>
                    </TabsTrigger>
                ))}
            </TabsList>
        </div>
    );
}