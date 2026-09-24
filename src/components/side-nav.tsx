"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon, PanelLeftClose, PanelLeftOpen, LayoutDashboard, Archive, Boxes, UserGroup, Settings } from "lucide-react";

import { Button } from "@/components/ui/button";

const SidebarItem = ({ isOpen, isActive, Icon, label, href }: { isOpen: boolean; isActive: boolean; Icon: LucideIcon; label: string; href: string }) => {
    const activeClasses = isActive
        ? "bg-(--primary) text-(--text-primary)"
        : "text-(--text-secondary) hover:bg-(--text-secondary)/25 hover:text-(--text-primary)";

    return (isOpen ? (
        <Link href={href} aria-current={isActive ? "page" : undefined} className={`flex items-center gap-2 px-3 py-2 rounded-lg select-none transition-all duration-300 ease-in-out ${activeClasses}`}>
            <Icon />
            <span className="truncate whitespace-nowrap text-sm font-semibold">
                {label}
            </span>
        </Link>
    ) : (
        <Link href={href} aria-current={isActive ? "page" : undefined} aria-label={label} className={`flex items-center justify-center py-2 rounded-lg select-none transition-all duration-300 ease-in-out ${activeClasses}`}>
            <Icon />
        </Link>
    )
    );
}

export default function SideNav() {
    const [isOpen, setIsOpen] = useState(true);
    const pathname = usePathname();

    const sidebarItems = [
        { icon: LayoutDashboard, label: "Dashboard", href: "/Dashboard" },
        { icon: Archive, label: "Inventory", href: "/Inventory" },
        { icon: Boxes, label: "Orders", href: "/Orders" },
        { icon: UserGroup, label: "Customers", href: "/Customers" },
        { icon: Settings, label: "Settings", href: "/Settings" },
    ]

    return (
        <div className={`${isOpen ? "w-64" : "w-16"} min-h-screen bg-(--foreground) border-r border-r-(--text-secondary)/25 transition-[width] duration-300 ease-in-out`}>
            <div className="relative flex h-14 items-center gap-2 border-b border-b-(--text-secondary)/25 px-2">
                <div className={`flex min-w-0 items-center gap-2 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-w-48 opacity-100" : "max-w-0 opacity-0"}`}>
                    <div className="flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 text-base font-bold text-white shadow-sm shadow-orange-950/40">
                        <span className="material-symbols-outlined text-[20px]">token</span>
                    </div>
                    <span className="truncate whitespace-nowrap text-lg font-semibold text-(--text-primary)">
                        StockVault
                    </span>
                </div>

                <Button
                    variant="ghost"
                    size="icon-sm"
                    className={`cursor-pointer transition-[margin,transform] duration-300 ease-in-out ${isOpen ? "ml-auto" : "absolute left-1/2 -translate-x-1/2"}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
                >
                    <span className="relative size-5">
                        <PanelLeftClose
                            className={`absolute inset-0 size-5 transition-all duration-300 ease-in-out ${isOpen ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
                                }`}
                        />
                        <PanelLeftOpen
                            className={`absolute inset-0 size-5 transition-all duration-300 ease-in-out ${isOpen ? "-rotate-90 opacity-0" : "rotate-0 opacity-100"
                                }`}
                        />
                    </span>
                </Button>
            </div>

            <div className="flex flex-col gap-2 px-3 py-2">
                {sidebarItems.map((item) => (
                    <SidebarItem key={item.href} isOpen={isOpen} isActive={pathname === item.href} Icon={item.icon} label={item.label} href={item.href} />
                ))}
            </div>
        </div>
    );
}