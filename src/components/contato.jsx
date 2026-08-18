import { useState } from "react";
import { MapPin, Clock, MessageCircle } from "lucide-react";

function Contato() {
  const [form, setForm] = useState({
    nome: "", ideia: "", local: "", tamanho: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const enviar = (e) => {
    e.preventDefault();
    const texto =
      `Olá Pedro! Me chamo ${form.nome}.\n\n` +
      `Ideia: ${form.ideia}\n` +
      `Local do corpo: ${form.local}\n` +
      `Tamanho: ${form.tamanho}`;
    window.open(
      `https://wa.me/5588988151026?text=${encodeURIComponent(texto)}`,
      "_blank"
    );
  };

  return (
    <section id="contato" className="scroll-m-20 w-full bg-neutral-900 py-24 px-6">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">


        <div className="flex flex-col justify-center">
          <div className="font-[Pirata_One] flex flex-col">
            <p className="text-5xl text-gray-400">VAMOS CRIAR</p>
            <p className="text-6xl text-gray-200">SUA HISTÓRIA</p>
            <span className="mt-4 h-0.5 w-16 bg-amber-100" />
          </div>

          <div className="font-[Montserrat] mt-8 flex flex-col gap-4 text-sm text-amber-100/80">
            <a
              href="https://instagram.com/pedrotattoo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition-colors hover:text-amber-100"
            >
             
              @pedrotattoo
            </a>
            <p className="flex items-center gap-3">
              <MapPin className="h-5 w-5 shrink-0" strokeWidth={1.25} />
              Rua Exemplo, 123 — São Paulo
            </p>
            <p className="flex items-center gap-3">
              <Clock className="h-5 w-5 shrink-0" strokeWidth={1.25} />
              Terça a sábado, 10h às 19h
            </p>
          </div>
        </div>


        <form onSubmit={enviar} className="font-[Montserrat] flex flex-col gap-4">
          <input
            name="nome" value={form.nome} onChange={handleChange}
            required placeholder="Seu nome"
            className="border-b border-amber-100/25 bg-transparent py-3 text-amber-100 outline-none transition-colors placeholder:text-amber-100/40 focus:border-amber-100"
          />
          <textarea
            name="ideia" value={form.ideia} onChange={handleChange}
            required rows={3} placeholder="Conte sua ideia"
            className="resize-none border-b border-amber-100/25 bg-transparent py-3 text-amber-100 outline-none transition-colors placeholder:text-amber-100/40 focus:border-amber-100"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              name="local" value={form.local} onChange={handleChange}
              placeholder="Local do corpo"
              className="border-b border-amber-100/25 bg-transparent py-3 text-amber-100 outline-none transition-colors placeholder:text-amber-100/40 focus:border-amber-100"
            />
            <input
              name="tamanho" value={form.tamanho} onChange={handleChange}
              placeholder="Tamanho (cm)"
              className="border-b border-amber-100/25 bg-transparent py-3 text-amber-100 outline-none transition-colors placeholder:text-amber-100/40 focus:border-amber-100"
            />
          </div>

          <button
            type="submit"
            className="mt-4 flex items-center justify-center gap-2 border border-amber-100/40 py-4 tracking-widest text-amber-100 transition-colors hover:bg-amber-100 hover:text-neutral-900"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={1.25} />
            CHAMAR NO WHATSAPP
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contato;