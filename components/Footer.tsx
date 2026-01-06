
import React from 'react';
import { Instagram, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black border-t border-white/5 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <div className="text-2xl font-display font-bold tracking-tighter text-white mb-2">
            <span className="text-brand-cyan">X</span>SEVEM
          </div>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} XSEVEM. Todos os direitos reservados.</p>
        </div>

        <div className="flex gap-6">
          <a 
            href="https://www.instagram.com/xsevemx/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-brand-cyan transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a 
            href="mailto:xsevemsuporte@gmail.com" 
            className="text-gray-400 hover:text-brand-cyan transition-colors"
            aria-label="E-mail"
          >
            <Mail size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
};
