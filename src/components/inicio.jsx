import React from "react";
import bgWorks from "../assets/img/bg-works.PNG";

function Inicio() {
    return (
        <section id="inicio" className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-neutral-950">
            <div
                className="absolute inset-0 bg-cover bg-right bg-no-repeat opacity-25 lg:bg-top"
                style={{ backgroundImage: `url(${bgWorks})`}}
            />
            <div className="absolute inset-0  from-black/70 via-transparent to-neutral-900 " />
            <div className="relative z-10 flex max-w-4xl flex-col items-center px-6 text-center pt-20 md:pt-0">
                <h1 className="font-[Pirata_One] text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-widest text-gray-200 drop-shadow-lg">
                    PEDRO MENEZES
                </h1>
               
                <p className="mt-4 md:mt-6 max-w-lg text-lg sm:text-xl md:text-2xl font-light leading-relaxed tracking-wide text-gray-300 font-[Medula_One]">
                    Transformando ideias em artes
                </p>
                
            </div>
        </section>
    );
}

export default Inicio;