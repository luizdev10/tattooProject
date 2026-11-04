import { useState } from "react";
import { Link } from "react-router-dom";
import { useRevelar } from "../hooks/useRevelar";
import { ARTISTAS, LINK_MAPA, linkWhats } from "../lib/artistas";

const ESTILOS = ["Black and grey", "Realismo", "Fineline", "Colorida", "Anime", "Cobertura"];
const LOCAIS = ["Braço", "Antebraço", "Perna", "Costas", "Peito", "Costela"];
const TAMANHOS = ["5", "10", "15", "20", "30"];
const PERIODOS = ["Manhã", "Tarde", "Noite"];

function formatarDiaBR(iso) {
    if (!iso) return "";
    const partes = iso.split("-");
    if (partes.length !== 3) return iso;
    const [ano, mes, dia] = partes;
    return `${dia}/${mes}/${ano}`;
}

function Chip({ label, pressed, onClick }) {
    return (
        <button type="button" className="chip" aria-pressed={pressed} onClick={onClick}>
            {label}
        </button>
    );
}

export default function Contato({ artista, setArtista }) {
    const { ref: refSecao, oculto } = useRevelar();
    const [nome, setNome] = useState("");
    const [ideia, setIdeia] = useState("");
    const [estilos, setEstilos] = useState([]);
    const [local, setLocal] = useState("");
    const [tamanho, setTamanho] = useState("");
    const [dia, setDia] = useState("");
    const [periodo, setPeriodo] = useState("");

    const a = ARTISTAS[artista];

    const toggleEstilo = (valor) =>
        setEstilos((atual) => (atual.includes(valor) ? atual.filter((v) => v !== valor) : [...atual, valor]));

    const toggleUnico = (valorAtual, setter) => (valor) => setter(valorAtual === valor ? "" : valor);
    const toggleLocal = toggleUnico(local, setLocal);
    const toggleTamanho = toggleUnico(tamanho, setTamanho);
    const togglePeriodo = toggleUnico(periodo, setPeriodo);

    const cm = parseFloat((tamanho || "").replace(",", "."));
    const estimativa = cm > 0 ? Math.ceil(cm / 5) * 80 : null;

    const linhas = [`Olá ${a.nome}! Quero fazer uma tatuagem.`];
    if (nome.trim()) linhas.push(`Nome: ${nome.trim()}`);
    if (ideia.trim()) linhas.push(`Ideia: ${ideia.trim()}`);
    if (estilos.length) linhas.push(`Estilo: ${estilos.join(", ")}`);
    if (local.trim()) linhas.push(`Local do corpo: ${local.trim()}`);
    if (tamanho.trim()) linhas.push(`Tamanho: ${tamanho.trim()} cm`);
    if (estimativa) linhas.push(`Estimativa do site: R$ ${estimativa.toLocaleString("pt-BR")} (só uma referência; o orçamento final é combinado aqui)`);
    if (dia) linhas.push(`Dia de preferência: ${formatarDiaBR(dia)}`);
    if (periodo) linhas.push(`Período: ${periodo}`);
    const mensagem = linhas.join("\n");

    return (
        <section ref={refSecao} className="contact" id="contato">
            <div className={`wrap contact-grid rv ${oculto ? "pre" : ""}`}>
                <div className="contact-info">
                    <h2>vamos criar sua história</h2>
                    <p className="lead">Preencha o formulário e a mensagem chega pronta no WhatsApp. O orçamento final é combinado na conversa.</p>
                    <div className="where">
                        <div>
                            <h3>Onde fica</h3>
                            <p>Rua Coronel Filemon Teles, 30<br />Bairro José Geraldo da Cruz<br />Juazeiro do Norte, CE</p>
                            <a className="btn ink" href={LINK_MAPA} target="_blank" rel="noopener noreferrer">Ver no mapa</a>
                        </div>
                        <div>
                            <h3>Instagram</h3>
                            <p>
                                <a href={ARTISTAS.Pedro.instagram} target="_blank" rel="noopener noreferrer">{ARTISTAS.Pedro.instagramHandle}</a>
                                <br />
                                <a href={ARTISTAS.Bruna.instagram} target="_blank" rel="noopener noreferrer">{ARTISTAS.Bruna.instagramHandle}</a>
                            </p>
                        </div>
                    </div>
                </div>

                <form id="brief" noValidate onSubmit={(e) => e.preventDefault()}>
                    <div className="grp">
                        <h3>Com quem você quer falar?</h3>
                        <div className="pickrow" role="group" aria-label="Escolher artista">
                            {["Pedro", "Bruna"].map((nomeArtista) => (
                                <button
                                    key={nomeArtista}
                                    type="button"
                                    className="artist"
                                    aria-pressed={artista === nomeArtista}
                                    onClick={() => setArtista(nomeArtista)}
                                >
                                    <b>{nomeArtista}</b>
                                    <span>{ARTISTAS[nomeArtista].especialidade}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grp">
                        <h3>Você</h3>
                        <label htmlFor="f-nome">
                            Seu nome
                            <input id="f-nome" type="text" autoComplete="name" placeholder="Como posso te chamar?" value={nome} onChange={(e) => setNome(e.target.value)} />
                        </label>
                    </div>

                    <div className="grp">
                        <h3>A tatuagem</h3>
                        <label htmlFor="f-ideia">
                            Sua ideia
                            <textarea id="f-ideia" placeholder="Conte o que você imagina ou cole um link de referência" value={ideia} onChange={(e) => setIdeia(e.target.value)} />
                        </label>

                        <span className="chips-label" id="lbl-estilo">Estilo (pode marcar mais de um)</span>
                        <div className="chips" role="group" aria-labelledby="lbl-estilo">
                            {ESTILOS.map((e) => (
                                <Chip key={e} label={e} pressed={estilos.includes(e)} onClick={() => toggleEstilo(e)} />
                            ))}
                        </div>

                        <div className="fields">
                            <label className="full" htmlFor="f-local">
                                Local do corpo
                                <input id="f-local" type="text" placeholder="Antebraço, costela…" value={local} onChange={(e) => setLocal(e.target.value)} />
                            </label>
                            <div className="chips full" role="group" aria-label="Locais mais comuns">
                                {LOCAIS.map((l) => (
                                    <Chip key={l} label={l} pressed={local.trim().toLowerCase() === l.toLowerCase()} onClick={() => toggleLocal(l)} />
                                ))}
                            </div>

                            <label className="full" htmlFor="f-tam">
                                Tamanho aproximado (cm)
                                <input id="f-tam" type="number" inputMode="decimal" step="0.1" min="0" placeholder="Ex.: 15" value={tamanho} onChange={(e) => setTamanho(e.target.value)} />
                            </label>
                            <div className="chips full" role="group" aria-label="Tamanhos mais comuns">
                                {TAMANHOS.map((t) => (
                                    <Chip key={t} label={`${t} cm`} pressed={tamanho === t} onClick={() => toggleTamanho(t)} />
                                ))}
                            </div>

                            {estimativa && (
                                <div className="estimate full" aria-live="polite">
                                    <span className="est-label">Estimativa para {tamanho.replace(".", ",")} cm</span>
                                    <strong className="est-val">R$ {estimativa.toLocaleString("pt-BR")}</strong>
                                    <p className="est-note">Isto é só uma estimativa, calculada pelo tamanho. O preço final depende da complexidade e dos detalhes do desenho, e o orçamento é combinado no WhatsApp.</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="grp">
                        <h3>Quando</h3>
                        <label htmlFor="f-dia">
                            Dia de preferência
                            <input id="f-dia" type="date" value={dia} onChange={(e) => setDia(e.target.value)} />
                        </label>
                        <span className="chips-label" id="lbl-per">Período de preferência</span>
                        <div className="chips" role="group" aria-labelledby="lbl-per">
                            {PERIODOS.map((p) => (
                                <Chip key={p} label={p} pressed={periodo === p} onClick={() => togglePeriodo(p)} />
                            ))}
                        </div>
                    </div>

                    <div className="preview" aria-live="polite">
                        <span className="pv-label">Sua mensagem, como vai chegar no WhatsApp</span>
                        <p className="pv">{mensagem}</p>
                    </div>

                    <a className="btn lilac" href={linkWhats(a.numero, mensagem)} target="_blank" rel="noopener noreferrer">
                        Enviar pelo WhatsApp
                    </a>
                    <p className="note">A estimativa é só uma referência. O orçamento final, o dia e o horário são combinados pelo WhatsApp.</p>
                    <p className="phones">WhatsApp {artista === "Pedro" ? "do Pedro" : "da Bruna"}: {a.telefone}</p>
                </form>
            </div>

            <footer className="foot">
                <div className="wrap">
                    <span className="big" aria-hidden="true">pedro menezes <span>&amp; bruna</span></span>
                    <div className="foot-cols">
                        <div>
                            <h3>Estúdio</h3>
                            <p>Rua Coronel Filemon Teles, 30<br />Bairro José Geraldo da Cruz<br />Juazeiro do Norte, CE</p>
                            <a className="btn" href={LINK_MAPA} target="_blank" rel="noopener noreferrer">Ver no mapa</a>
                        </div>
                        <div>
                            <h3>Pedro</h3>
                            <p className="soft">{ARTISTAS.Pedro.especialidade}</p>
                            <p>{ARTISTAS.Pedro.telefone}</p>
                            <a href={linkWhats(ARTISTAS.Pedro.numero, "Olá Pedro! Quero fazer uma tatuagem")} target="_blank" rel="noopener noreferrer">Chamar no WhatsApp</a>
                            <a href={ARTISTAS.Pedro.instagram} target="_blank" rel="noopener noreferrer">{ARTISTAS.Pedro.instagramHandle}</a>
                        </div>
                        <div>
                            <h3>Bruna</h3>
                            <p className="soft">{ARTISTAS.Bruna.especialidade}</p>
                            <p>{ARTISTAS.Bruna.telefone}</p>
                            <a href={linkWhats(ARTISTAS.Bruna.numero, "Olá Bruna! Quero fazer uma tatuagem")} target="_blank" rel="noopener noreferrer">Chamar no WhatsApp</a>
                            <a href={ARTISTAS.Bruna.instagram} target="_blank" rel="noopener noreferrer">{ARTISTAS.Bruna.instagramHandle}</a>
                        </div>
                        <div>
                            <h3>Páginas</h3>
                            <a href="#trabalhos">Trabalhos</a>
                            <a href="#sobre">Sobre</a>
                            <a href="#faq">Perguntas</a>
                            <a href="#contato">Contato</a>
                        </div>
                    </div>
                    <div className="row">
                        <span>Pedro Menezes &amp; Bruna Tattoo · Juazeiro do Norte, CE</span>
                        <Link to="/politicas-de-privacidade">Política de privacidade</Link>
                    </div>
                </div>
            </footer>
        </section>
    );
}
