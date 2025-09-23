"use client"

import Link from "next/link";

export default function ErrorPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4 absolute inset-0 z-10000">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
            <p className="text-gray-400 mb-6 text-center">
                Sorry, the page you are looking for does not exist or has been moved.
            </p>
            <Link
                href="/"
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-full shadow-md transition"
            >
                Return Home
            </Link>
        </div>
    );
};