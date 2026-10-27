// Seção de depoimentos — ainda sem conteúdo real.
//
// Não existem depoimentos reais de clientes para publicar agora, então este
// componente não renderiza nada. Quando houver depoimentos reais (nome,
// texto e, se houver, foto com autorização do cliente), substituir o corpo
// da função por algo como:
//
// const depoimentos = [
//     { id: "1", nome: "Nome do cliente", artista: "Pedro", texto: "Depoimento real do cliente." },
// ];
//
// function Depoimentos() {
//     return (
//         <section id="depoimentos" className="scroll-mt-16 w-full bg-tinta px-4 py-20 sm:px-6 md:py-28">
//             <div className="mx-auto max-w-6xl">
//                 <h2 className="font-gotica text-6xl lowercase leading-none text-papel md:text-8xl">
//                     depoimentos
//                 </h2>
//                 <ul className="mt-12 grid gap-8 md:grid-cols-3">
//                     {depoimentos.map((item) => (
//                         <li key={item.id} className="rounded-sm border border-white/10 p-6">
//                             <p className="leading-relaxed text-papel/85">&ldquo;{item.texto}&rdquo;</p>
//                             <p className="mt-4 text-sm text-cinza">{item.nome} — tatuagem com {item.artista}</p>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </section>
//     );
// }

function Depoimentos() {
    return null;
}

export default Depoimentos;
