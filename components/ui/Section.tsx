
import React from 'react';
// Fix: Import MotionProps to explicitly type the animation properties object.
import { motion, MotionProps } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  disableAnimation?: boolean;
  hasContainer?: boolean;
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id,
  disableAnimation = false,
  hasContainer = true,
}) => {
  // Fix: Add explicit MotionProps type to ensure correct type inference for the `ease` array,
  // which was being inferred as `number[]` instead of a tuple `[number, number, number, number]`.
  const motionProps: MotionProps = disableAnimation ? {} : {
    initial: { opacity: 0.3, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { 
      once: false, 
      amount: 0.2,
      margin: "0px 0px -15% 0px" 
    },
    transition: { 
      duration: 0.5, 
      ease: "easeOut",
      type: "tween"
    },
  };

  const containerClass = hasContainer ? "container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl" : "";

  return (
    <motion.section
      id={id}
      {...motionProps}
      className={`py-16 md:py-32 relative will-change-[opacity,transform] transform-gpu ${className}`}
      style={{ backfaceVisibility: 'hidden' }}
    >
      {hasContainer ? (
        <div className={containerClass}>
          {children}
        </div>
      ) : (
        children
      )}
    </motion.section>
  );
};

export const Reveal: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-20px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut", type: "tween" }}
      className="will-change-[opacity,transform] transform-gpu"
      style={{ backfaceVisibility: 'hidden' }}
    >
      {children}
    </motion.div>
  );
};
