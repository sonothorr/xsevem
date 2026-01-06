
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = ['Resultados', 'Método', 'Serviços', 'Sobre'];

  const getTargetId = (item: string) => {
    switch (item) {
      case 'Resultados': return 'autoridade';
      case 'Método': return 'metodo';
      case 'Serviços': return 'servicos';
      case 'Sobre': return 'sobre';
      default: return '';
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b transform-gpu will-change-[background-color,padding] ${
          isScrolled 
            ? 'bg-brand-black/95 backdrop-blur-sm py-3 border-white/10' 
            : 'bg-transparent py-6 border-transparent'
        }`}
        style={{ backfaceVisibility: 'hidden' }}
      >
        <div className="container mx-auto px-6 md:px-12 max-w-7xl flex justify-between items-center">
          {/* Logo */}
          <div 
            className="text-2xl font-display font-bold tracking-tighter text-white cursor-pointer select-none"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="text-brand-cyan">X</span>SEVEM
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(getTargetId(item))} 
                className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 hover:text-brand-cyan transition-colors"
              >
                {item}
              </button>
            ))}
            
            <Button 
              onClick={() => scrollToSection('contato')} 
              className="!py-2 !px-6 !text-xs uppercase tracking-widest" 
              variant="outline"
            >
              Contato
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, type: "tween" }}
            className="fixed inset-0 z-40 bg-brand-black flex flex-col items-center justify-center gap-10 px-6 md:hidden transform-gpu"
            style={{ backfaceVisibility: 'hidden' }}
          >
            {menuItems.map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(getTargetId(item))} 
                className="text-4xl font-display font-bold text-white hover:text-brand-cyan"
              >
                {item}
              </button>
            ))}
            <Button onClick={() => scrollToSection('contato')} fullWidth className="mt-4">
              Contato
            </Button>
            
            {/* O segundo botão de fechar foi removido aqui para evitar duplicação visual */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
