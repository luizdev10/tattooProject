import bgWorks from "../assets/img/bg-works.PNG"
function Trabalhos() {
    return(
     <section className="relative flex min-h-screen w-full items-start justify-center bg-neutral-900 pt-16"
     style={{ paddingTop: "80px" }}>
        <div
        className="absolute h-screen inset-0 bg-cover bg-right bg-no-repeat opacity-25"
        style={{ backgroundImage: `url(${bgWorks})`}}>

        </div>
        <div className="flex flex-col z-10">
            <span className="font-[Pirata_One] text-gray-400 text-5xl" >ALGUNS</span>
            <span className="font-[Pirata_One] text-gray-300 text-6xl">TRABALHOS</span>
        </div>

        <div>
            
        </div>
     </section>
    )
}

export default Trabalhos;