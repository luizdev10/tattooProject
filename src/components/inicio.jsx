import React from "react";
import bgStart from "../assets/img/bg-start.PNG";

function Inicio() {
    return (
        <section id="inicio" className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-neutral-950">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
                style={{ backgroundImage: `url(${bgStart})`}}
            />
            <div className="absolute inset-0  from-black/70 via-transparent to-neutral-900 " />
            <div className="relative z-10 flex max-w-4xl flex-col items-center px-6 text-center ">
                <h1 className="font-[Pirata_One] text-7xl font-extrabold tracking-widest text-gray-200 drop-shadow-lg sm:text-6xl md:text-7xl">
                    PEDRO MENEZES
                </h1>
               
                <p className="mt-6 max-w-lg text-2xl font-light leading-relaxed tracking-wide text-gray-300 font-[Medula_One]  sm:text-base">
                    Transformando ideias em artes
                </p>
                
            </div>
        </section>
    );
}

export default Inicio;