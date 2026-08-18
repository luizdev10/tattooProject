import backP from "../assets/img/sobrePE.PNG";
import fotoSobre from "../assets/img/fotosobre.png";
import { ScrollText, Minus } from "lucide-react"

function Sobre() {

    const history = [
        { id: 1, Etapa: "01", Title: "O COMEÇO", Text: "Fiz minha primeira tatuagem aos 18 anos por curiosidade. O verdadeiro fascínio e a paixão pela arte vieram um pouco mais tarde." },
        { id: 2, Etapa: "02", Title: "A DESCOBERTA", Text: "Entendi cedo que o caminho tradicional não era para mim. Trabalhei em diversas áreas, onde aprendi a escutar pessoas e enxergar novas possibilidades." },
        { id: 3, Etapa: "03", Title: "O PRIMEIRO KIT", Text: "Com um kit básico nas mãos, transformei meu quarto em estúdio e comecei a praticar em EVA, cascas de bananas, laranjas e peles sintéticas caseiras." },
        { id: 4, Etapa: "04", Title: "A PROFISSÃO", Text: "Os primeiros traços em pele humana foram desafiadores, mas a persistência venceu. Não desisti, apurei a técnica e fiz da arte minha profissão." }
    ]

    return (
        <section
            id="sobre"
            className="relative w-full h-screem bg-neutral-900"
        >
            <div
                className="pointer-events-none absolute inset-0 h-full w-full bg-cover bg-left bg-no-repeat opacity-20"
                style={{ backgroundImage: `url(${backP})` }}
            />

            <div className="z-10 w-full max-w-4xl flex justify-around items-center pt-10" >
                <div className=" max-w-xs shrink-0 opacity-80">
                    <img
                        src={fotoSobre}
                        alt="Foto Pedro Menezes"
                        className="h-60 w-40 rounded-lg object-cover shadow-lg "
                    />
                </div>
                <div id="test" className="">

                    <div className=" font-[Pirata_One] text-center flex flex-col items-center">
                        <p className="text-6xl text-gray-400">SOBRE O</p>
                        <p className="text-7xl text-gray-200">PEDRO</p>
                        <span className="w-15 h-0.5 bg-amber-100 mb-3"></span>
                    </div>

                    <div className="font-[Medula_One] text-[27px] text-center text-amber-100 w-52 pt-4">
                        <p className="">A PELE É A TELA.<br />
                            A TATUAGEM É A HISTÓRIA.</p>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="flex flex-col items-center text-5xl pt-5">
                    <p className="font-[Medula_One] text-gray-300">MINHA HISTÓRIA</p>
                    <div className="flex">
                        <Minus className=" text-gray-200 size-10" />
                        <ScrollText className="text-gray-100 size-10" />
                        <Minus className=" text-gray-200 size-10" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-y-10 font-[Medula_One] text-gray-200 px-1 ">
                    {history.map((item, index) => (
                        <div
                            key={item.id}
                            className={`flex flex-col items-center text-center px-4 ${index % 2 === 0 ? "border-r border-gray-100/25" : ""
                                }`}
                        >
                            <p className="text-2xl text-gray-100/50">{item.Etapa}</p>
                            <p className="text-3xl text-gray-100">{item.Title}</p>
                            <p className="font-[Montserrat] text-xl mt-2 text-gray-100/70 leading-relaxed">
                                {item.Text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Sobre;