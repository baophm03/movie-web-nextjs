import Link from "next/link";
import Image from "next/image";
import BottomNavigation from "@/components/BottomNavigation";

export default function Footer() {
    return (
        <div>
            <div className="relative w-full h-[500px]">
                <Image
                    src="/footer.jpg"
                    alt="footer"
                    fill
                    className="object-cover"
                />
                <div className="absolute flex flex-col items-center gap-10 w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold">
                    <Link className="flex items-center gap-4 text-3xl hover:text-red-600 cursor-pointer" href="/">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={50}
                            height={50}
                        />
                        <h1>theMovies</h1>
                    </Link>

                    <div className="flex flex-row justify-center gap-10 text-xl w-[100%]">
                        <div className="flex flex-col gap-2 w-[20%]">
                            <Link className="p-2 hover:text-red-600 cursor-pointer" href="/">Home</Link>
                            <Link className="p-2 hover:text-red-600 cursor-pointer" href="#">Contact us</Link>
                            <Link className="p-2 hover:text-red-600 cursor-pointer" href="#">Terms of Service</Link>
                            <Link className="p-2 hover:text-red-500 cursor-pointer" href="#">About us</Link>
                        </div>

                        <div className="flex flex-col gap-2 w-[20%]">
                            <Link className="p-2 hover:text-red-600 cursor-pointer" href="#">Live</Link>
                            <Link className="p-2 hover:text-red-600 cursor-pointer" href="#">FAQ</Link>
                            <Link className="p-2 hover:text-red-600 cursor-pointer" href="#">Premium</Link>
                        </div>

                        <div className="flex flex-col gap-2 w-[20%]">
                            <Link className="p-2 hover:text-red-600 cursor-pointer" href="#">You must watch</Link>
                            <Link className="p-2 hover:text-red-600 cursor-pointer" href="#">Recent release</Link>
                            <Link className="p-2 hover:text-red-600 cursor-pointer" href="#">Top IMDB</Link>
                            <Link className="p-2 hover:text-red-600 cursor-pointer" href="#">Privacy policy</Link>
                        </div>
                    </div>
                </div>
            </div>
            <BottomNavigation />
        </div>
    );
}
