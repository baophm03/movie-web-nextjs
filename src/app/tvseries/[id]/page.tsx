import MovieDetail from "@/components/MovieDetail";

export default function TVDetailPage({ params }: { params: { id: string } }) {
    return (
        <MovieDetail id={params.id} />
    );
}