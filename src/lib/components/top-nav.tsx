"use client";

import styles from "@/app/ui/styles/ThemeToggle.module.css";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { BellRing, ChevronDown, Moon, Sun, Search, Bell } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

export default function TopNav() {
    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isBellAnimating, setIsBellAnimating] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return <div className={styles.placeholder} />;

    const isDark = theme === "dark";

    const handleBellClick = () => {
        setIsBellAnimating(true);
        window.setTimeout(() => setIsBellAnimating(false), 600);
    };

    return (
        <div className="top-nav">
            <div className="horizontal-section">
                <span className="text-sm cursor-default select-none">Stockvault {'>'} Operations command</span>

                <form action="">
                    <div className="flex items-center w-2xs p-2 rounded-lg border border-slate-600 gap-2 dark:bg-[#1c2028] text-sm text-gray-500 dark:text-gray-400">
                        <Search size={20} />
                        <input type="text" placeholder="Search SKUs, orders, hubs..." className="h-full w-full outline-none" />
                    </div>
                </form>
            </div>

            <div className="flex items-center justify-center gap-1">
                <Button
                    className="rounded-full cursor-pointer bg-transparent hover:bg-(--secondary)/5"
                    onClick={handleBellClick}
                    aria-label={isBellAnimating ? "Notifications ringing" : "Notifications"}
                >
                    <div className={isBellAnimating ? "animate-[bell-ring_0.6s_ease-in-out]" : ""}>
                        {isBellAnimating ? (
                            <BellRing className="size-5" />
                        ) : (
                            <Bell className="size-4.5" />
                        )}
                    </div>
                </Button>

                <button
                    className={styles.toggleBtn}
                    onClick={() => setTheme(isDark ? "light" : "dark")}
                    aria-label="Toggle theme"
                    type="button"
                >
                    <div className={`${styles.iconWrapper} ${isDark ? styles.dark : styles.light}`}>
                        <Sun className={styles.sunIcon} size={20} />
                        <Moon className={styles.moonIcon} size={20} />
                    </div>
                </button>

                <Separator orientation="vertical" className="h-6 w-px bg-slate-300 dark:bg-slate-700" />

                <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            className="h-10 gap-2 rounded-md border-0 cursor-pointer bg-transparent px-3 text-sm font-medium text-slate-700 shadow-none hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-0 dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-white"
                        >
                            <span>Placeholder</span>
                            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""
                                }`} />
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                        align="end"
                        className="w-48 rounded-md border border-slate-200 bg-white p-1 text-slate-900 shadow-lg dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 transition-transform"
                    >
                        <DropdownMenuItem className="cursor-pointer rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-orange-50 focus:bg-orange-50 data-[highlighted]:bg-orange-50 dark:hover:bg-slate-800 dark:focus:bg-slate-800 dark:data-[highlighted]:bg-slate-800">
                            Company one
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-orange-50 focus:bg-orange-50 data-[highlighted]:bg-orange-50 dark:hover:bg-slate-800 dark:focus:bg-slate-800 dark:data-[highlighted]:bg-slate-800">
                            Company two
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}