import { useRevelar } from "../hooks/useRevelar";

const itens = [
    { id: "descartavel", titulo: "Material descartável", texto: "Agulhas e itens de contato direto com a pele são descartáveis, de uso único." },
    { id: "higienizado", titulo: "Ambiente higienizado", texto: "O espaço de trabalho é higienizado entre um atendimento e outro." },
    { id: "pos-sessao", titulo: "Cuidados depois da sessão", texto: "Você recebe orientações de cuidado logo após a tatuagem, para ajudar na cicatrização." },
];

function Cuidados() {
    const { ref: refSecao, oculto } = useRevelar();

    return (
        <section ref={refSecao} className="on-graf care" id="cuidados">
            <div className={`wrap rv ${oculto ? "pre" : ""}`}>
                <h2>cuidados e segurança</h2>
                <div className="care-grid">
                    {itens.map(({ id, titulo, texto }) => (
                        <div key={id}>
                            <h3>{titulo}</h3>
                            <p>{texto}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Cuidados;
