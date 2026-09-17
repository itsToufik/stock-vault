import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "next-themes";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "StockVault",
    description: "Inventory and Order management dashboard.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
            <body>
                <ThemeProvider attribute="class">
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
