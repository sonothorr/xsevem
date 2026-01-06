
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <motion.section 
      initial={{ opacity: 1 }}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden transform-gpu"
      style={{ backfaceVisibility: 'hidden' }}
    >
      
      {/* Dynamic Floating Elements - Otimizados */}
      <motion.div 
        className="absolute top-1/4 left-4 md:left-20 w-1 md:w-2 h-20 bg-gradient-to-b from-transparent via-brand-cyan to-transparent opacity-20 transform-gpu will-change-transform"
        animate={{ y: [0, -40, 0] }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut",
          type: "tween"
        }}
        style={{ backfaceVisibility: 'hidden' }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-4 md:right-32 w-20 h-1 md:h-2 bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-20 transform-gpu will-change-transform"
        animate={{ x: [0, 40, 0] }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut", 
          delay: 1,
          type: "tween"
        }}
        style={{ backfaceVisibility: 'hidden' }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "tween" }}
          className="flex justify-center transform-gpu"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 border border-brand-cyan/20 bg-brand-cyan/5 backdrop-blur-md mb-6 md:mb-8 hover:bg-brand-cyan/10 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full bg-brand-cyan opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 bg-brand-cyan"></span>
            </span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-cyan">
              VAGAS LIMITADAS!
            </span>
          </div>
        </motion.div>

        <motion.h1 
          className="font-display font-bold text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.9] text-white mb-6 md:mb-8 relative transform-gpu"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "tween" }}
          style={{ backfaceVisibility: 'hidden' }}
        >
          SEU DIGITAL<br />
          PRECISA DAR <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-white/70 relative z-10">LUCRO.</span>
            <motion.div 
              className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-4 bg-brand-cyan/20 -skew-x-12 blur-sm transform-gpu"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 1, duration: 0.8, type: "tween" }}
              style={{ backfaceVisibility: 'hidden' }}
            />
          </span>
        </motion.h1>

        <motion.p 
          className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed font-light px-2 transform-gpu"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, type: "tween" }}
          style={{ backfaceVisibility: 'hidden' }}
        >
          Seu site não é vitrine. É uma engrenagem de vendas operando 24/7.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, type: "tween" }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 px-4 sm:px-0 transform-gpu"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <Button onClick={() => window.open('https://api.whatsapp.com/send/?phone=5518997747933&text=Ol%C3%A1!+Quero+entender+como+a+XSEVEM+pode+transformar+meu+digital+em+uma+estrutura+de+vendas+lucrativa!&type=phone_number&app_absent=0', '_blank')} className="w-full sm:w-auto" withArrow>
            Quero vender mais
          </Button>
          <Button variant="ghost" onClick={() => document.getElementById('servicos')?.scrollIntoView({behavior: 'smooth'})} className="w-full sm:w-auto">
            Como funciona
          </Button>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-6 inset-x-0 mx-auto w-max flex flex-col items-center gap-2 pointer-events-none transform-gpu will-change-transform"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", type: "tween" }}
        style={{ backfaceVisibility: 'hidden' }}
      >
        <div className="p-1.5 border border-brand-cyan/20 rounded-full bg-brand-cyan/5 backdrop-blur-sm">
          <ChevronDown className="text-brand-cyan/60 w-5 h-5" />
        </div>
      </motion.div>
    </motion.section>
  );
};
