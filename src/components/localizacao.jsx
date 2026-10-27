import { MapPin } from "lucide-react";

const ENDERECO = "Rua Coronel Filemon Teles, 30, bairro José Geraldo da Cruz, Juazeiro do Norte - CE";
const LINK_MAPA = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ENDERECO)}`;

function Localizacao() {
    return (
        <section id="localizacao" className="scroll-mt-16 w-full border-t border-white/10 bg-tinta px-4 py-20 sm:px-6 md:py-28">
            <div className="mx-auto max-w-6xl">
                <h2 className="font-gotica text-6xl lowercase leading-none text-papel md:text-8xl">
                    localização
                </h2>

                <p className="mt-6 flex max-w-sm items-start gap-3 leading-relaxed text-papel/85">
                    <MapPin aria-hidden="true" strokeWidth={1.5} className="mt-1 h-5 w-5 shrink-0 opacity-70" />
                    {ENDERECO}
                </p>

                <a
                    href={LINK_MAPA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-3 rounded-sm border border-white/20 px-5 py-3 text-papel transition-colors hover:border-papel"
                >
                    <MapPin aria-hidden="true" strokeWidth={1.5} className="h-4 w-4" />
                    Ver no mapa
                </a>
            </div>
        </section>
    );
}

export default Localizacao;
