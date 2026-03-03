import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { menuData } from "@/lib/data";

export default function MenuPage() {
  return (
    // Fondo principal: un negro muy profundo para que el cristal resalte
    <main className="min-h-screen bg-[#050505] text-slate-200 pb-12 relative overflow-hidden">

      {/* Cabecera / Header - Efecto Glass */}
      <header className="flex flex-col items-center justify-center pt-10 pb-6 px-4 sticky top-0 bg-[#050505]/60 backdrop-blur-xl z-50 border-b border-white/10">
        <div className="relative w-48 h-48 mb-2">
          {/* Aquí va tu logo. Asegúrate de tener public/medusa-logo.png */}
          <Image
            src="/medusa-logo.png"
            alt="MEDUSA Gastro Bar Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </header>

      {/* Contenedor principal del Menú */}
      <div className="max-w-3xl mx-auto px-4 mt-8">
        <Tabs defaultValue="cocteles" className="w-full">

          {/* Contenedor de Scroll Horizontal */}
          <div className="w-full overflow-x-auto pb-4 mb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">

            {/* Navegación de Categorías - Efecto Glass Corregido */}
            <TabsList className="inline-flex w-max min-w-full justify-start sm:justify-center bg-white/5 backdrop-blur-xl border border-white/10 p-1.5 rounded-2xl gap-2 h-auto">
              {menuData.categories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="whitespace-nowrap px-6 py-3 text-sm sm:text-base data-[state=active]:bg-[#d4af37]/20 data-[state=active]:text-[#d4af37] data-[state=active]:shadow-lg text-gray-400 font-medium transition-all rounded-xl border border-transparent data-[state=active]:border-[#d4af37]/30"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>

          </div>

          {/* Mapeo dinámico de categorías y productos */}
          {Object.entries(menuData.items).map(([categoryKey, items]) => (
            <TabsContent key={categoryKey} value={categoryKey} className="space-y-6 animate-in fade-in-50 duration-500">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {items.map((item) => (

                  // Tarjeta del Producto - Efecto Glass iOS
                  <Card key={item.id} className="bg-white/5 border border-white/10 backdrop-blur-lg overflow-hidden flex flex-col shadow-2xl rounded-2xl">

                    {/* Imagen del Producto */}
                    <div className="relative w-full h-56 bg-black/20">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover opacity-90 hover:opacity-100 transition-opacity"
                      />
                      {/* Gradiente sutil inferior para fusionar la imagen con la tarjeta */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />

                      {item.type && (
                        // Badge con toque dorado y cristalino
                        <Badge className="absolute top-3 right-3 bg-[#d4af37]/90 backdrop-blur-md text-black border-none font-bold hover:bg-[#d4af37]">
                          {item.type}
                        </Badge>
                      )}
                    </div>

                    {/* Información del Producto */}
                    <CardHeader className="pb-5 flex-grow relative z-10 -mt-2">
                      <div className="flex justify-between items-start gap-4">
                        {/* Título en Dorado */}
                        <CardTitle className="text-xl font-bold text-[#d4af37] tracking-wide">
                          {item.name}
                        </CardTitle>
                        {/* Precio en Dorado con fondo oscuro tipo pastilla */}
                        <span className="text-[#d4af37] font-bold text-lg whitespace-nowrap bg-black/40 px-2 py-1 rounded-md backdrop-blur-sm border border-white/5">
                          {item.price}
                        </span>
                      </div>

                      {/* Descripción en gris claro para mantener legibilidad */}
                      <CardDescription className="text-gray-300 mt-3 text-sm leading-relaxed">
                        {item.description}
                      </CardDescription>

                      {item.note && (
                        <p className="text-xs text-[#d4af37]/70 mt-2 italic font-medium">{item.note}</p>
                      )}
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </main>
  );
}