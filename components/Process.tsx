
import React, { useRef } from 'react';
import { Section, Reveal } from './ui/Section';
import { motion, useScroll, useSpring } from 'framer-motion';

export const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"]
  });

  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const steps = [
    {
      num: "01",
      title: "Oferta Real",
      desc: "Analisamos o que você vende e criamos uma oferta que o mercado quer comprar. Não adianta site bonito se a oferta não converte."
    },
    {
      num: "02",
      title: "O Filtro (Site)",
      desc: "Seu site funciona como um vendedor 24h. Ele explica, convence e separa quem tem potencial de compra dos curiosos."
    },
    {
      num: "03",
      title: "Tráfego de Qualidade",
      desc: "Não buscamos cliques baratos. Buscamos compradores. Configuramos anúncios para atingir quem tem o dinheiro e a dor."
    },
    {
      num: "04",
      title: "Faturamento",
      desc: "O lead chega qualificado no WhatsApp. Sua equipe gasta menos tempo explicando o básico e mais tempo fechando negócios lucrativos."
    }
  ];

  return (
    <Section id="metodo" className="relative">
      <div ref={containerRef} className="relative">
        <Reveal>
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 tracking-tighter uppercase">
              O MÉTODO
            </h2>
            <div className="h-1.5 w-24 bg-brand-cyan"></div>
          </div>
        </Reveal>

        <div className="relative">
          {/* --- DESKTOP CONNECTING LINE --- */}
          <div className="hidden md:block absolute top-[24px] left-0 w-full h-[2px] bg-white/10 z-0">
             <motion.div 
               style={{ scaleX: scaleProgress, transformOrigin: "left" }} 
               className="h-full bg-brand-cyan shadow-[0_0_15px_rgba(34,211,238,0.6)]"
             />
          </div>

          {/* --- MOBILE CONNECTING LINE --- */}
          <div className="md:hidden absolute left-[23px] top-[24px] bottom-[10%] w-[2px] bg-white/10 z-0">
             <motion.div 
               style={{ scaleY: scaleProgress, transformOrigin: "top" }} 
               className="w-full bg-brand-cyan h-full shadow-[0_0_15px_rgba(34,211,238,0.6)]"
             />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <Reveal key={idx} delay={idx * 0.2}>
                <div className="group flex md:block gap-6 md:gap-0">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-black border border-brand-cyan/30 text-brand-cyan flex items-center justify-center font-bold rounded-full mb-0 md:mb-8 relative z-10 group-hover:bg-brand-cyan group-hover:text-brand-black transition-all duration-500 font-display">
                      {step.num}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-display font-bold text-white mb-3 mt-1 md:mt-0 group-hover:text-brand-cyan transition-colors duration-300 uppercase tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
