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
    <div ref={containerRef} data-cursor="about" data-cursor-text="INFO" className="h-[200vh] relative z-10 p-[10px]">
      <div className="sticky top-0 h-svh flex flex-col items-center justify-center px-6 md:px-12 bg-ds-black radius-2xl overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <h2 className="sr-only">Sobre a XSEVEM</h2>
          <p className="font-display font-medium leading-[1.2] tracking-tight text-xl md:text-3xl text-left flex flex-wrap">
            {words.map((word, i) => {
              const start = (i / words.length) * 0.9;
              const end = start + (1 / words.length) * 0.9;
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
