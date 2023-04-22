export default function Footer() {
    return (
        <footer className="bg-stone-900">
            <div className="container text-white py-4 mx-auto text-center">
                Copyright &copy; { new Date().getFullYear() } <span className="text-yellow-500">Tanaroeg O-Charoen</span>
            </div>
        </footer>
    );
}