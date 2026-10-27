import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const itens = [
    { id: "inicio", label: "Início" },
    { id: "trabalhos", label: "Trabalhos" },
    { id: "sobre", label: "Sobre" },
    { id: "contato", label: "Contato" },
];

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [ativo, setAtivo] = useState("inicio");
    const listaRef = useRef(null);
    const itemRefs = useRef({});
    const [sublinhado, setSublinhado] = useState({ x: 0, largura: 0 });


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entradas) => entradas.forEach((e) => e.isIntersecting && setAtivo(e.target.id)),
            { rootMargin: "-45% 0px -50% 0px" }
        );
        itens.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    useLayoutEffect(() => {
        const atualizarSublinhado = () => {
            const container = listaRef.current;
            const ativoEl = itemRefs.current[ativo];
            if (!container || !ativoEl) return;
            const containerRect = container.getBoundingClientRect();
            const ativoRect = ativoEl.getBoundingClientRect();
            setSublinhado({ x: ativoRect.left - containerRect.left, largura: ativoRect.width });
        };
        atualizarSublinhado();
        window.addEventListener("resize", atualizarSublinhado);
        document.fonts?.ready?.then(atualizarSublinhado);
        return () => window.removeEventListener("resize", atualizarSublinhado);
    }, [ativo]);

    const clique = (e, id) => {
        e.preventDefault();
        setMenuOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    const link = (item, extra = "", comSublinhadoProprio = true) => (
        <a
            href={`#${item.id}`}
            onClick={(e) => clique(e, item.id)}
            aria-current={ativo === item.id ? "true" : undefined}
            className={`relative block transition-colors ${extra} ${
                ativo === item.id ? "text-papel" : "text-cinza hover:text-papel"
            }`}
        >
            {item.label}
            {comSublinhadoProprio && ativo === item.id && (
                <span className="border-b absolute inset-x-0 -bottom-2 text-stencil-claro" />
            )}
        </a>
    );

    return (
        <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-tinta">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
                <a href="#inicio" onClick={(e) => clique(e, "inicio")} className="block h-12 w-[72px] overflow-hidden" aria-label="Pedro Menezes Tattoo, voltar ao início">
                    <img
                        src={`${import.meta.env.BASE_URL}logo.jpeg`}
                        alt=""
                        className="h-full w-full scale-150 object-cover"
                    />
                </a>

                <ul ref={listaRef} className="relative hidden items-center gap-9 font-texto text-[15px] font-medium md:flex">
                    {itens.map((item) => (
                        <li key={item.id} ref={(el) => { itemRefs.current[item.id] = el; }}>
                            {link(item, "", false)}
                        </li>
                    ))}
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-2 left-0 h-px w-px origin-left bg-stencil-claro transition-transform duration-300 ease-out motion-reduce:transition-none"
                        style={{ transform: `translateX(${sublinhado.x}px) scaleX(${sublinhado.largura})` }}
                    />
                </ul>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-expanded={menuOpen}
                    aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                    className="p-2 text-papel md:hidden"
                >
                    {menuOpen ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
                </button>
            </div>

            {menuOpen && (
                <ul className="flex flex-col gap-1 border-t border-white/10 px-4 pb-6 pt-3 font-texto text-lg md:hidden">
                    {itens.map((item) => (
                        <li key={item.id}>{link(item, "w-fit py-2")}</li>
                    ))}
                </ul>
            )}
        </nav>
    );
}

export default NavBar;
