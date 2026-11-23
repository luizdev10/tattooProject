import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
    { id: "trabalhos", label: "Trabalhos" },
    { id: "sobre", label: "Sobre" },
    { id: "faq", label: "Perguntas" },
    { id: "contato", label: "Contato" },
];

function NavBar() {
    const [aberto, setAberto] = useState(false);
    const [ativo, setAtivo] = useState("");

    useEffect(() => {
        if (typeof IntersectionObserver === "undefined") return;
        const secoes = links.map((l) => document.getElementById(l.id)).filter(Boolean);
        const observer = new IntersectionObserver(
            (entradas) => {
                entradas.forEach((e) => {
                    if (e.isIntersecting) setAtivo(e.target.id);
                });
            },
            { rootMargin: "-40% 0px -55% 0px" }
        );
        secoes.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    const atual = (id) => (ativo === id ? "location" : undefined);

    return (
        <>
        <a className="skip" href="#trabalhos">Pular para o conteúdo</a>
        <header className="nav">
            <div className="wrap">
                <a className="brand" href="#inicio" onClick={() => setAberto(false)}>pedro menezes &amp; bruna</a>
                <ul>
                    {links.map((item) => (
                        <li key={item.id}>
                            <a href={`#${item.id}`} aria-current={atual(item.id)}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <a className="btn lilac nav-cta" href="#contato" onClick={() => setAberto(false)}>Orçamento</a>
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
                            <a href={`#${item.id}`} aria-current={atual(item.id)} onClick={() => setAberto(false)}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            )}
        </header>
        </>
    );
}

export default NavBar;
