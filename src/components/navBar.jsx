import { useState } from "react";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [tracoAtive, setTracoAtive] = useState("inicio");

    const menuitensAtive = [
        { id: "inicio", label: "INÍCIO" },
        { id: "trabalhos", label: "TRABALHOS" },
        { id: "contato", label: "CONTATO" },
        { id: "sobre", label: "SOBRE" },
    ];

    const clique = (e, id) => {
        e.preventDefault();
        setTracoAtive(id);

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="bg-black text-zinc-100 fixed w-full top-0 left-0 z-50 bg-blo ">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-around px-5">
                <img
                    src="./src/assets/img/logo.jpeg"
                    alt="LOGO"
                    className="h-20 w-25"
                />

                <ul className="hidden items-center gap-8 md:flex">
                    {menuitensAtive.map((item) => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                onClick={(e) => clique(e, item.id)}
                                className={`pb-1 transition-all ${tracoAtive === item.id
                                        ? "border-b-4 border-amber-200 font-bold"
                                        : ""
                                    }`}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-3xl md:hidden"
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
            </div>


            {menuOpen && (
                <ul className="flex justify-center items-center gap-4 py-4 text-gray-100 md:hidden">
                    {menuitensAtive.map((item) => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                onClick={(e) => clique(e, item.id)}
                                className={`pb-1 transition-all font-[Cormorant_Garamond] text-lg ${tracoAtive === item.id
                                        ? "border-b-4 border-gray-500 "
                                        : ""
                                    }`}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}

export default NavBar;