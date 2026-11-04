import { Link } from "react-router-dom";

export default function Politicas() {
  return (
    <div style={{ background: "var(--ink)", color: "var(--bone)", minHeight: "100svh" }}>
      <div className="wrap" style={{ paddingBlock: "clamp(48px, 8vw, 96px)", maxWidth: "720px" }}>
        <div style={{ marginBottom: "40px" }}>
          <Link to="/" className="link">&larr; Voltar para o início</Link>
        </div>

        <div style={{ marginBottom: "48px" }}>
          <h1 style={{ fontSize: "clamp(40px, 6vw, 72px)", lineHeight: 1 }}>Política de Privacidade</h1>
          <span style={{ display: "block", marginTop: "18px", width: "64px", height: "8px", background: "var(--lilac)" }} />
        </div>

        <div style={{ display: "grid", gap: "40px", color: "var(--soft)", fontSize: "16px", lineHeight: 1.6 }}>
          <p style={{ color: "var(--bone)", fontSize: "19px" }}>
            A sua privacidade é importante para nós. É política deste site respeitar a sua privacidade em relação a qualquer informação que possamos coletar.
          </p>

          <section>
            <h2 style={{ fontFamily: "var(--text)", fontWeight: 600, fontSize: "20px", color: "var(--bone)", marginBottom: "10px" }}>1. Coleta de Informações</h2>
            <p>Solicitamos informações pessoais (como nome, ideia da tatuagem, tamanho aproximado e local do corpo) apenas quando realmente precisamos delas para fornecer um atendimento personalizado e orçamento referente aos nossos serviços de tatuagem.</p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--text)", fontWeight: 600, fontSize: "20px", color: "var(--bone)", marginBottom: "10px" }}>2. Uso dos Dados</h2>
            <p>Os dados inseridos nos formulários deste site não são armazenados em banco de dados externo ou vendidos a terceiros. Eles servem exclusivamente para gerar uma mensagem direta direcionada ao nosso atendimento via WhatsApp.</p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--text)", fontWeight: 600, fontSize: "20px", color: "var(--bone)", marginBottom: "10px" }}>3. Compartilhamento e Retenção</h2>
            <p>Não compartilhamos dados de identificação pessoal publicamente ou com terceiros. A retenção das informações fornecidas ocorre apenas dentro do histórico de conversa do próprio aplicativo WhatsApp, onde o atendimento será conduzido.</p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--text)", fontWeight: 600, fontSize: "20px", color: "var(--bone)", marginBottom: "10px" }}>4. Seus Direitos (LGPD)</h2>
            <p>Você tem o direito de solicitar a exclusão de qualquer dado ou histórico de conversa a qualquer momento, diretamente pelo nosso canal de atendimento.</p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--text)", fontWeight: 600, fontSize: "20px", color: "var(--bone)", marginBottom: "10px" }}>5. Contato</h2>
            <p>Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco através do nosso WhatsApp oficial fornecido no site.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
