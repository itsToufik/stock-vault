import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import TopNav from "../components/top-nav";
import SideNav from "../components/side-nav";

import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";

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
        <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
            <body>
                <TooltipProvider>
                    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
                        <div className="flex min-h-screen w-full">
                            <SideNav />

                            <div className="flex min-w-0 flex-1 flex-col">
                                <TopNav />
                                <main className="flex-1">
                                    {children}
                                </main>
                            </div>
                        </div>
                    </ThemeProvider>
                </TooltipProvider>
            </body>
        </html>
    );
}
