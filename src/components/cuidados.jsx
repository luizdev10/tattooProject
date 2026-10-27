import { ShieldCheck, SprayCan, ClipboardCheck } from "lucide-react";
import { useRevelar } from "../hooks/useRevelar";

const itens = [
    {
        id: "descartavel",
        Icone: ShieldCheck,
        titulo: "Material descartável",
        // PREENCHER: confirmar com Pedro e Bruna o padrão real de material descartável do estúdio
        texto: "Agulhas e itens de contato direto com a pele são descartáveis, de uso único.",
    },
    {
        id: "higienizado",
        Icone: SprayCan,
        titulo: "Ambiente higienizado",
        // PREENCHER: confirmar o protocolo de higienização seguido entre atendimentos
        texto: "O espaço de trabalho é higienizado entre um atendimento e outro.",
    },
    {
        id: "pos-sessao",
        Icone: ClipboardCheck,
        titulo: "Cuidados depois da sessão",
        // PREENCHER: substituir pela orientação real de pós-tatuagem do estúdio
        texto: "Você recebe orientações de cuidado logo após a tatuagem, para ajudar na cicatrização.",
    },
];

function Cuidados() {
    const { ref: refSecao, oculto } = useRevelar();

    return (
        <section ref={refSecao} id="cuidados" className="scroll-mt-16 w-full bg-grafite px-4 py-20 sm:px-6 md:py-28">
            <div className="mx-auto max-w-6xl">
                <h2 className={`revelar ${oculto ? "revelar-oculto" : ""} font-gotica text-6xl lowercase leading-none text-papel md:text-8xl`}>
                    cuidados
                    <br />e segurança
                </h2>

                <ul className="mt-12 grid gap-10 sm:grid-cols-3">
                    {itens.map(({ id, Icone, titulo, texto }, index) => (
                        <li
                            key={id}
                            className={`revelar ${oculto ? "revelar-oculto" : ""}`}
                            style={{ transitionDelay: `${80 + Math.min(index, 4) * 60}ms` }}
                        >
                            <Icone aria-hidden="true" strokeWidth={1.5} className="h-7 w-7 text-stencil-claro" />
                            <h3 className="mt-4 text-lg font-semibold text-papel">{titulo}</h3>
                            <p className="mt-2 max-w-xs leading-relaxed text-cinza">{texto}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Cuidados;
