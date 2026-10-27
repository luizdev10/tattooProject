import fotoPedro from "../assets/img/bg-works.webp";
import fotoBruna from "../assets/img/bruna/fotobg.webp";

const NUMERO_WHATS_PEDRO = "5588988151026";
const NUMERO_WHATS_BRUNA = "5588997011400";

const linkWhats = (numero, nome) =>
    `https://wa.me/${numero}?text=${encodeURIComponent(`Olá ${nome}! Quero fazer uma tatuagem`)}`;

function Inicio() {
    return (
        <section id="inicio" className="relative w-full overflow-hidden bg-tinta pt-16">
            <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-14 px-4 py-14 sm:px-6 md:grid-cols-[1.15fr_1fr] md:gap-16">
                <div>
                    <h1 className="entra-1 font-gotica text-[clamp(3.25rem,9.5vw,6.75rem)] lowercase leading-[0.86] text-papel">
                        pedro menezes
                        <br />
                        <span className="text-stencil-claro">&amp;</span> bruna
                    </h1>

                    <p className="entra-1 mt-8 max-w-md text-lg leading-relaxed text-cinza">
                        Duas assinaturas, um estúdio só, em Juazeiro do Norte. Realismo em
                        black and grey e traço fineline — cada tatuagem nasce da sua história.
                    </p>

                    <div className="entra-2 mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                        <a
                            href={linkWhats(NUMERO_WHATS_PEDRO, "Pedro")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-sm bg-papel px-6 py-3.5 font-medium text-tinta transition-colors duration-200 ease-out hover:bg-stencil-claro motion-reduce:transition-none"
                        >
                            Falar com Pedro
                        </a>
                        <a
                            href={linkWhats(NUMERO_WHATS_BRUNA, "Bruna")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-sm bg-papel px-6 py-3.5 font-medium text-tinta transition-colors duration-200 ease-out hover:bg-stencil-claro motion-reduce:transition-none"
                        >
                            Falar com Bruna
                        </a>
                    </div>

                    <a
                        href="#trabalhos"
                        className="entra-2 mt-6 inline-block text-sm font-medium text-cinza underline underline-offset-4 transition-colors hover:text-papel"
                    >
                        Ver trabalhos
                    </a>
                </div>

                <div className="entra-3 mx-auto grid w-full max-w-sm grid-cols-2 items-start gap-4 sm:gap-6 md:max-w-none">
                    <figure className="relative">
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 translate-x-3 translate-y-3 rounded-sm border-1 border-solid border-stencil-claro"
                        />
                        <img
                            src={fotoPedro}
                            alt="Pedro Menezes calçando as luvas antes de tatuar"
                            className="relative aspect-[4/5] w-full rounded-sm object-cover object-[72%_center] grayscale contrast-120"
                        />
                        <figcaption className="absolute inset-x-0 bottom-0 rounded-b-sm bg-gradient-to-t from-tinta/95 via-tinta/40 to-transparent px-3 pb-2 pt-10 font-gotica text-xl lowercase text-papel">
                            pedro
                        </figcaption>
                    </figure>

                    <figure className="relative mt-10 sm:mt-14">
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 translate-x-3 translate-y-3 rounded-sm border-1 border-solid border-stencil-claro"
                        />
                        <img
                            src={fotoBruna}
                            alt="Bruna tatuando, concentrada, segurando a máquina sobre o braço da cliente"
                            className="relative aspect-[4/5] w-full rounded-sm object-cover grayscale contrast-120"
                        />
                        <figcaption className="absolute inset-x-0 bottom-0 rounded-b-sm bg-gradient-to-t from-tinta/95 via-tinta/40 to-transparent px-3 pb-2 pt-10 font-gotica text-xl lowercase text-papel">
                            bruna
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
}

export default Inicio;
