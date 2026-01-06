
import React from 'react';
import { Section, Reveal } from './ui/Section';
import { MonitorSmartphone, Rocket, Share2, ArrowUpRight } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  { 
    icon: <MonitorSmartphone size={32} />, 
    title: "Sites de Conversão", 
    description: "Esqueça sites institucionais. Criamos páginas focadas em quebrar objeções e fazer o cliente desejar seu produto antes mesmo de falar com você.", 
  },
  { 
    icon: <Rocket size={32} />, 
    title: "Tráfego de Performance", 
    description: "Gerenciamos seus anúncios para encontrar as pessoas que estão procurando pelo seu serviço agora. Otimizamos cada centavo investido.", 
  },
  { 
    icon: <Share2 size={32} />, 
    title: "Posicionamento", 
    description: "Arrumamos sua 'casa' digital (Redes Sociais) para que, quando o cliente pesquisar seu nome, ele sinta segurança total para comprar.", 
  }
];

export const Services: React.FC = () => {
  return (
    <Section id="servicos" className="bg-brand-black">
      <Reveal>
        <div className="mb-16 md:mb-24">
          <span className="text-brand-cyan text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Nossas Ferramentas</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter leading-none uppercase">
            ESTRUTURA QUE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">GERA CAIXA.</span>
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, idx) => (
          <Reveal key={idx} delay={idx * 0.1}>
            <div className="group relative bg-brand-gray/30 border border-white/5 p-8 md:p-10 h-full flex flex-col transition-all duration-500 hover:border-brand-cyan/40 hover:bg-brand-gray/50 overflow-hidden">
              {/* Brilho de Hover Sutil */}
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-brand-cyan/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="mb-8 text-brand-cyan transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 origin-left">
                {service.icon}
              </div>

              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6 uppercase tracking-tight leading-none group-hover:text-brand-cyan transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-400 font-light leading-relaxed flex-grow">
                {service.description}
              </p>

              {/* Ícone de detalhe no canto superior */}
              <div className="absolute top-6 right-6 text-white/5 group-hover:text-brand-cyan/40 transition-colors duration-300">
                <ArrowUpRight size={24} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};
