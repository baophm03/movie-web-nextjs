export default function Search() {
    return (
        <div className="relative pt-10 pb-10 w-[35%]">
            <input
                className="w-full text-white bg-black rounded-3xl p-2 pl-4"
                type="text"
                placeholder="Enter keyword"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-red-600 shadow-[1px_1px_15px_3px_rgba(255,0,0,0.7)] hover:shadow-[1px_1px_20px_4px_rgba(255,0,0,1)]  rounded-3xl py-2 px-7 cursor-pointer">
                Search
            </button>
        </div>
    )
}

