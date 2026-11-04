import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
    { id: "trabalhos", label: "Trabalhos" },
    { id: "sobre", label: "Sobre" },
    { id: "faq", label: "Perguntas" },
    { id: "contato", label: "Contato" },
];

function NavBar() {
    const [aberto, setAberto] = useState(false);

    return (
        <header className="nav">
            <div className="wrap">
                <a className="brand" href="#inicio" onClick={() => setAberto(false)}>pedro menezes &amp; bruna</a>
                <ul>
                    {links.map((item) => (
                        <li key={item.id}>
                            <a href={`#${item.id}`}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <button
                    type="button"
                    className="nav-toggle"
                    aria-expanded={aberto}
                    aria-label={aberto ? "Fechar menu" : "Abrir menu"}
                    onClick={() => setAberto((v) => !v)}
                >
                    {aberto ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {aberto && (
                <ul className="nav-menu">
                    {links.map((item) => (
                        <li key={item.id}>
                            <a href={`#${item.id}`} onClick={() => setAberto(false)}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    );
}

export default NavBar;
