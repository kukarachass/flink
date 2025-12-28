import type {Metadata} from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import {ReactQueryClientProvider} from "@/app/providers/ReactQueryClientProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster, toast } from 'sonner'

export const metadata: Metadata = {
    title: "Flink",
    description: "Online Supermarket",
};

const poppins = Poppins({
    variable: "--font-poppins",
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
        <html lang="en" className={poppins.variable}>
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
