import { useState } from "react";
import { MapPin, Clock, MessageCircle, Calendar } from "lucide-react";
import { SiInstagram } from "@icons-pack/react-simple-icons";

const NUMERO_WHATS = "5588988151026";

const campo =
  "w-full border-b border-amber-100/25 bg-transparent py-3 text-amber-100 outline-none placeholder:text-amber-100/40 focus:border-amber-100 autofill:shadow-[inset_0_0_0_1000px_#171717] [&:-webkit-autofill]:[-webkit-text-fill-color:#fef3c7] [color-scheme:dark]";

const rotulo = "text-xs uppercase tracking-wider text-amber-100/40";

const iconeCampo =
  "pointer-events-none absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-100/50";

const hojeISO = () => new Date().toISOString().split("T")[0];

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
      `https://wa.me/${NUMERO_WHATS}?text=${encodeURIComponent(texto)}`,
      "_blank"
    );
  };

  return (
    <section
      id="contato"
      className="scroll-m-20 w-full bg-neutral-900 px-6 py-24"
    >
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">

        <div className="flex flex-col justify-center">
          <div className="font-[Pirata_One] flex flex-col">
            <p className="text-5xl text-gray-400">VAMOS CRIAR</p>
            <p className="text-6xl text-gray-200">SUA HISTÓRIA</p>
            <span className="mt-2 mb-3 h-0.5 w-32 bg-amber-100" />
          </div>

          <div className="font-[Montserrat] mt-4 flex flex-col gap-4 text-gray-100/80">
            <a
              href="https://www.instagram.com/pedromenezes_3/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-[20px] transition-colors hover:text-gray-100"
            >
              <SiInstagram className="h-5 w-5 shrink-0 opacity-70" />
              @pedromenezes_3
            </a>

            <p className="flex items-start gap-3 text-[15px] leading-relaxed">
              <MapPin className="mt-1 h-5 w-5 shrink-0" strokeWidth={1.25} />
              RUA CORONEL FILEMON TELES, 30 — BAIRRO JOSÉ GERALDO DA CRUZ
            </p>
          </div>
        </div>

        <form
          onSubmit={enviar}
          className="font-[Montserrat] flex flex-col gap-4"
        >
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
            className={`${campo} resize-none`}
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
          </div>

          <div className="grid grid-cols-2 gap-4">
            <label className="flex flex-col gap-1">
              <span className={rotulo}>Dia</span>
              <div className="relative">
                <Calendar className={iconeCampo} strokeWidth={1.5} />
                <input
                  type="date"
                  name="disponibilidade"
                  value={form.disponibilidade}
                  onChange={handleChange}
                  required
                  min={hojeISO()}
                  className={`${campo} pl-6`}
                />
              </div>
            </label>

            <label className="flex flex-col gap-1">
              <span className={rotulo}>Hora</span>
              <div className="relative">
                <Clock className={iconeCampo} strokeWidth={1.5} />
                <input
                  type="time"
                  name="hora"
                  value={form.hora}
                  onChange={handleChange}
                  required
                  step="1800"
                  className={`${campo} pl-6`}
                />
              </div>
            </label>
          </div>

          <button
            type="submit"
            className="mt-4 flex items-center justify-center gap-2 border border-amber-100/40 py-4 tracking-widest text-amber-100 transition-colors hover:bg-amber-100 hover:text-neutral-900"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={1.25} />
            CHAMAR NO WHATSAPP
          </button>

          <p className="text-center text-xs text-amber-100/40">
            Dia e horário são apenas preferências — confirmamos pelo WhatsApp.
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contato;