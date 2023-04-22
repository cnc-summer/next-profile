export default function Header() {
    return (
        <header className="bg-[#2c2c2c] h-screen">
            <div className="flex flex-col justify-center h-full">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-white">
                        Hello, I'm <span className="text-yellow-500">Graph</span>
                    </h1>
                    <h2 className="text-gray-400 text-3xl mt-5">
                        I'm a full-stack developer
                    </h2>
                </div>
            </div>
        </header>
    );
}