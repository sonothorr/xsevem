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
}: CaseStudyProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Scale down when the NEXT section scrolls over this one
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0.3]);
  const y = useTransform(scrollYProgress, [0.5, 1], [0, 100]);

  // Entrance animations for the 3D mockups
  const { scrollYProgress: enterProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start center'],
  });

  const mockupY = useTransform(enterProgress, [0, 1], [150, 0]);
  const mockupRotateX = useTransform(enterProgress, [0, 1], [25, 5]);

  const bgTextY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div ref={containerRef} data-cursor="project" data-cursor-text="VER" className="h-[200vh] relative z-10">
      <div className="sticky top-0 h-svh w-full p-[10px]">
        <motion.div
          style={{ scale, opacity, y }}
          className={`w-full h-full ${bgColor} ${textColor} flex flex-col items-center justify-center overflow-hidden radius-md shadow-[0_-10px_40px_rgba(0,0,0,0.5)] origin-top relative`}
        >
          {/* Top Meta */}
          <div className="absolute top-8 left-8 right-8 md:top-12 md:left-12 md:right-12 flex justify-between items-start z-20 text-white">
            <span className="text-meta">0{index}</span>
            <span className="text-meta">{subtitle}</span>
          </div>

          {/* Giant Headline Background */}
          <div className="absolute inset-0 flex items-end justify-center z-0 pointer-events-none opacity-10 overflow-hidden pb-0">
            <motion.h2
              style={{ y: bgTextY, fontSize: 'clamp(120px, 40vw, 600px)' }}
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
