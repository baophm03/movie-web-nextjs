"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Movies", href: "/movies" },
    { name: "TV Series", href: "/tvseries" },
  ];

  // effect trong suốt
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 font-bold">
      <div
        id="navbar"
        className={`hidden md:flex items-center justify-between pl-10 pr-10 pt-5 pb-5 transition-colors duration-200
                ${scrolled ? "bg-[#181818]" : "bg-transparent"}`}
      >
        <Link className="flex items-center gap-4 text-3xl hover:text-red-600 cursor-pointer" href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={50}
            height={50}
          />
          <h1>theMovies</h1>
        </Link>

        <div className="flex gap-8">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${isActive ? "text-red-600 border-b-2" : "text-white"} hover:text-red-600 hover:border-b-2 font-bold`}
              >
                {item.name}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  );
}
