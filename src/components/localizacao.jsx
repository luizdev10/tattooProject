import { MapPin } from "lucide-react";
import { useRevelar } from "../hooks/useRevelar";

const ENDERECO = "Rua Coronel Filemon Teles, 30, bairro José Geraldo da Cruz, Juazeiro do Norte - CE";
const LINK_MAPA = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ENDERECO)}`;

function Localizacao() {
    const { ref: refSecao, oculto } = useRevelar();
    const classe = (extra = "") => `revelar ${oculto ? "revelar-oculto" : ""} ${extra}`;

    return (
        <section ref={refSecao} id="localizacao" className="scroll-mt-16 w-full border-t border-white/10 bg-tinta px-4 py-20 sm:px-6 md:py-28">
            <div className="mx-auto max-w-6xl">
                <h2 className={classe("font-gotica text-6xl lowercase leading-none text-papel md:text-8xl")}>
                    localização
                </h2>

                <p className={classe("atraso-80 mt-6 flex max-w-sm items-start gap-3 leading-relaxed text-papel/85")}>
                    <MapPin aria-hidden="true" strokeWidth={1.5} className="mt-1 h-5 w-5 shrink-0 opacity-70" />
                    {ENDERECO}
                </p>

                <div className={classe("mt-8")} style={{ transitionDelay: "140ms" }}>
                    <a
                        href={LINK_MAPA}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 rounded-sm border border-white/20 px-5 py-3 text-papel transition-colors hover:border-papel"
                    >
                        <MapPin aria-hidden="true" strokeWidth={1.5} className="h-4 w-4" />
                        Ver no mapa
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Localizacao;
