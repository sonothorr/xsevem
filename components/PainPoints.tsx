
import React from 'react';
import { Section, Reveal } from './ui/Section';
import { FilterX, Clock, BadgeCheck, MessageCircle, Plus } from 'lucide-react';

export const PainPoints: React.FC = () => {
  const principles = [
    {
      icon: <FilterX size={28} />,
      title: "Filtro de Curiosos",
      desc: "Quem não tem dinheiro ou não é seu perfil, sai do site. Quem te chama no WhatsApp já passou pelo funil e quer fechar."
    },
    {
      icon: <Clock size={28} />,
      title: "Economia de Saliva",
      desc: "Cansado de explicar preço e como funciona mil vezes? O site faz essa apresentação chata por você, 24 horas por dia."
    },
    {
      icon: <BadgeCheck size={28} />,
      title: "Autoridade Imediata",
      desc: "Antes de falar um 'oi', o cliente já viu seus resultados, seus diferenciais e já confia em você. A venda fica fácil."
    },
    {
      icon: <MessageCircle size={28} />,
      title: "WhatsApp Tocando",
      desc: "O foco não é tráfego, nem design. O foco é fazer seu celular apitar com notificação de gente interessada."
    }
  ];

  return (
    <Section id="sobre" className="bg-brand-black border-t border-white/5 relative overflow-hidden">
      
      {/* Background element decorativo */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-brand-gray/20 to-transparent pointer-events-none" />

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Lado Esquerdo - Manifesto Fixo */}
        <div className="lg:w-5/12 lg:sticky lg:top-32 h-fit relative">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-brand-cyan/30 bg-brand-cyan/5 rounded-full w-max">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full bg-brand-cyan opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 bg-brand-cyan rounded-full"></span>
              </span>
              <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">Digital Sem Drama</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white leading-[0.9] tracking-tighter mb-8">
              PARE DE VENDER <br />
              PARA <span className="text-gray-700">CURIOSO.</span>
            </h2>
            
            <div className="w-12 h-1 bg-brand-cyan mb-8"></div>

            <p className="text-gray-400 text-lg font-light leading-relaxed">
              O maior erro é mandar tráfego direto para o WhatsApp sem filtro. Você perde o dia respondendo gente que não vai comprar.
              <br/><br/>
              A XSEVEM cria a estrutura que "educa" o cliente. Quando ele clica no botão de chamar, ele já sabe o preço, já sabe o valor e já quer o produto.
            </p>
          </Reveal>
        </div>

        {/* Lado Direito - Lista Editorial */}
        <div className="lg:w-7/12 flex flex-col">
          {principles.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="group relative border-t border-white/10 hover:border-brand-cyan/50 transition-colors duration-500 py-10 md:py-12 cursor-default">
                
                {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex flex-col md:flex-row md:items-start gap-6 relative z-10">
                  
                  {/* Número / Ícone */}
                  <div className="flex-shrink-0 flex items-center justify-between md:block w-full md:w-auto">
                    <span className="font-display font-bold text-3xl text-white/20 group-hover:text-brand-cyan transition-colors duration-300">
                      0{idx + 1}
                    </span>
                    <div className="md:hidden text-brand-cyan opacity-50 group-hover:opacity-100">
                      {item.icon}
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                        {item.title}
                      </h3>
                      {/* Ícone no Desktop flutuando à direita */}
                      <div className="hidden md:block text-white/20 group-hover:text-brand-cyan transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                        {item.icon}
                      </div>
                    </div>
                    
                    <p className="text-gray-500 group-hover:text-gray-300 text-base font-light leading-relaxed max-w-xl transition-colors duration-300">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="absolute top-6 right-0 text-white/10 group-hover:text-brand-cyan/20 transition-all duration-500 transform group-hover:rotate-90 md:block hidden">
                   <Plus size={16} />
                </div>
              </div>
            </Reveal>
          ))}
          {/* Linha final para fechar a lista */}
          <div className="border-t border-white/10" />
        </div>

      </div>
    </Section>
  );
};
