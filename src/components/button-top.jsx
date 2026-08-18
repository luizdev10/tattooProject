import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

function BotaoTopo() {
    const [visivel, setVisivel] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisivel(window.scrollY > 400);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Voltar ao topo"
            className={`fixed bottom-6 right-6 z-50 rounded-full border border-amber-100/40 bg-neutral-900/80 p-3 text-amber-100 backdrop-blur transition-all duration-300 hover:bg-amber-100 hover:text-neutral-900 ${
                visivel ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"
            }`}
        >
            <ArrowUp className="h-5 w-5" strokeWidth={1.5} />
        </button>
    );
}

export default BotaoTopo;