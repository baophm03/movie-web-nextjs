import MovieDetail from "@/components/MovieDetail";

export default function MovieDetailPage({ params }: { params: { id: string } }) {
    return (
        <MovieDetail movie={{ id: params.id, category: 'movie' }} />
    );
}