const Header = () => {
    return (
        <header className="bg-gray-900 text-white sticky top-0 z-50 shadow">
            <nav className="max-w-5xl mx-auto flex justify-between items-center px-4 py-4">
                <h1 className="text-xl font-bold">Mi Portfolio</h1>
                <ul className="flex space-x-6 text-sm sm:text-base">
                    <li><a href="#about" className="hover:text-blue-400 transition">Sobre mí</a></li>
                    <li><a href="#projects" className="hover:text-blue-400 transition">Proyectos</a></li>
                    <li><a href="#contact" className="hover:text-blue-400 transition">Contacto</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header