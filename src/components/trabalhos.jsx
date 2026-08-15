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
        { id: 1, url: foto1 },
        { id: 2, url: foto2 },
        { id: 3, url: foto3 },
        { id: 4, url: foto4 },
        { id: 5, url: foto5 },
        { id: 6, url: foto6 },
        { id: 7, url: foto7 },
        { id: 8, url: foto8 },
        { id: 9, url: foto9 },
    ];

    return (
        <section id="trabalhos" className=" scroll-m-20 relative flex min-h-screen w-full flex-col items-center justify-center bg-neutral-900">
            <div
                className="pointer-events-none absolute inset-0 h-full bg-cover bg-right bg-no-repeat opacity-20"
                style={{ backgroundImage: `url(${bgWorks})` }}
            />

            <div className="relative z-10 flex w-full flex-col items-center">
                <div className="relative -top-12 flex flex-col items-start">
                    <span className="font-[Pirata_One] text-5xl text-gray-400">
                        ALGUNS
                    </span>

                    <span className="font-[Pirata_One] text-6xl text-gray-300">
                        TRABALHOS
                    </span>
                </div>

                <div className=" relative w-full -top-10 overflow-hidden md:mx-auto md:max-w-6xl md:top-0">
                    <div className="flex w-full snap-x snap-mandatory gap-6 overflow-x-auto pb-6 touch-pan-x scrollbar-none select-none cursor-grab active:cursor-grabbing md:grid md:grid-cols-3 md:overflow-visible">
                        {photosWork.map((item) => (
                            <div
                                key={item.id}
                                className="group relative min-w-[80vw] snap-center overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 sm:min-w-[320px] md:min-w-0"
                            >
                                <img
                                    src={item.url}
                                    alt={`Trabalho ${item.id}`}
                                    draggable="false"
                                    className="h-96 w-full object-cover transition-transform duration-500 pointer-events-none md:group-hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-amber-600 h-9 w-55 flex justify-center items-center rounded-4xl">
                    <a href="https://www.instagram.com/pedromenezes_3/" target="_blank">
                        <button className="font-[Medula_One] text-2xl">CLIQUE PARA VER MAIS</button>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Trabalhos;