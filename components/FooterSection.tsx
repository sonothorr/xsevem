'use client';

import { motion } from 'motion/react';

export function FooterSection() {
  return (
    <div className="h-screen relative z-20">
      <div className="sticky top-0 h-screen w-full p-[10px]">
        <section className="w-full h-full bg-white radius-md flex flex-col items-center justify-center shadow-[0_-10px_40px_rgba(0,0,0,0.05)] overflow-hidden relative px-6">
          {/* CTA Circular Premium */}
          <motion.a
            href="https://wa.me/5518997747933?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20um%20projeto%20com%20a%20XSEVEM!"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, type: 'spring', damping: 25 }}
            className="group relative z-20 flex flex-col items-center justify-center"
          >
            <div className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] bg-black rounded-full flex flex-col items-center justify-center cursor-pointer shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:bg-ds-black relative overflow-hidden">
              {/* Efeito de brilho interno no hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />


              <span className="font-display text-white text-[16px] md:text-[22px] font-black tracking-tight uppercase text-center px-4 leading-[1.1]">
                VAMOS <br /> CONVERSAR?
              </span>

              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="mt-4 text-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </motion.div>
            </div>
          </motion.a>

          {/* Socials & Contatos - Layout Editorial */}
          <div className="absolute top-12 left-8 md:left-12 flex flex-col gap-4 z-10">
            <span className="text-[9px] font-bold text-black/20 tracking-widest uppercase">Redes Sociais</span>
            <div className="flex flex-col gap-2">
              <motion.a href="https://www.instagram.com/xsevemx/" target="_blank" rel="noopener noreferrer" whileHover={{ x: 5, color: '#000' }} className="text-meta text-black/40 hover:text-black transition-colors uppercase font-medium">INSTAGRAM</motion.a>
              <motion.a href="https://wa.me/5518997747933" target="_blank" rel="noopener noreferrer" whileHover={{ x: 5, color: '#000' }} className="text-meta text-black/40 hover:text-black transition-colors uppercase font-medium">WHATSAPP</motion.a>
            </div>
          </div>

          <div className="absolute top-12 right-8 md:right-12 flex flex-col gap-4 z-10 text-right">
            <span className="text-[9px] font-bold text-black/20 tracking-widest uppercase">Fale Conosco</span>
            <div className="flex flex-col gap-2">
              <motion.a href="mailto:xsevemsuporte@gmail.com" whileHover={{ x: -5, color: '#000' }} className="text-meta text-black/40 hover:text-black transition-colors uppercase font-medium">XSEVEMSUPORTE@GMAIL.COM</motion.a>
              <motion.a href="tel:+5518997747933" whileHover={{ x: -5, color: '#000' }} className="text-meta text-black/40 hover:text-black transition-colors uppercase font-medium">+55 18 99774-7933</motion.a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="absolute bottom-10 left-8 right-8 md:left-12 md:right-12 flex justify-between items-end text-meta text-black/40">
            <div className="flex flex-col gap-1">
              <span className="font-bold text-black text-[10px]">© 2026 XSEVEM</span>
              <span className="text-[9px] text-black/20 uppercase tracking-widest">ESTRUTURA DIGITAL DE IMPACTO</span>
            </div>

            <div className="text-right md:block">
              <span className="text-[9px] text-black/20 uppercase tracking-widest">SÃO PAULO · BRASIL</span>
            </div>
          </div>


        </section>
      </div>
    </div>
  );
}
