'use client';
import MovieDetail from "@/components/MovieDetail";
import React from "react";

export default function DetailPage({ params }: { params: Promise<{ category: string; id: string }> }) {
    const { category, id } = React.use(params);
    return <MovieDetail movie={{ category, id }} />;
}