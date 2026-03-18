'use client';

import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';
import { usePreloader } from '@/context/PreloaderContext';

export function HeroSection() {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, amount: 0.2 });
  const { isLoaded } = usePreloader();

  // Condition to start animations
  const shouldAnimate = inView && isLoaded;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0.3]);
  const y = useTransform(scrollYProgress, [0.5, 1], [0, 100]);

  const word = 'XSEVEM';

  return (
    <div ref={containerRef} className="h-[200vh] relative z-0">
      <div className="sticky top-0 h-svh w-full p-[10px]">
        <motion.section
          ref={sectionRef}
          style={{ scale, opacity, y }}
          data-cursor="hero"
          data-cursor-text="XSEVEM"
          className="w-full h-full flex flex-col justify-between p-6 md:p-12 bg-white radius-2xl overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.3)] origin-top relative"
        >
          {/* Header */}
          <div className="flex justify-center items-start w-full relative z-10">


            {/* CTA + nav */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.11, 0.68, 0.17, 0.99] }}
              className="flex items-center gap-4"
            >
              <motion.a
                href="https://wa.me/5518997747933?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20um%20projeto%20com%20a%20XSEVEM!"
                whileHover={{ scale: 1.05, backgroundColor: '#000', color: '#fff' }}
                whileTap={{ scale: 0.95 }}
                className="text-meta border border-black/20 rounded-full px-6 py-3 transition-colors cursor-pointer text-black"
              >
                CONTATO
              </motion.a>
            </motion.div>
          </div>

          {/* Headline principal */}
          <div className="flex-1 flex items-center justify-center relative z-10">
            <div className="text-center relative">
              <h1 className="leading-none tracking-tighter uppercase font-display font-extrabold flex flex-col items-center">
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: '110%' }}
                    animate={shouldAnimate ? { y: '0%' } : { y: '110%' }}
                    transition={{
                      duration: 1.3,
                      delay: 0.3,
                      ease: [0.11, 0.68, 0.17, 0.99],
                    }}
                    className="text-[clamp(72px,14vw,300px)] text-black"
                  >
                    {word}
                  </motion.div>
                </div>
              </h1>

              {/* Linha descritiva abaixo do headline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.9, duration: 1, ease: [0.11, 0.68, 0.17, 0.99] }}
                className="text-meta text-black/40 mt-6 tracking-[0.3em]"
              >
                CRIAMOS MARCAS · SITES · EXPERIÊNCIAS
              </motion.p>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center w-full relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="text-meta flex flex-col items-center gap-4 text-black/40"
            >
              <span>ARRASTE PARA CIMA</span>
              <div className="w-[1px] h-12 bg-black/10 overflow-hidden">
                <motion.div
                  animate={{ y: [50, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                  className="w-full h-1/2 bg-black/30"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
