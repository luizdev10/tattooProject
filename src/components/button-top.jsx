import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

function BotaoTopo() {
    const [visivel, setVisivel] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisivel(window.scrollY > 500);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Voltar ao topo"
            tabIndex={visivel ? 0 : -1}
            className={`to-top ${visivel ? "visible" : ""}`}
        >
            <ArrowUp size={20} />
        </button>
    );
}

export default BotaoTopo;
