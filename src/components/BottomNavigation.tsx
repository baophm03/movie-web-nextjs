'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, Film, Tv } from "lucide-react";

export default function BottomNavigation() {
    const pathname = usePathname();

    const navItems = [
        { name: "Home", href: "/", icon: Home },
        { name: "Movies", href: "/movies", icon: Film },
        { name: "TV Series", href: "/tvseries", icon: Tv },
    ];

    return (
        <div className="flex justify-around fixed bottom-0 left-0 right-0 z-50 bg-[#181818] pb-[calc(8px+env(safe-area-inset-bottom))] pt-2 h-16 md:hidden">
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
