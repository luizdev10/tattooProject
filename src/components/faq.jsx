import { useRevelar } from "../hooks/useRevelar";

const perguntas = [
    {
        id: "orcamento",
        pergunta: "Como funciona o orçamento?",
        resposta: "O valor depende do tamanho, da técnica e do tempo de sessão. Depois de ver sua ideia ou referência, o orçamento é combinado direto pelo WhatsApp.",
    },
    {
        id: "agenda",
        pergunta: "Preciso marcar com antecedência?",
        resposta: "Sim, os atendimentos são organizados por agenda. Fale com Pedro ou Bruna pelo WhatsApp para ver os horários disponíveis.",
    },
    {
        id: "referencia",
        pergunta: "Posso levar minha própria ideia ou referência?",
        resposta: "Pode sim. Traga fotos, referências ou só uma ideia solta. Ela é conversada e ajustada com você antes de ir pra pele.",
    },
    {
        id: "pos-tatuagem",
        pergunta: "Quais cuidados devo ter depois de tatuar?",
        resposta: "As orientações de cuidado são explicadas pessoalmente depois da sessão e também podem ser reforçadas pelo WhatsApp, caso surja alguma dúvida.",
    },
    {
        id: "cobertura",
        pergunta: "Vocês fazem cobertura (cover-up)?",
        resposta: "Cobertura é avaliada caso a caso, de acordo com a tatuagem atual. O ideal é enviar uma foto e conversar direto pelo WhatsApp.",
    },
];

function Faq() {
    const { ref: refSecao, oculto } = useRevelar();

    return (
        <section ref={refSecao} id="faq">
            <div className={`wrap faq-grid rv ${oculto ? "pre" : ""}`}>
                <h2>perguntas frequentes</h2>
                <div className="faq-list">
                    {perguntas.map((item, index) => (
                        <details key={item.id} open={index === 0}>
                            <summary>{item.pergunta}</summary>
                            <p>{item.resposta}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Faq;
