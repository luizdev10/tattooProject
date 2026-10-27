import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { SiInstagram } from "@icons-pack/react-simple-icons";

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

const INSTAGRAM = {
  Pedro: "https://www.instagram.com/pedromenezes_3/",
  Bruna: "https://www.instagram.com/_brunatattoo/",
};

const photosWork = [
  { id: "p3", artista: "Pedro", url: foto3, w: 532, h: 836, tag: "Black and grey", alt: "Tatuagem black and grey de samurai", desc: "Tatuagem em black and grey com temática samurai, unindo força e tradição em uma composição imponente, com profundidade de sombras e detalhes que destacam armadura, postura e presença." },
  { id: "p1", artista: "Pedro", url: foto1, w: 627, h: 777, tag: "Realismo", alt: "Tatuagem realista de escultura clássica", desc: "Tatuagem realista, escultura clássica, com contraste marcante e riqueza de detalhes." },
  { id: "p6", artista: "Pedro", url: foto6, w: 438, h: 822, tag: "Realismo", alt: "Tatuagem realista do Chester Bennington em black and grey", desc: "Tatuagem realista em black and grey do Chester Bennington, capturando emoção e intensidade em cada detalhe, com contraste forte e acabamento que homenageia sua presença e legado." },
  { id: "p2", artista: "Pedro", url: foto2, w: 571, h: 766, tag: "Colorida", alt: "Tatuagem colorida do Homem-Aranha", desc: "Tatuagem colorida do Homem-Aranha com traço vibrante, alto contraste e acabamento em estilo comic." },
  { id: "p5", artista: "Pedro", url: foto5, w: 448, h: 720, tag: "Black and grey", alt: "Tatuagem black and grey de caveira samurai", desc: "Tatuagem em black and grey com caveira samurai, combinando simbolismo e impacto visual em uma composição marcante, com sombras profundas e detalhes que reforçam atitude, força e personalidade." },
  { id: "p4", artista: "Pedro", url: foto4, w: 452, h: 747, tag: "Realismo", alt: "Tatuagem realista do Homem de Ferro em black and grey", desc: "Tatuagem realista do Homem de Ferro em black and grey, com contraste forte e sombreamento preciso." },
  { id: "p7", artista: "Pedro", url: foto7, w: 570, h: 851, tag: "Anime", alt: "Tatuagem do Vegeta em black and grey", desc: "Tatuagem do Vegeta em black and grey com traço de anime, expressão marcante e sombreamento equilibrado, trazendo atitude e fidelidade ao personagem em uma peça cheia de personalidade." },
  { id: "p9", artista: "Pedro", url: foto9, w: 622, h: 703, tag: "Fineline", alt: "Tatuagem de mariposa em black and grey", desc: "Tatuagem de mariposa em black and grey com traço delicado e simbologia mística, unindo equilíbrio, contraste suave e detalhes finos para uma peça elegante e cheia de significado." },
  { id: "p8", artista: "Pedro", url: foto8, w: 615, h: 878, tag: "Black and grey", alt: "Tatuagem black and grey de múmias", desc: "Tatuagem em black and grey com composição de múmias, explorando textura, contraste e profundidade para criar uma peça sombria, expressiva e cheia de impacto visual." },

  { id: "b1", artista: "Bruna", url: brunaFoto1, w: 691, h: 915, tag: "Realismo", alt: "Tatuagem realista de rosto com relógio e leão no antebraço", desc: "Manga de antebraço em realismo, unindo um rosto de olhos claros a um relógio quebrado e à face de um leão, com transições de sombra que costuram os três elementos numa só composição." },
  { id: "b2", artista: "Bruna", url: brunaFoto2, w: 517, h: 670, tag: "Realismo", alt: "Tatuagem realista de olho, relógio e águia no antebraço", desc: "Manga de antebraço em realismo com olho, numerais romanos e cabeça de águia, com os olhos em azul vivo destacando-se do preto e cinza ao redor." },
  { id: "b3", artista: "Bruna", url: brunaFoto3, w: 671, h: 884, tag: "Realismo", alt: "Tatuagem realista de rosto feminino com serpente", desc: "Braço fechado em realismo: rosto feminino e serpente se fundem numa só pele, com olhos em âmbar e textura de escamas que atravessa o retrato." },
  { id: "b4", artista: "Bruna", url: brunaFoto4, w: 460, h: 753, tag: "Colorida", alt: "Tatuagem colorida de caveira em chamas com corrente", desc: "Caveira em chamas na canela, toda colorida, com tons de laranja e vermelho e uma corrente presa aos dentes reforçando o peso da imagem." },
  { id: "b5", artista: "Bruna", url: brunaFoto5, w: 476, h: 826, tag: "Fineline", alt: "Tatuagem fineline autoral no ombro", desc: "Composição autoral em fineline no ombro, com um perfil feminino dissolvendo-se em traços soltos, pássaros e elementos geométricos — peça própria para quem quer contar uma história sem apelar pro óbvio." },
  { id: "b6", artista: "Bruna", url: brunaFoto6, w: 506, h: 561, tag: "Realismo", alt: "Tatuagem realista de mulher indígena com cocar", desc: "Retrato realista no antebraço de uma mulher com cocar de penas, pintura facial em vermelho e acabamento detalhado em cada pena e conta." },
  { id: "b7", artista: "Bruna", url: brunaFoto7, w: 514, h: 847, tag: "Anime", alt: "Tatuagem colorida do Naruto com a Raposa de Nove Caudas", desc: "Manga colorida com o Naruto e a sombra da Raposa de Nove Caudas surgindo atrás, em laranja e preto, fiel ao anime." },
  { id: "b8", artista: "Bruna", url: brunaFoto8, w: 501, h: 712, tag: "Realismo", alt: "Tatuagem realista de olho e águia, close no antebraço", desc: "Outro ângulo da manga de olho e águia: destaque pro trabalho de pena por pena e pro contraste do azul do olho da ave." },
  { id: "b9", artista: "Bruna", url: brunaFoto9, w: 520, h: 832, tag: "Anime", alt: "Tatuagem do Gohan Super Sayajin em black and grey", desc: "Gohan em modo Super Sayajin no antebraço, em black and grey, com pontilhismo marcando as luzes do cabelo e da aura." },
  { id: "b10", artista: "Bruna", url: brunaFoto10, w: 470, h: 642, tag: "Anime", alt: "Tatuagem do Ryuk, de Death Note, no braço", desc: "Ryuk, de Death Note, no braço, com os olhos e a maçã em vermelho destacando-se do restante em black and grey." },
];

const estilos = ["Todos", ...new Set(photosWork.map((p) => p.tag))];
const artistas = ["Pedro", "Bruna"];

function Trabalhos() {
  const [estilo, setEstilo] = useState("Todos");
  const [artista, setArtista] = useState("Pedro");
  const [openIndex, setOpenIndex] = useState(null);

  const lista = photosWork
    .filter((p) => estilo === "Todos" || p.tag === estilo)
    .filter((p) => p.artista === artista);
  const total = lista.length;
  const isOpen = openIndex !== null;

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(() => setOpenIndex((i) => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setOpenIndex((i) => (i + 1) % total), [total]);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, prev, next]);

  const current = isOpen ? lista[openIndex] : null;

  return (
    <section id="trabalhos" className="scroll-mt-16 w-full bg-grafite px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-gotica text-6xl lowercase leading-none text-papel md:text-8xl">trabalhos</h2>
            <p className="mt-4 max-w-md text-cinza">
              Uma seleção de peças recentes. Toque numa foto para ver em tamanho maior.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 md:items-end">
            <div role="group" aria-label="Filtrar por tatuador" className="flex flex-wrap gap-2">
              {artistas.map((a) => (
                <button
                  key={a}
                  type="button"
                  aria-pressed={artista === a}
                  onClick={() => setArtista(a)}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                    artista === a
                      ? "border-papel bg-papel text-tinta"
                      : "border-white/15 text-cinza hover:border-white/40 hover:text-papel"
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>

            <div role="group" aria-label="Filtrar por estilo" className="flex flex-wrap gap-2">
              {estilos.map((e) => (
                <button
                  key={e}
                  type="button"
                  aria-pressed={estilo === e}
                  onClick={() => setEstilo(e)}
                  className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                    estilo === e
                      ? "border-stencil-claro bg-stencil-claro text-tinta"
                      : "border-white/15 text-cinza hover:border-white/40 hover:text-papel"
                  }`}
                >
                  {e}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 columns-2 gap-3 sm:gap-5 lg:columns-3">
          {lista.map((item, index) => (
            <figure key={item.id} className="mb-3 break-inside-avoid sm:mb-5">
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                aria-label={`Ampliar: ${item.alt}`}
                className="block w-full cursor-zoom-in overflow-hidden rounded-sm"
              >
                <img
                  src={item.url}
                  alt={item.alt}
                  width={item.w}
                  height={item.h}
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                  className="w-full bg-white/5 transition-opacity duration-300 hover:opacity-85"
                />
              </button>
              <figcaption className="mt-2 text-sm text-cinza">{item.tag}</figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={INSTAGRAM.Pedro}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-sm border border-white/20 px-5 py-3 text-papel transition-colors hover:border-papel"
          >
            <SiInstagram className="h-4 w-4" />
            Pedro no Instagram
          </a>
          <a
            href={INSTAGRAM.Bruna}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-sm border border-white/20 px-5 py-3 text-papel transition-colors hover:border-papel"
          >
            <SiInstagram className="h-4 w-4" />
            Bruna no Instagram
          </a>
        </div>
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={close}
          className="fixed inset-0 z-50 flex items-center justify-center bg-tinta/95 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={close}
            autoFocus
            aria-label="Fechar"
            className="absolute right-4 top-4 rounded-full p-2 text-papel transition-colors hover:bg-white/10"
          >
            <X className="h-7 w-7" strokeWidth={1.5} />
          </button>

          {total > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Foto anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-papel transition-colors hover:bg-white/10 md:left-6"
            >
              <ChevronLeft className="h-9 w-9" strokeWidth={1.5} />
            </button>
          )}

          <figure onClick={(e) => e.stopPropagation()} className="flex max-h-full max-w-3xl flex-col items-center">
            <img src={current.url} alt={current.alt} className="max-h-[72vh] w-auto rounded-sm object-contain" />
            <figcaption className="mt-5 max-w-xl text-center text-sm leading-relaxed text-papel/85">
              {current.desc}
              <span className="mt-2 block text-xs text-cinza">
                {openIndex + 1} de {total}
              </span>
            </figcaption>
          </figure>

          {total > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Próxima foto"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-papel transition-colors hover:bg-white/10 md:right-6"
            >
              <ChevronRight className="h-9 w-9" strokeWidth={1.5} />
            </button>
          )}
        </div>
      )}
    </section>
  );
}

export default Trabalhos;
