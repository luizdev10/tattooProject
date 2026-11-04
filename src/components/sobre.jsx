import fotoSobre from "../assets/img/fotosobre.webp";
import fotoSobreBruna from "../assets/img/bruna/fotosobre.webp";
import { useRevelar } from "../hooks/useRevelar";

const historiaPedro = [
    { id: 1, Title: "O começo", Text: "Fiz minha primeira tatuagem aos 18 anos por curiosidade. O verdadeiro fascínio e a paixão pela arte vieram um pouco mais tarde." },
    { id: 2, Title: "A descoberta", Text: "Entendi cedo que o caminho tradicional não era para mim. Trabalhei em diversas áreas, onde aprendi a escutar pessoas e enxergar novas possibilidades." },
    { id: 3, Title: "O primeiro kit", Text: "Com um kit básico nas mãos, transformei meu quarto em estúdio e comecei a praticar em EVA, cascas de bananas, laranjas e peles sintéticas caseiras." },
    { id: 4, Title: "A profissão", Text: "Os primeiros traços em pele humana foram desafiadores, mas a persistência venceu. Não desisti, apurei a técnica e fiz da arte minha profissão." },
];

const pontosBruna = [
    { id: 1, Title: "Realismo autoral", Text: "Peças pensadas uma a uma, com leitura própria de cada ideia e de cada pele." },
    { id: 2, Title: "Traço fineline", Text: "Linhas finas e delicadas, para quem busca uma tatuagem discreta e precisa." },
    { id: 3, Title: "Um símbolo seu", Text: "Cada peça carrega um símbolo que é só do cliente. A tatuagem é a sua identidade." },
    { id: 4, Title: "Em Juazeiro", Text: "Atendimento com agenda, em Juazeiro do Norte, CE. Fale pelo WhatsApp para ver os horários." },
];

function Sobre() {
    const pedro = useRevelar();
    const bruna = useRevelar();
    const rv = (hook) => `rv ${hook.oculto ? "pre" : ""}`;

    return (
        <>
            <section className="about about-dark" id="sobre">
                <div ref={pedro.ref} className={`wrap about-block ${rv(pedro)}`}>
                    <div className="about-text">
                        <h2 className="who-title">sobre o pedro</h2>
                        <p className="tagline">A pele é a tela. A tatuagem é a história.</p>
                        <p className="lead">Do quarto que virou estúdio às convenções de tatuagem: o caminho do Pedro até aqui, em quatro passos.</p>
                        <ol className="rows">
                            {historiaPedro.map((item) => (
                                <li key={item.id}>
                                    <h3>{item.Title}</h3>
                                    <p>{item.Text}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                    <figure className="portrait">
                        <img
                            src={fotoSobre}
                            alt="Pedro Menezes segurando um troféu em uma convenção de tatuagem, ao lado de uma cliente tatuada"
                            width="327"
                            height="443"
                        />
                        <figcaption>Pedro, em uma convenção de tatuagem.</figcaption>
                    </figure>
                </div>
            </section>

            <section className="about about-light" id="sobre-bruna">
                <div ref={bruna.ref} className={`wrap about-block flip ${rv(bruna)}`}>
                    <figure className="portrait">
                        <img
                            src={fotoSobreBruna}
                            alt="Bruna concentrada tatuando em seu estúdio"
                            width="735"
                            height="905"
                        />
                        <figcaption>Bruna, no estúdio.</figcaption>
                    </figure>
                    <div className="about-text">
                        <h2 className="who-title">sobre a bruna</h2>
                        <p className="tagline">Arte como identidade.</p>
                        <p className="lead">Realismo autoral e traço fineline, pensados como identidade: cada peça carrega um símbolo que é só do cliente. A Bruna atende em Juazeiro do Norte, CE.</p>
                        <ul className="rows">
                            {pontosBruna.map((item) => (
                                <li key={item.id}>
                                    <h3>{item.Title}</h3>
                                    <p>{item.Text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Sobre;
