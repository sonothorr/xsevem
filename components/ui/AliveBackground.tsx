
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
          willChange: 'auto',
        }}
      ></div>
      
      {/* Orbes flutuantes de baixa opacidade */}
      <motion.div 
        animate={{ 
          x: [0, 100, 0], 
          y: [0, 50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-brand-cyan/5 blur-[120px] rounded-full"
      />
      <motion.div 
        animate={{ 
          x: [0, -80, 0], 
          y: [0, 120, 0],
          scale: [1.2, 1, 1.2]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-brand-cyan/3 blur-[100px] rounded-full"
      />
      <motion.div 
        animate={{ 
          x: [0, 50, 0], 
          y: [0, -60, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[10%] left-[15%] w-[30%] h-[30%] bg-brand-cyan/5 blur-[80px] rounded-full"
      />
    </div>
  );
};
