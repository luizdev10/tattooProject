import fotoPedro from "../assets/img/bg-works.webp";
import fotoBruna from "../assets/img/bruna/fotobg.webp";
import { ARTISTAS, linkWhats } from "../lib/artistas";

function Inicio() {
    return (
        <section className="hero" id="inicio">
            <div className="wrap">
                <div>
                    <h1>
                        pedro menezes <span>&amp; bruna</span>
                    </h1>
                    <p className="lead">
                        Duas assinaturas, um estúdio só, em Juazeiro do Norte. Realismo em
                        black and grey e traço fineline. Cada tatuagem nasce da sua história.
                    </p>
                    <div className="cta">
                        <a
                            className="btn lilac"
                            href={linkWhats(ARTISTAS.Pedro.numero, "Olá Pedro! Quero fazer uma tatuagem")}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Falar com Pedro
                        </a>
                        <a
                            className="btn"
                            href={linkWhats(ARTISTAS.Bruna.numero, "Olá Bruna! Quero fazer uma tatuagem")}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Falar com Bruna
                        </a>
                        <a className="link" href="#trabalhos">Ver trabalhos</a>
                    </div>
                </div>

                <div className="duo">
                    <figure>
                        <img
                            src={fotoPedro}
                            alt="Pedro Menezes calçando as luvas antes de tatuar"
                            width="894"
                            height="792"
                        />
                        <figcaption>
                            <b>pedro</b>
                            <span>{ARTISTAS.Pedro.especialidade}</span>
                        </figcaption>
                    </figure>
                    <figure className="bruna-fig">
                        <img
                            src={fotoBruna}
                            alt="Bruna tatuando, concentrada, segurando a máquina sobre o braço da cliente"
                            width="519"
                            height="694"
                        />
                        <figcaption>
                            <b>bruna</b>
                            <span>{ARTISTAS.Bruna.especialidade}</span>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
}

export default Inicio;
