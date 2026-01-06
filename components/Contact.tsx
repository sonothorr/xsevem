
import React from 'react';
import { Section, Reveal } from './ui/Section';
import { CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';

export const Contact: React.FC = () => {
  
  const handleWhatsApp = () => {
    window.open('https://api.whatsapp.com/send/?phone=5518997747933&text=Ol%C3%A1!+Quero+entender+como+a+XSEVEM+pode+transformar+meu+digital+em+uma+estrutura+de+vendas+lucrativa!&type=phone_number&app_absent=0', '_blank');
  };

  return (
    <Section id="contato" className="relative overflow-hidden py-12 md:py-24 flex items-center justify-center">
      
      {/* Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[300px] bg-brand-cyan/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <Reveal>
          <div className="flex flex-col items-center max-w-4xl mx-auto">
            
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[1] text-white mb-6">
              VAMOS FALAR SOBRE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-brand-cyan">
                O SEU NEGÓCIO?
              </span>
            </h2>
            
            <p className="text-sm md:text-lg text-gray-400 max-w-xl mx-auto mb-8 font-light leading-relaxed px-2">
              Nada de formulários chatos ou robôs. <br className="hidden md:block"/>
              Chame no WhatsApp e fale com um ser humano pronto para te ajudar a vender mais.
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
