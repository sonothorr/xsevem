
import React from 'react';
import { Section, Reveal } from './ui/Section';

export const Authority: React.FC = () => {
  const stats = [
    { label: "Leads Captados", value: "+250k" },
    { label: "Vendas Geradas", value: "+R$ 3M" },
    { label: "Sites no Ar", value: "+50" },
    { label: "Conversão Média", value: "Alta" },
  ];

  const logos = ['Dra. Raquel', 'PradaPay', 'PlayDolar', 'Moppita', 'LB100'];

  return (
    <Section id="autoridade" className="bg-brand-dark border-t border-b border-white/5">
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
        <Reveal>
          <span className="text-brand-cyan text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Resultados Reais</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-[1] tracking-tighter mb-12">
            PÁGINAS FEITAS PARA <br/>
            <span className="text-gray-600 italic">VENDER DE VERDADE.</span>
          </h2>
        </Reveal>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12">
          {stats.map((stat, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="flex flex-col items-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-2 tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-xs text-brand-cyan/60 uppercase tracking-widest font-bold">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      
      {/* Marquee de Logos dos Clientes */}
      <div className="mt-12">
        <Reveal>
          <div className="text-center">
            <span className="text-[10px] font-bold text-gray-700 uppercase tracking-[0.4em] mb-10 inline-block">
              Empresas aceleradas por nós
            </span>
          </div>
        </Reveal>
        
        <div className="relative w-full overflow-hidden mask-image-horizontal">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-12 md:gap-20 py-4 will-change-transform">
              {[...logos, ...logos].map((logo, i) => (
                <span key={i} className="text-lg md:text-xl font-display font-bold text-gray-800 hover:text-white transition-colors cursor-default select-none">
                  {logo}
                </span>
              ))}
            </div>
        </div>
        <style>{`
          .animate-marquee { 
            animation: marquee 18s linear infinite; 
            min-width: max-content;
          }
          @keyframes marquee { 
            0% { transform: translateX(0); } 
            100% { transform: translateX(-50%); } 
          }
          .mask-image-horizontal {
            -webkit-mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
            mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
          }
          @media (max-width: 768px) {
            .animate-marquee { animation-duration: 14s; }
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-marquee { animation: none; }
          }
        `}</style>
      </div>
    </Section>
  );
};
