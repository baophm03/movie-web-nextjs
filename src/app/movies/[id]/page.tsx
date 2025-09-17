import MovieDetail from "@/components/MovieDetail";

export default async function MovieDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <MovieDetail movie={{ id, category: 'movie' }} />
    );
}