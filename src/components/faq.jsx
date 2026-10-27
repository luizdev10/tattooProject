import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useRevelar } from "../hooks/useRevelar";

const perguntas = [
    {
        id: "orcamento",
        pergunta: "Como funciona o orçamento?",
        resposta:
            "O valor depende do tamanho, da técnica e do tempo de sessão. Depois de ver sua ideia ou referência, o orçamento é combinado direto pelo WhatsApp.",
        // PREENCHER: confirmar se existe política de sinal, forma de pagamento ou valor mínimo
    },
    {
        id: "agenda",
        pergunta: "Preciso marcar com antecedência?",
        resposta:
            "Sim, os atendimentos são organizados por agenda. Fale com Pedro ou Bruna pelo WhatsApp para ver os horários disponíveis.",
        // PREENCHER: confirmar o prazo médio de espera na agenda
    },
    {
        id: "referencia",
        pergunta: "Posso levar minha própria ideia ou referência?",
        resposta:
            "Pode sim. Traga fotos, referências ou só uma ideia solta — ela é conversada e ajustada com você antes de ir pra pele.",
    },
    {
        id: "pos-tatuagem",
        pergunta: "Quais cuidados devo ter depois de tatuar?",
        resposta:
            "As orientações de cuidado são explicadas pessoalmente depois da sessão e também podem ser reforçadas pelo WhatsApp, caso surja alguma dúvida.",
        // PREENCHER: substituir por orientação real de pós-tatuagem (produtos indicados, prazo de cicatrização, o que evitar)
    },
    {
        id: "cobertura",
        pergunta: "Vocês fazem cobertura (cover-up)?",
        resposta:
            "Cobertura é avaliada caso a caso, de acordo com a tatuagem atual. O ideal é enviar uma foto e conversar direto pelo WhatsApp.",
        // PREENCHER: confirmar se os dois tatuadores fazem cover-up ou apenas um deles
    },
];

function Faq() {
    const [abertas, setAbertas] = useState(() => new Set());
    const { ref: refSecao, oculto } = useRevelar();

    const alternar = (id) => {
        setAbertas((atual) => {
            const nova = new Set(atual);
            if (nova.has(id)) {
                nova.delete(id);
            } else {
                nova.add(id);
            }
            return nova;
        });
    };

    return (
        <section ref={refSecao} id="faq" className="scroll-mt-16 w-full bg-tinta px-4 py-20 sm:px-6 md:py-28">
            <div className="mx-auto max-w-3xl">
                <h2 className={`revelar ${oculto ? "revelar-oculto" : ""} font-gotica text-6xl lowercase leading-none text-papel md:text-8xl`}>
                    perguntas
                    <br />
                    frequentes
                </h2>

                <ul className="mt-12 divide-y divide-white/10 border-y border-white/10">
                    {perguntas.map((item, index) => {
                        const aberta = abertas.has(item.id);
                        const idBotao = `faq-botao-${item.id}`;
                        const idPainel = `faq-painel-${item.id}`;

                        return (
                            <li
                                key={item.id}
                                className={`revelar ${oculto ? "revelar-oculto" : ""}`}
                                style={{ transitionDelay: `${80 + Math.min(index, 4) * 60}ms` }}
                            >
                                <h3>
                                    <button
                                        type="button"
                                        id={idBotao}
                                        aria-expanded={aberta}
                                        aria-controls={idPainel}
                                        onClick={() => alternar(item.id)}
                                        className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-medium text-papel transition-colors hover:text-stencil-claro"
                                    >
                                        {item.pergunta}
                                        <ChevronDown
                                            aria-hidden="true"
                                            strokeWidth={1.5}
                                            className={`h-5 w-5 shrink-0 transition-transform duration-200 motion-reduce:transition-none ${
                                                aberta ? "rotate-180" : ""
                                            }`}
                                        />
                                    </button>
                                </h3>
                                <div
                                    id={idPainel}
                                    role="region"
                                    aria-labelledby={idBotao}
                                    aria-hidden={!aberta}
                                    className={`grid overflow-hidden transition-[grid-template-rows] duration-200 motion-reduce:transition-none ${
                                        aberta ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="max-w-prose pb-5 leading-relaxed text-cinza">
                                            {item.resposta}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}

export default Faq;
