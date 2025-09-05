export default function Movies() {
    return (
        <div className="p-10">
            <h1 className="text-center text-3xl p-5">Movies</h1>
            <div className="pt-10 pb-10">
                <input className="text-white bg-gray-500 rounded-3xl p-1 pl-5 pr-5" type="text" />
                <button className="bg-red-500 rounded-3xl p-1 pl-5 pr-5 cursor-pointer">Search</button>
            </div>

            <div className="flex justify-center">
                <button className="cursor-pointer
                bg-black hover:bg-white text-white hover:text-red-500 
                border-2 border-white rounded-3xl p-1 pl-5 pr-5">
                    Watch more
                </button>
            </div>
        </div >
    );
}
