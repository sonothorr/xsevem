
import React from 'react';
import { Section, Reveal } from './ui/Section';
import { CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';

export const Contact: React.FC = () => {
  
  const handleWhatsApp = () => {
    window.open('https://api.whatsapp.com/send/?phone=5518997747933&text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20XSEVEM.%20Quero%20entender%20como%20melhorar%20minhas%20vendas%20atrav%C3%A9s%20de%20uma%20estrutura%20digital%20mais%20eficiente.&type=phone_number&app_absent=0', '_blank');
  };

  return (
    <Section id="contato" className="relative overflow-hidden py-12 md:py-24 flex items-center justify-center">
      
      {/* Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[300px] bg-brand-cyan/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <Reveal>
          <div className="flex flex-col items-center max-w-4xl mx-auto">
            
            {/* Filtro de Cliente */}
            <div className="mb-8 md:mb-12 text-center">
              <p className="text-base sm:text-lg md:text-xl text-white font-bold mb-3 md:mb-4 flex items-center justify-center gap-2">
                <img src="/icone-XSEVEM.ico" alt="XSEVEM" className="w-6 h-6 md:w-7 md:h-7" />
                <span>A XSEVEM NÃO É PRA TODO MUNDO.</span>
              </p>
              <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto font-light leading-relaxed px-2">
                Se você busca site barato ou só "marcar presença", não somos a escolha certa.<br className="hidden md:block"/>
                Trabalhamos com empresas que querem lucro, escala e previsibilidade.
              </p>
            </div>
            
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[1] text-white mb-6">
              FALE COM UM <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-brand-cyan">
                ESPECIALISTA DA XSEVEM
              </span>
            </h2>
            
            <p className="text-sm md:text-lg text-gray-400 max-w-xl mx-auto mb-8 font-light leading-relaxed px-2">
            Descubra se seu negócio está pronto para uma estrutura que gera vendas todos os dias — ou se ainda está perdendo dinheiro online.
            </p>

            {/* Benefits Row */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-5 mb-8 md:mb-10">
              {[
                "Análise rápida",
                "Sem compromisso",
                "Resposta ágil"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 md:gap-2 text-gray-300 bg-white/5 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/5 hover:border-brand-cyan/30 transition-colors cursor-default">
                  <CheckCircle2 size={12} className="text-brand-cyan md:w-3.5 md:h-3.5" />
                  <span className="text-[11px] md:text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button usando o componente unificado com variante 'white' */}
            <Button 
              variant="white"
              onClick={handleWhatsApp}
              className="!text-base md:!text-xl !py-4 md:!py-5"
            >
              Chamar no WhatsApp
            </Button>

          </div>
        </Reveal>
      </div>
    </Section>
  );
};
