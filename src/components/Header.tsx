"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 70);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full z-50">
            <div
                id="navbar"
                className={`flex flex-row justify-between p-10 transition-colors duration-200 
                ${scrolled ? "bg-[#181818]" : "bg-transparent"}`}
            >
                <Link className="text-3xl hover:text-red-500 cursor-pointer" href="/">theMovie</Link>
                <div>
                    <Link className="text-2xl p-4 hover:text-red-500 cursor-pointer" href="/" > Home </Link>
                    <Link className="text-2xl p-4 hover:text-red-500 cursor-pointer" href="/movies" > Movies </Link>
                    <Link className="text-2xl p-4 hover:text-red-500 cursor-pointer" href="/tvseries" > TV Series </Link>
                </div>
            </div>
        </div>

    );
}
