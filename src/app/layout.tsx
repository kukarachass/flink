import type {Metadata} from "next";
import "@/app/globals.css";
import { Poppins } from "next/font/google";
import { Geom } from "next/font/google";
import {ReactQueryClientProvider} from "@/app/providers/ReactQueryClientProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from 'sonner'
import React from "react";

export const metadata: Metadata = {
    title: "Flink",
    description: "Online Supermarket",
};

// const poppins = Poppins({
//     variable: "--font-poppins",
//     weight: ["400", "500", "600", "700"],
//     display: "swap",
//     subsets: ["latin"]
// })

const geom = Geom({
    variable: "--font-geom",
    weight: ["400", "500", "600", "700"],
    display: "swap",
    subsets: ["latin"]
})

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={geom.variable}>
        <body className="min-h-screen flex flex-col">
        <ReactQueryClientProvider>
            <Header/>
            <main className="flex-1 p-8">
                <Toaster position="bottom-center" richColors/>
                {children}
            </main>
            <Footer/>
        </ReactQueryClientProvider>
        </body>
        </html>
    );
}
