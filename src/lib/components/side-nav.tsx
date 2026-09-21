"use client";

import { useState } from "react";

export default function SideNav() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className={`${isOpen ? "w-64" : "w-16"} min-h-screen bg-(--foreground) transition-all duration-300`}>
            <span>whatever</span>
        </div>
    )
}