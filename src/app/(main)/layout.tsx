import Header from "@/app/(main)/lib/Header";
import Footer from "@/app/(main)/lib/Footer";
import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </main>
  );
}
