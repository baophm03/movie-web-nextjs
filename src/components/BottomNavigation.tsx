'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function BottomNavigation() {
    const pathname = usePathname();
    const navItems = [
        { name: "Home", href: "/" },
        { name: "Movies", href: "/movies" },
        { name: "TV Series", href: "/tvseries" },
    ];

    return (
        <div className="flex justify-around fixed bottom-0 left-0 right-0 z-50 bg-[#2a2929] p-4 md:hidden">
            {navItems.map((item) => {
                const isActive =
                    item.href === "/"
                        ? pathname === item.href
                        : pathname.startsWith(item.href);
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`${isActive ? "text-red-600 border-b-2" : "text-white"} hover:text-red-600 hover:border-b-2`}
                    >
                        {item.name}
                    </Link>
                )
            })}
        </div>
    );
}