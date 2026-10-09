import React from "react";
import bgWorks from "../assets/img/bg-works.PNG";
import { MoveRight } from "lucide-react";

function Inicio() {
    const NUMERO_WHATS = "5588988151026";
    const texto = "Olá Pedro! Quero fazer uma tatuagem";
    const mensagem = `https://wa.me/${NUMERO_WHATS}?text=${encodeURIComponent(texto)}`;
    return (
        <section id="inicio" className="relative flex h-screen w-full items-center overflow-hidden bg-neutral-950">
            <div
                className="absolute inset-0 bg-cover bg-right bg-no-repeat opacity-25 lg:bg-top"
                style={{ backgroundImage: `url(${bgWorks})` }}
            />
            <div className="absolute inset-0  from-black/70 via-transparent to-neutral-900 " />
            <div className="relative z-10 flex max-w-7xl flex-col px-70 pt-20 md:pt-0">
                <h1 className="font-[Pirata_One] text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-widest text-gray-200 drop-shadow-lg">
                    PEDRO MENEZES
                </h1>

                <p className="mt-4 md:mt-6 max-w-lg text-lg sm:text-xl md:text-2xl font-light leading-relaxed tracking-wide text-gray-300 font-[Medula_One]">
                    Mais do que uma tatuagem, uma forma de expressar quem você é. Cada ideia nasce de uma história e ganha vida em uma arte feita com cuidado, personalidade e atenção a cada detalhe para que ela seja única e tenha significado para você.
                </p>
                <a href={mensagem}
                    target="_blank"
                    className="text-xl text-white p-2 w-50 rounded-[3px] border-2 flex items-center gap-5 mt-10 ">Fale comigo!! <MoveRight /></a>
            </div>
        </section>
    );
}

export default Inicio;