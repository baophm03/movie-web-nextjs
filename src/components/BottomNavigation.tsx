'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, Film, Tv } from "lucide-react";
import { useEffect, useState } from "react";

export default function BottomNavigation() {
    const pathname = usePathname();
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setShow(false);
            } else {
                setShow(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const navItems = [
        { name: "Home", href: "/", icon: Home },
        { name: "Movies", href: "/movies", icon: Film },
        { name: "TV Series", href: "/tvseries", icon: Tv },
    ];

    return (
        <div
            className={`flex justify-around fixed bottom-0 left-0 right-0 z-50 bg-[#181818] 
        pb-[calc(8px+env(safe-area-inset-bottom))] pt-2 h-16 md:hidden 
        transition-transform duration-300
        ${show ? "translate-y-0" : "translate-y-full"}`}
        >
            {navItems.map((item) => {
                const isActive =
                    item.href === "/"
                        ? pathname === item.href
                        : pathname.startsWith(item.href);

                const Icon = item.icon;

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`flex flex-col items-center justify-center text-xs ${isActive ? "text-red-600" : "text-white"
                            } hover:text-red-600`}
                    >
                        <Icon size={27} strokeWidth={1.3} />
                        <span className="mt-1">{item.name}</span>
                    </Link>
                );
            })}
        </div>
    );
}
