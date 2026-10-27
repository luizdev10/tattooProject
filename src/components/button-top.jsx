import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

function BotaoTopo() {
    const [visivel, setVisivel] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisivel(window.scrollY > 400);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Voltar ao topo"
            tabIndex={visivel ? 0 : -1}
            className={`fixed bottom-6 right-4 z-40 rounded-full border border-white/15 bg-tinta/45 p-2 text-papel backdrop-blur-sm transition-all duration-300 hover:bg-tinta/80 hover:border-stencil-claro hover:text-stencil-claro motion-reduce:transition-none sm:bottom-8 sm:right-6 sm:p-2.5 ${
                visivel ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"
            }`}
        >
            <ArrowUp className="h-4 w-4 sm:h-[18px] sm:w-[18px]" strokeWidth={1.5} />
        </button>
    );
}

export default BotaoTopo;
