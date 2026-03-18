'use client';

import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [cursorType, setCursorType] = useState('default');
  const [cursorText, setCursorText] = useState('');
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Verificar se o dispositivo tem um ponteiro de precisão (mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsDesktop(mediaQuery.matches);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Detectar o tipo de cursor a partir do elemento sob o mouse
      const target = e.target;
      
      if (target && 'closest' in target) {
        const section = (target as HTMLElement).closest('[data-cursor]');
        
        if (section) {
          const type = section.getAttribute('data-cursor') || 'default';
          const text = section.getAttribute('data-cursor-text') || '';
          setCursorType(type);
          setCursorText(text);
        } else {
          setCursorType('default');
          setCursorText('');
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const variants = {
    default: {
      width: 0,
      height: 0,
      backgroundColor: 'rgba(255, 255, 255, 0)',
      mixBlendMode: 'difference' as const,
      color: 'white',
    },
    hero: {
      width: 80,
      height: 80,
      backgroundColor: 'white',
      mixBlendMode: 'difference' as const,
      color: 'white',
    },
    stats: {
      width: 60,
      height: 60,
      backgroundColor: '#ccff00', // ds-lime
      mixBlendMode: 'normal' as const,
      color: 'black',
    },
    project: {
      width: 90,
      height: 90,
      backgroundColor: 'white',
      color: 'black',
      mixBlendMode: 'normal' as const,
    },
    about: {
      width: 40,
      height: 40,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      mixBlendMode: 'difference' as const,
      color: 'white',
    }
  };

  const currentVariant = variants[cursorType as keyof typeof variants] || variants.default;

  if (!isDesktop) return null;

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        x: cursorX,
        y: cursorY,
        pointerEvents: 'none',
        zIndex: 9999,
        translateX: '-50%',
        translateY: '-50%',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '12px',
        textAlign: 'center',
      }}
      animate={{
        width: currentVariant.width,
        height: currentVariant.height,
        backgroundColor: currentVariant.backgroundColor,
        mixBlendMode: currentVariant.mixBlendMode,
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 200 }}
    >
      {cursorText && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={currentVariant.color === 'black' ? 'text-black' : 'text-white'}
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  );
}
