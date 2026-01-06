
import React from 'react';
import { motion } from 'framer-motion';

export const AliveBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Textura de ruído cinematográfico - usando CSS puro para melhor performance */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      {/* Orbes flutuantes otimizados - blur mínimo e GPU acceleration */}
      <motion.div 
        animate={{ 
          x: [0, 100, 0], 
          y: [0, 50, 0],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear",
          type: "tween"
        }}
        className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-brand-cyan/5 blur-[30px] rounded-full transform-gpu will-change-transform"
        style={{ 
          backfaceVisibility: 'hidden',
          transform: 'translateZ(0)',
        }}
      />
      <motion.div 
        animate={{ 
          x: [0, -80, 0], 
          y: [0, 120, 0],
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear",
          type: "tween"
        }}
        className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-brand-cyan/3 blur-[25px] rounded-full transform-gpu will-change-transform"
        style={{ 
          backfaceVisibility: 'hidden',
          transform: 'translateZ(0)',
        }}
      />
      <motion.div 
        animate={{ 
          x: [0, 50, 0], 
          y: [0, -60, 0],
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "linear",
          type: "tween"
        }}
        className="absolute bottom-[10%] left-[15%] w-[30%] h-[30%] bg-brand-cyan/5 blur-[20px] rounded-full transform-gpu will-change-transform"
        style={{ 
          backfaceVisibility: 'hidden',
          transform: 'translateZ(0)',
        }}
      />
    </div>
  );
};
