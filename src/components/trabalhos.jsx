import { useEffect, useState } from "react";
import { useRevelar } from "../hooks/useRevelar";
import { ARTISTAS } from "../lib/artistas";

import foto1 from "../assets/img/foto1.webp";
import foto2 from "../assets/img/foto2.webp";
import foto3 from "../assets/img/foto3.webp";
import foto4 from "../assets/img/foto4.webp";
import foto5 from "../assets/img/foto5.webp";
import foto6 from "../assets/img/foto6.webp";
import foto7 from "../assets/img/foto7.webp";
import foto8 from "../assets/img/foto8.webp";
import foto9 from "../assets/img/foto9.webp";

import brunaFoto1 from "../assets/img/bruna/foto1.webp";
import brunaFoto2 from "../assets/img/bruna/foto2.webp";
import brunaFoto3 from "../assets/img/bruna/foto3.webp";
import brunaFoto4 from "../assets/img/bruna/foto4.webp";
import brunaFoto5 from "../assets/img/bruna/foto5.webp";
import brunaFoto6 from "../assets/img/bruna/foto6.webp";
import brunaFoto7 from "../assets/img/bruna/foto7.webp";
import brunaFoto8 from "../assets/img/bruna/foto8.webp";
import brunaFoto9 from "../assets/img/bruna/foto9.webp";
import brunaFoto10 from "../assets/img/bruna/foto10.webp";

const photosWork = [
  { id: "p3", artista: "Pedro", url: foto3, w: 532, h: 836, tag: "Black and grey", alt: "Tatuagem black and grey de samurai" },
  { id: "p1", artista: "Pedro", url: foto1, w: 627, h: 777, tag: "Realismo", alt: "Tatuagem realista de escultura clássica" },
  { id: "p6", artista: "Pedro", url: foto6, w: 438, h: 822, tag: "Realismo", alt: "Tatuagem realista do Chester Bennington em black and grey" },
  { id: "p2", artista: "Pedro", url: foto2, w: 571, h: 766, tag: "Colorida", alt: "Tatuagem colorida do Homem-Aranha" },
  { id: "p5", artista: "Pedro", url: foto5, w: 448, h: 720, tag: "Black and grey", alt: "Tatuagem black and grey de caveira samurai" },
  { id: "p4", artista: "Pedro", url: foto4, w: 452, h: 747, tag: "Realismo", alt: "Tatuagem realista do Homem de Ferro em black and grey" },
  { id: "p7", artista: "Pedro", url: foto7, w: 570, h: 851, tag: "Anime", alt: "Tatuagem do Vegeta em black and grey" },
  { id: "p9", artista: "Pedro", url: foto9, w: 622, h: 703, tag: "Fineline", alt: "Tatuagem de mariposa em black and grey" },
  { id: "p8", artista: "Pedro", url: foto8, w: 615, h: 878, tag: "Black and grey", alt: "Tatuagem black and grey de múmias" },

  { id: "b1", artista: "Bruna", url: brunaFoto1, w: 691, h: 915, tag: "Realismo", alt: "Tatuagem realista de rosto com relógio e leão no antebraço" },
  { id: "b2", artista: "Bruna", url: brunaFoto2, w: 517, h: 670, tag: "Realismo", alt: "Tatuagem realista de olho, relógio e águia no antebraço" },
  { id: "b3", artista: "Bruna", url: brunaFoto3, w: 671, h: 884, tag: "Realismo", alt: "Tatuagem realista de rosto feminino com serpente" },
  { id: "b4", artista: "Bruna", url: brunaFoto4, w: 460, h: 753, tag: "Colorida", alt: "Tatuagem colorida de caveira em chamas com corrente" },
  { id: "b5", artista: "Bruna", url: brunaFoto5, w: 476, h: 826, tag: "Fineline", alt: "Tatuagem fineline autoral no ombro" },
  { id: "b6", artista: "Bruna", url: brunaFoto6, w: 506, h: 561, tag: "Realismo", alt: "Tatuagem realista de mulher indígena com cocar" },
  { id: "b7", artista: "Bruna", url: brunaFoto7, w: 514, h: 847, tag: "Anime", alt: "Tatuagem colorida do Naruto com a Raposa de Nove Caudas" },
  { id: "b8", artista: "Bruna", url: brunaFoto8, w: 501, h: 712, tag: "Realismo", alt: "Tatuagem realista de olho e águia, close no antebraço" },
  { id: "b9", artista: "Bruna", url: brunaFoto9, w: 520, h: 832, tag: "Anime", alt: "Tatuagem do Gohan Super Sayajin em black and grey" },
  { id: "b10", artista: "Bruna", url: brunaFoto10, w: 470, h: 642, tag: "Anime", alt: "Tatuagem do Ryuk, de Death Note, no braço" },
];

const estilos = ["Todos", ...new Set(photosWork.map((p) => p.tag))];
const artistas = ["Pedro", "Bruna"];

function FotoGaleria({ item, index, onAbrir }) {
  const { ref, oculto } = useRevelar({ threshold: 0.1 });

  return (
    <button
      ref={ref}
      type="button"
      onClick={onAbrir}
      aria-label={`Ampliar: ${item.alt}`}
      className={`rv ${oculto ? "pre" : ""}`}
      style={{ transitionDelay: `${(index % 6) * 80}ms` }}
    >
      <img src={item.url} alt={item.alt} width={item.w} height={item.h} loading="lazy" decoding="async" draggable="false" />
    </button>
  );
}

function Trabalhos({ artista, setArtista }) {
  const [estilo, setEstilo] = useState("Todos");
  const [aberta, setAberta] = useState(null);
  const { ref: refSecao, oculto } = useRevelar();
  const a = ARTISTAS[artista];

  const listaPorArtista = (nome) => photosWork.filter((p) => p.artista === nome).filter((p) => estilo === "Todos" || p.tag === estilo);

  useEffect(() => {
    if (!aberta) return;
    const onKey = (e) => e.key === "Escape" && setAberta(null);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [aberta]);

  return (
    <section ref={refSecao} className="on-graf" id="trabalhos">
      <div className="wrap">
        <div className={`works-head rv ${oculto ? "pre" : ""}`}>
          <h2>trabalhos</h2>
          <p>Uma seleção de peças recentes. Toque numa foto para ver em tamanho maior.</p>
        </div>

        <div className={`who-row rv ${oculto ? "pre" : ""}`}>
          <div className="who" role="group" aria-label="Escolher artista">
            {artistas.map((nome) => (
              <button
                key={nome}
                type="button"
                aria-pressed={artista === nome}
                onClick={() => setArtista(nome)}
              >
                {nome}
              </button>
            ))}
          </div>
          <p className="meta">{a.fotosCount} peças {artista === "Pedro" ? "do Pedro" : "da Bruna"}</p>
        </div>

        <div className="style-chips" role="group" aria-label="Filtrar por estilo">
          {estilos.map((e) => (
            <button
              key={e}
              type="button"
              className="chip"
              aria-pressed={estilo === e}
              onClick={() => setEstilo(e)}
            >
              {e}
            </button>
          ))}
        </div>

        {artistas.map((nome) => (
          <div className="gallery" key={nome} hidden={artista !== nome}>
            {listaPorArtista(nome).map((item, index) => (
              <FotoGaleria key={item.id} item={item} index={index} onAbrir={() => setAberta(item)} />
            ))}
          </div>
        ))}

        <div className="more">
          <a className="btn lilac" href={a.instagram} target="_blank" rel="noopener noreferrer">
            {a.nome} no Instagram
          </a>
          <a className="link" href="#contato">Pedir orçamento {artista === "Pedro" ? "ao Pedro" : "à Bruna"}</a>
        </div>
      </div>

      {aberta && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Foto ampliada"
          onClick={(e) => e.target === e.currentTarget && setAberta(null)}
        >
          <button type="button" autoFocus onClick={() => setAberta(null)}>Fechar</button>
          <img src={aberta.url} alt={aberta.alt} />
        </div>
      )}
    </section>
  );
}

export default Trabalhos;
