import MovieDetail from "@/components/MovieDetail";

export default async function TVDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <MovieDetail movie={{ id, category: 'tv' }} />
    );
}