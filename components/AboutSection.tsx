'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
}

function Word({ children, progress, range }: WordProps) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative inline-block mr-[0.25em]">
      <motion.span style={{ opacity }} className="text-white">
        {children}
      </motion.span>
    </span>
  );
}

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const text =
    "Na XSEVEM, não apenas criamos sites; construímos ecossistemas digitais que elevam marcas ao próximo nível. Em um mundo saturado, uma estrutura digital sólida é o diferencial entre ser notado ou ser ignorado. Somos especialistas em transformar visão em impacto, unindo design brutalista com performance impecável.";

  const words = text.split(' ');

  return (
    <div ref={containerRef} data-cursor="about" data-cursor-text="INFO" className="h-[300vh] md:h-[200vh] relative z-10 bg-ds-black">
      <div className="sticky top-0 h-svh flex flex-col items-center justify-center px-6 md:px-12 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <h2 className="sr-only">Sobre a XSEVEM</h2>
          <p className="font-display font-medium leading-[1.1] tracking-tight text-[clamp(26px,7vw,36px)] md:text-[clamp(36px,3vw,40px)] text-left flex flex-wrap">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </p>


        </div>
      </div>
    </div>
  );
}
