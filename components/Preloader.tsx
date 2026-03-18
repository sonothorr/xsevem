'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { usePreloader } from '@/context/PreloaderContext';

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);
  const [showCounter, setShowCounter] = useState(true);
  const { setLoaded } = usePreloader();

  useEffect(() => {
    // Bloquear scroll durante o load
    document.body.style.overflow = 'hidden';

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShowCounter(false);
            setTimeout(() => setComplete(true), 1000); // Dar tempo para a animação de saída das colunas
          }, 500);
          return 100;
        }
        // Incremento variável para parecer mais "natural"
        const increment = Math.floor(Math.random() * 5) + 2;
        return Math.min(prev + increment, 100);
      });
    }, 40);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = 'auto'; // Garantir que o scroll volte ao desmontar
    };
  }, []);

  // Restaurar scroll quando completar
  useEffect(() => {
    if (complete) {
      document.body.style.overflow = 'auto';
      setLoaded(true);
    }
  }, [complete, setLoaded]);

  // Número de colunas para a cortina
  const columns = 5;

  return (
    <AnimatePresence>
      {!complete && (
        <div className="fixed inset-0 z-[10000] flex pointer-events-auto">
          {/* Painéis da Cortina */}
          {[...Array(columns)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
                delay: i * 0.05 // Efeito cascata
              }}
              className="h-full flex-1 bg-ds-black border-r border-white/5 last:border-r-0"
            />
          ))}

          {/* Conteúdo Central (Contador) */}
          <AnimatePresence>
            {showCounter && (
              <motion.div 
                exit={{ opacity: 0, y: -20 }}
                className="absolute inset-0 flex flex-col items-center justify-center z-10"
              >
                <div className="flex flex-col items-center">
                   <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-white/20 text-meta tracking-[0.3em] font-bold mb-4"
                  >
                    XSEVEM · BRASIL
                  </motion.span>
                  
                  <div className="relative">
                    <span className="text-white text-[clamp(100px,20vw,240px)] font-display font-black leading-none tabular-nums tracking-tighter">
                      {progress}
                    </span>
                    <span className="text-white/40 text-[clamp(24px,5vw,48px)] font-display font-bold absolute -top-2 -right-12">
                      %
                    </span>
                  </div>
                  
                  <div className="w-48 h-[1px] bg-white/10 mt-8 relative overflow-hidden">
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: progress / 100 }}
                      className="absolute inset-0 bg-white origin-left"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </AnimatePresence>
  );
}
