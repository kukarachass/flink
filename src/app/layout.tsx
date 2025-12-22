import type {Metadata} from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import {ReactQueryClientProvider} from "@/app/providers/ReactQueryClientProvider";
import Header from "@/components/Header";

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
        <body>
        <ReactQueryClientProvider>
            <Header/>
            {children}
        </ReactQueryClientProvider>
        </body>
        </html>
    );
}
