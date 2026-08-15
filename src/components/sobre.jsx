import backP from "../assets/img/sobrePE.PNG"
function Sobre() {
    return (
        <section id="sobre" className="scroll-m-20 relative flex min-h-screen w-full flex-col items-center justify-center bg-neutral-900"
        >
            <div className="pointer-events-none absolute inset-0 h-full bg-cover bg-left bg-no-repeat opacity-20"
            style={{backgroundImage: `url(${backP})`}}/>
            <div className="z-10">
                <div className="flex justify-center items-center">
                    <p>SOBRE</p>
                    <p>PEDRO MN</p>
                </div>
                <div>
                    <p>A PELE É A TELA</p>
                    <p>A TATUAGEM É A HISTÓRIA</p>
                </div>
            </div>
            <div>
                <div>
                    <img src="fotosobre.png" alt="Foto pedro menezes" />
                </div>
                <div>
                    <p>cada tatuagem começa com uma ideia, mas o que imoporta é o significado que ela carrega para sempre</p>
                    <p>Meu trabalho é tranformar histórias,referências e personalidade em arte com técnica, atenção e propósito</p>
                    <p>Mais que tatuar, é sobre marcar momentos que ficam para sempre.</p>
                </div>
            </div>
        </section>
    )
}

export default Sobre;