'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';

interface CaseStudyProps {
  title: string;
  subtitle: string;
  bgColor: string;
  textColor: string;
  index: number;
  mainImage?: string;
  bgImage1?: string;
  bgImage2?: string;
  link?: string;
  zIndex?: number;
  topOffset?: number;
}

export function CaseStudy({
  title,
  subtitle,
  bgColor,
  textColor,
  index,
  mainImage,
  bgImage1,
  bgImage2,
  link,
  zIndex = 10,
  topOffset = 0,
}: CaseStudyProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Scale down slightly and darken when the NEXT section scrolls over
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.3]);

  // Entrance animations for the 3D mockups
  const { scrollYProgress: enterProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start center'],
  });

  const mockupY = useTransform(enterProgress, [0, 1], [100, 0]);
  const mockupRotateX = useTransform(enterProgress, [0, 1], [15, 5]);

  const bgTextY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div 
      ref={containerRef} 
      data-cursor="project" 
      data-cursor-text="VER" 
      className="h-[120vh] relative w-full"
      style={{ zIndex }}
    >
      <div 
        className="sticky w-full h-svh p-2 md:p-6"
        style={{ top: `${topOffset}px` }}
      >
        <motion.div
          style={{ scale }}
          className={`w-full h-full ${bgColor} ${textColor} flex flex-col items-center justify-center overflow-hidden radius-2xl shadow-[0_30px_60px_rgba(0,0,0,0.4)] border border-white/5 origin-top relative`}
        >
          {/* Progress Overlay (darkens previous card as next one comes) */}
          <motion.div 
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-black z-30 pointer-events-none"
          />

          {/* Top Meta */}
          <div className="absolute top-6 left-6 right-6 md:top-10 md:left-10 md:right-10 flex justify-between items-start z-40 text-white">
            <span className="text-meta">0{index}</span>
            <span className="text-meta">{subtitle}</span>
          </div>

          {/* Giant Headline Background */}
          <div className="absolute inset-0 flex items-end justify-center z-0 pointer-events-none opacity-20 overflow-hidden pb-0">
            <motion.h2
              style={{ y: bgTextY, fontSize: 'clamp(100px, 45vw, 600px)' }}
              className="font-display font-extrabold leading-none tracking-tighter whitespace-nowrap"
            >
              {title}
            </motion.h2>
          </div>

          {/* 3D Mockup Stack */}
          <div className="relative w-full max-w-6xl aspect-[9/16] md:aspect-video perspective-deep z-10 flex items-center justify-center mt-12 md:mt-0">
            <motion.div
              style={{ y: mockupY, rotateX: mockupRotateX }}
              className="w-full h-full relative transform-style-3d flex items-center justify-center group"
            >
              {/* Background Mockup Left */}
              <div
                className="absolute w-[45%] md:w-[35%] aspect-[3/4] bg-ds-surface-2 radius-sm shadow-2xl overflow-hidden border border-white/10 opacity-80 transition-transform duration-700 group-hover:translate-x-[-70%] group-hover:rotate-y-[10deg]"
                style={{
                  transform: 'translateX(-65%) translateZ(-150px) rotateY(15deg)',
                }}
              >
                <Image
                  src={bgImage1 || `https://picsum.photos/seed/${title}bg1/800/1000`}
                  alt={`Preview do projeto ${title} - Visão 1`}
                  fill
                  className="object-cover grayscale"
                />
              </div>

              {/* Background Mockup Right */}
              <div
                className="absolute w-[45%] md:w-[35%] aspect-[3/4] bg-ds-surface-2 radius-sm shadow-2xl overflow-hidden border border-white/10 opacity-80 transition-transform duration-700 group-hover:translate-x-[70%] group-hover:rotate-y-[-10deg]"
                style={{
                  transform: 'translateX(65%) translateZ(-150px) rotateY(-15deg)',
                }}
              >
                <Image
                  src={bgImage2 || `https://picsum.photos/seed/${title}bg2/800/1000`}
                  alt={`Preview do projeto ${title} - Visão 2`}
                  fill
                  className="object-cover grayscale"
                />
              </div>

              {/* Main Mockup */}
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                   className="absolute w-[70%] md:w-[55%] aspect-[3/4] md:aspect-[4/3] bg-ds-surface-1 radius-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden border border-white/20 transition-transform duration-700 group-hover:scale-[1.03] group-hover:translate-z-[80px] cursor-pointer"
                  style={{ transform: 'translateZ(50px)' }}
                >
                  <Image
                    src={mainImage || `https://picsum.photos/seed/${title}/1200/900`}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </a>
              ) : (
                <div
                   className="absolute w-[70%] md:w-[55%] aspect-[3/4] md:aspect-[4/3] bg-ds-surface-1 radius-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden border border-white/20 transition-transform duration-700 group-hover:scale-[1.03] group-hover:translate-z-[80px] cursor-default"
                  style={{ transform: 'translateZ(50px)' }}
                >
                  <Image
                    src={mainImage || `https://picsum.photos/seed/${title}/1200/900`}
                    alt={`Mockup principal do projeto ${title}`}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              )}

            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
