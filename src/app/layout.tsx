import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Providers from '@/app/providers/providers';
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Movie Web NextJS",
  description: "Demo Movie Web Application using NextJS 13, TailwindCSS, and TMDB API",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      {/* Vercel Speed Insights and Analytics */}
      <SpeedInsights />
      <Analytics />

      <body className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
