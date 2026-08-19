import bgWorks from "../assets/img/bg-works.PNG";

import foto1 from "../assets/img/foto1.PNG";
import foto2 from "../assets/img/foto2.PNG";
import foto3 from "../assets/img/foto3.PNG";
import foto4 from "../assets/img/foto4.PNG";
import foto5 from "../assets/img/foto5.PNG";
import foto6 from "../assets/img/foto6.PNG";
import foto7 from "../assets/img/foto7.PNG";
import foto8 from "../assets/img/foto8.PNG";
import foto9 from "../assets/img/foto9.PNG";

function Trabalhos() {
  const photosWork = [
    { id: 1, url: foto1 ,desc:"Tatuagem realista, escultura clássica, com contraste marcante e riqueza de detalhes"},
    { id: 2, url: foto2 ,desc:"Tatuagem colorida do Homem-Aranha com traço vibrante, alto contraste e acabamento em estilo comic"},
    { id: 3, url: foto3 ,desc:"Tatuagem em black and grey com temática samurai, unindo força e tradição em uma composição imponente, com profundidade de sombras e detalhes que destacam armadura, postura e presença."},
    { id: 4, url: foto4 ,desc:"Tatuagem realista do Homem de Ferro em black and grey, com contraste forte e sombreamento preciso."},
    { id: 5, url: foto5 ,desc:"Tatuagem em black and grey com caveira samurai, combinando simbolismo e impacto visual em uma composição marcante, com sombras profundas e detalhes que reforçam atitude, força e personalidade."},
    { id: 6, url: foto6 ,desc:"Tatuagem realista em black and grey do Chester Bennington, capturando emoção e intensidade em cada detalhe, com contraste forte e acabamento que homenageia sua presença e legado."},
    { id: 7, url: foto7 ,desc:"Tatuagem do Vegeta em black and grey com traço de anime, expressão marcante e sombreamento equilibrado, trazendo atitude e fidelidade ao personagem em uma peça cheia de personalidade."},
    { id: 8, url: foto8 ,desc:"Tatuagem em black and grey com composição de múmias, explorando textura, contraste e profundidade para criar uma peça sombria, expressiva e cheia de impacto visual."},
    { id: 9, url: foto9 ,desc:"Tatuagem de mariposa em black and grey com traço delicado e simbologia mística, unindo equilíbrio, contraste suave e detalhes finos para uma peça elegante e cheia de significado."},
  ];

  return (
    <section
      id="trabalhos"
      className="scroll-m-20 relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-neutral-900 px-6 py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 h-full bg-cover bg-right bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${bgWorks})` }}
      />

      <div className="relative z-10 flex w-full max-w-6xl flex-col">
        <div className="mb-10">
          <span className="block font-[Pirata_One] text-5xl text-gray-400">ALGUNS</span>
          <span className="block font-[Pirata_One] text-6xl text-gray-200">TRABALHOS</span>
        </div>

        <div className="flex w-full snap-x snap-mandatory gap-6 overflow-x-auto pb-6  md:grid md:grid-cols-3 md:overflow-visible">
          {photosWork.map((item) => (
            <article
              key={item.id}
              className="group relative min-w-[82vw] snap-center overflow-hidden rounded-xl border border-amber-100/20 bg-neutral-950 shadow-lg shadow-black/30 sm:min-w-[320px] md:min-w-0"
            >
              <div className="relative">
                <img
                  src={item.url}
                  alt={`Trabalho ${item.id}`}
                  draggable="false"
                  className="h-96 w-full object-cover transition-transform duration-500"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-transparent to-transparent" />
              </div>

              <div className="flex items-center justify-between px-4 py-3">
                <p className="font-[Montserrat] text-sm tracking-wide text-amber-100/85">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        <a
          href="https://www.instagram.com/pedromenezes_3/"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-amber-600 px-6 py-3 font-[Medula_One] text-2xl text-neutral-900 transition-colors hover:bg-amber-500"
        >
          CLIQUE PARA VER MAIS
        </a>
      </div>
    </section>
  );
}

export default Trabalhos;