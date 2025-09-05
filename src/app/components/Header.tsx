import Link from "next/link";

export default function Header() {
    return (
        <div className="flex flex-row justify-between p-10">
            <Link className="text-3xl hover:text-red-500 cursor-pointer" href="/">theMovie</Link>
            <div>
                <Link className="text-2xl p-4 hover:text-red-500 cursor-pointer" href="/">Home</Link>
                <Link className="text-2xl p-4 hover:text-red-500 cursor-pointer" href="/movies">Movies</Link>
                <Link className="text-2xl p-4 hover:text-red-500 cursor-pointer" href="/tvseries">TV Series</Link>
            </div>
        </div>
    );
}