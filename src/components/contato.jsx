import { useState } from "react";
import { MapPin, Clock, MessageCircle } from "lucide-react";
import { SiInstagram } from "@icons-pack/react-simple-icons";

function formatarDiaMes(iso) {
  if (!iso) return "";
  const [, mes, dia] = iso.split("-");
  return `${dia}/${mes}`;
}

function Contato() {
  const [form, setForm] = useState({
    nome: "",
    ideia: "",
    local: "",
    tamanho: "",
    disponibilidade: "",
    hora: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const enviar = (e) => {
    e.preventDefault();

    const data = formatarDiaMes(form.disponibilidade);
    const quando = [data, form.hora && `às ${form.hora}`]
      .filter(Boolean)
      .join(" ");

    const texto =
      `Olá Pedro! Me chamo ${form.nome}.\n` +
      `Estou com uma ideia de fazer um(a) ${form.ideia}, no(a) ${form.local} com ${form.tamanho}.\n` +
      `Tenho disponibilidade ${quando || "a combinar"}.`;

    window.open(
      `https://wa.me/5588988151026?text=${encodeURIComponent(texto)}`,
      "_blank"
    );
  };

  const campo =
    "border-b border-amber-100/25 bg-transparent py-3 text-amber-100 outline-none placeholder:text-amber-100/40 focus:border-amber-100 autofill:shadow-[inset_0_0_0_1000px_#171717] [&:-webkit-autofill]:[-webkit-text-fill-color:#fef3c7] [color-scheme:dark]";

  return (
    <section id="contato" className="scroll-m-20 w-full bg-neutral-900 py-24 px-6">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
        <div className="flex flex-col">
          <div className="font-[Pirata_One] flex flex-col">
            <p className="text-5xl text-gray-400">VAMOS CRIAR</p>
            <p className="text-6xl text-gray-200">SUA HISTÓRIA</p>
            <span className="mt-2 mb-3 h-0.5 w-32 bg-amber-100" />
          </div>

          <div className="font-[Montserrat] flex flex-col gap-4 text-sm text-gray-100/80">
            <a
              href="https://www.instagram.com/pedromenezes_3/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-[20px] transition-colors hover:text-gray-100"
            >
              <SiInstagram className="h-5 w-5 text-gray-100" />
              @pedromenezes_3
            </a>
            <p className="flex items-center gap-3 text-[15px]">
              <MapPin className="h-5 w-5 shrink-0" strokeWidth={1.25} />
              RUA CORONEL FILEMON TELES, 30 — BAIRRO JOSÉ GERALDO DA CRUZ
            </p>
            
          </div>
        </div>

        <form onSubmit={enviar} className="font-[Montserrat] flex flex-col gap-4">
          <input
            name="nome"
            value={form.nome}
            onChange={handleChange}
            required
            placeholder="Seu nome"
            autoComplete="name"
            className={campo}
          />

          <textarea
            name="ideia"
            value={form.ideia}
            onChange={handleChange}
            required
            rows={3}
            placeholder="Conte sua ideia"
            className={`resize-none ${campo}`}
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              name="local"
              value={form.local}
              onChange={handleChange}
              placeholder="Local do corpo"
              autoComplete="off"
              className={campo}
            />
            <input
              name="tamanho"
              value={form.tamanho}
              onChange={handleChange}
              placeholder="Tamanho (cm)"
              autoComplete="off"
              className={campo}
            />
            <input
              type="date"
              name="disponibilidade"
              value={form.disponibilidade}
              onChange={handleChange}
              required
              min={new Date().toISOString().split("T")[0]}
              className={campo}
            />
            <input
              type="time"
              name="hora"
              value={form.hora}
              onChange={handleChange}
              required
              className={campo}
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