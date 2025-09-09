import Link from "next/link";

export default function Footer() {
    return (
        <div className="p-20">
            <div className="text-center text-3xl p-6 hover:text-red-500 cursor-pointer">
                <Link href="/">theMovies</Link>
            </div>

            <div className="flex flex-row justify-center gap-10 text-xl">
                <div className="flex flex-col gap-2 w-[20%]">
                    <Link className="p-2 hover:text-red-500 cursor-pointer" href="/">Home</Link>
                    <Link className="p-2 hover:text-red-500 cursor-pointer" href="#">Contact us</Link>
                    <Link className="p-2 hover:text-red-500 cursor-pointer" href="#">Terms of Service</Link>
                    <Link className="p-2 hover:text-red-500 cursor-pointer" href="#">About us</Link>
                </div>

                <div className="flex flex-col gap-2 w-[20%]">
                    <Link className="p-2 hover:text-red-500 cursor-pointer" href="#">Live</Link>
                    <Link className="p-2 hover:text-red-500 cursor-pointer" href="#">FAQ</Link>
                    <Link className="p-2 hover:text-red-500 cursor-pointer" href="#">Premium</Link>
                </div>

                <div className="flex flex-col gap-2 w-[20%]">
                    <Link className="p-2 hover:text-red-500 cursor-pointer" href="#">You must watch</Link>
                    <Link className="p-2 hover:text-red-500 cursor-pointer" href="#">Recent release</Link>
                    <Link className="p-2 hover:text-red-500 cursor-pointer" href="#">Top IMDB</Link>
                    <Link className="p-2 hover:text-red-500 cursor-pointer" href="#">Privacy policy</Link>
                </div>
            </div>
        </div>
    );
}
