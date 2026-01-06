
import React, { useRef, useState, useEffect } from 'react';
import { Section, Reveal } from './ui/Section';

export const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const updateProgress = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      const elementHeight = rect.height;
      
      // Encontra o container dos steps dentro do elemento
      const stepsContainer = element.querySelector('.grid');
      if (!stepsContainer) {
        setProgress(0);
        return;
      }
      
      const stepsRect = stepsContainer.getBoundingClientRect();
      const stepsTop = stepsRect.top;
      const stepsBottom = stepsRect.bottom;
      const stepsHeight = stepsRect.height;
      
      // Ponto onde a animação começa: quando o topo dos steps está a 80% da altura da tela
      const startPoint = windowHeight * 0.8;
      // Ponto onde a animação termina: quando o topo dos steps está a 20% da altura da tela  
      const endPoint = windowHeight * 0.2;
      
      let progressValue = 0;
      
      // Se os steps ainda não entraram na zona de início
      if (stepsTop > startPoint) {
        progressValue = 0;
      }
      // Se os steps já passaram completamente da zona de fim
      else if (stepsTop < endPoint) {
        progressValue = 1;
      }
      // Se os steps estão na zona de animação
      else {
        // Calcula progresso linear: 0 em startPoint, 1 em endPoint
        const totalRange = startPoint - endPoint;
        const currentProgress = startPoint - stepsTop;
        progressValue = Math.min(1, Math.max(0, currentProgress / totalRange));
      }
      
      setProgress(progressValue);
    };

    // Throttle com requestAnimationFrame para melhor performance
    let rafId: number | null = null;
    const handleScroll = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          updateProgress();
          rafId = null;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    updateProgress(); // Inicial
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

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
      <div ref={containerRef} className="relative" style={{ minHeight: '300px' }}>
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
          <div className="hidden md:block absolute top-[24px] left-0 w-full h-[2px] bg-white/10 z-0 overflow-hidden">
             <div 
               style={{ 
                 transform: `scaleX(${progress})`,
                 transformOrigin: "left",
                 width: '100%',
                 height: '100%',
               }} 
               className="bg-brand-cyan shadow-[0_0_15px_rgba(34,211,238,0.6)] transform-gpu will-change-transform"
             />
          </div>

          {/* --- MOBILE CONNECTING LINE --- */}
          <div className="md:hidden absolute left-[23px] top-[24px] bottom-0 w-[2px] bg-white/10 z-0 overflow-hidden">
             <div 
               style={{ 
                 transform: `scaleY(${progress})`,
                 transformOrigin: "top",
                 width: '100%',
                 height: '100%',
               }} 
               className="bg-brand-cyan shadow-[0_0_15px_rgba(34,211,238,0.6)] transform-gpu will-change-transform"
             />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <Reveal key={idx} delay={idx * 0.2}>
                <div className="group flex md:block gap-4 md:gap-0">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-black border border-brand-cyan/30 text-brand-cyan flex items-center justify-center font-bold rounded-full mb-0 md:mb-8 relative z-10 group-hover:bg-brand-cyan group-hover:text-brand-black transition-all duration-500 font-display text-sm md:text-base">
                      {step.num}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-display font-bold text-white mb-2 md:mb-3 mt-0 md:mt-0 group-hover:text-brand-cyan transition-colors duration-300 uppercase tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light">
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
