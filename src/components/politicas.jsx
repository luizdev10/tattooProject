import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Politicas() {
  return (
    <div className="min-h-screen bg-neutral-950 text-gray-300 font-[Montserrat] px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10">
          <Link to="/" className="inline-flex items-center gap-2 text-amber-100/70 hover:text-amber-100 transition-colors text-sm uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4" />
            Voltar para o Início
          </Link>
        </div>

        <div className="mb-12">
          <h1 className="font-[Pirata_One] text-4xl sm:text-5xl md:text-6xl text-gray-200 mb-4 tracking-wide">
            Política de Privacidade
          </h1>
          <span className="block h-0.5 w-24 bg-amber-100 opacity-50" />
        </div>

        <div className="space-y-10 leading-relaxed text-sm md:text-base text-gray-400">
          <section>
            <p className="text-gray-300 text-lg">
              A sua privacidade é importante para nós. É política deste site respeitar a sua privacidade em relação a qualquer informação que possamos coletar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-amber-100/90 font-medium mb-3">1. Coleta de Informações</h2>
            <p>
              Solicitamos informações pessoais (como nome, ideia da tatuagem, tamanho aproximado e local do corpo) apenas quando realmente precisamos delas para fornecer um atendimento personalizado e orçamento referente aos nossos serviços de tatuagem.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-amber-100/90 font-medium mb-3">2. Uso dos Dados</h2>
            <p>
              Os dados inseridos nos formulários deste site não são armazenados em banco de dados externo ou vendidos a terceiros. Eles servem exclusivamente para gerar uma mensagem direta direcionada ao nosso atendimento via WhatsApp.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-amber-100/90 font-medium mb-3">3. Compartilhamento e Retenção</h2>
            <p>
              Não compartilhamos dados de identificação pessoal publicamente ou com terceiros. A retenção das informações fornecidas ocorre apenas dentro do histórico de conversa do próprio aplicativo WhatsApp, onde o atendimento será conduzido.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-amber-100/90 font-medium mb-3">4. Seus Direitos (LGPD)</h2>
            <p>
              Você tem o direito de solicitar a exclusão de qualquer dado ou histórico de conversa a qualquer momento, diretamente pelo nosso canal de atendimento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-amber-100/90 font-medium mb-3">5. Contato</h2>
            <p>
              Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco através do nosso WhatsApp oficial fornecido no site.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}