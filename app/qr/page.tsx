"use client";

import React, { useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function QRGeneratorPage() {
    // Tu dominio real y definitivo
    const menuUrl = "https://medusa.scryved.com";
    const qrRef = useRef<HTMLDivElement>(null);

    // Función mágica para descargar el QR en alta calidad
    const downloadQR = () => {
        const canvas = qrRef.current?.querySelector("canvas");
        if (!canvas) return;

        const pngUrl = canvas.toDataURL("image/png");
        const downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "qr-medusa-gastrobar.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    return (
        <main className="min-h-screen bg-[#050505] flex items-center justify-center p-6 relative overflow-hidden">

            {/* Fondo decorativo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/10 blur-[100px] rounded-full pointer-events-none" />

            <Card className="bg-white/5 border border-white/10 backdrop-blur-xl max-w-sm w-full shadow-2xl rounded-2xl z-10">
                <CardHeader className="text-center pb-2">
                    <CardTitle className="text-[#d4af37] text-2xl font-bold tracking-wide">
                        QR del Menú
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                        Escanea para ver la carta digital
                    </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col items-center">
                    {/* Contenedor blanco para el QR para asegurar contraste */}
                    <div className="bg-white p-4 rounded-xl shadow-inner mt-4" ref={qrRef}>
                        <QRCodeCanvas
                            value={menuUrl}
                            size={240}
                            bgColor={"#ffffff"}
                            fgColor={"#050505"}
                            level={"H"}
                            imageSettings={{
                                src: "/medusa-logo-black.png", // Asegúrate de tener public/medusa-logo.png
                                x: undefined,
                                y: undefined,
                                height: 55,
                                width: 55,
                                excavate: true,
                            }}
                        />
                    </div>

                    <p className="mt-6 text-sm text-[#d4af37] font-mono text-center break-all bg-black/40 px-3 py-1 rounded-md border border-white/5">
                        {menuUrl}
                    </p>

                    <Button
                        onClick={downloadQR}
                        className="mt-6 w-full bg-[#d4af37] text-black hover:bg-[#b5952f] font-bold rounded-xl"
                    >
                        Descargar QR (PNG)
                    </Button>
                </CardContent>
            </Card>
        </main>
    );
}