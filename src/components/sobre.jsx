import backP from "../assets/img/sobrePE.PNG";
import fotoSobre from "../assets/img/fotosobre.png";

function Sobre() {
    return (
        <section
            id="sobre"
            className=" relative w-full h-screen bg-neutral-900"
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
                        className="h-60 w-40 rounded-lg object-cover shadow-lg"
                    />
                </div>
                <div id="test" className="">

                    <div className=" font-[Pirata_One] text-center flex flex-col items-center">
                        <p className="text-6xl text-gray-400">SOBRE</p>
                        <p className="text-7xl text-gray-200">PEDRO</p>
                        <span className="w-15 h-0.5 bg-amber-100 mb-3"></span>
                    </div>

                    <div className="font-[Montserrat] text-center text-amber-100 w-52">
                        <p className="">A PELE É A TELA.<br />
                            A TATUAGEM É A HISTÓRIA.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sobre;