'use client';

import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react';
import { useRef, useEffect } from 'react';

const stats = [
  { target: 3, suffix: '+', label: 'ANOS' },
  { target: 20, suffix: '+', label: 'PROJETOS' },
  { target: 100, suffix: '%', label: 'DEDICAÇÃO' },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-80px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, target, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    } else {
      count.set(0);
    }
  }, [inView, count, target]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <section ref={ref} className="w-full bg-ds-black py-24 px-6 md:px-12 relative z-10">
      <h2 className="sr-only">Nosso Impacto em Números</h2>
      {/* Linha separadora topo */}
      <div className="w-full h-[1px] bg-white/10 mb-20" />

      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12 max-w-screen-xl mx-auto">
        {stats.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.9, delay: i * 0.15, ease: [0.11, 0.68, 0.17, 0.99] }}
            className="flex flex-col gap-2 flex-1"
          >
            {/* Número animado */}
            <span
              className="font-display font-extrabold leading-none tracking-tighter text-white"
              style={{ fontSize: 'clamp(80px, 12vw, 200px)' }}
            >
              <AnimatedNumber target={item.target} suffix={item.suffix} />
            </span>

            {/* Linha + label */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-[1px] bg-white/10" />
              <span className="text-meta text-white/40">{item.label}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Linha separadora base */}
      <div className="w-full h-[1px] bg-white/10 mt-20" />
    </section>
  );
}
