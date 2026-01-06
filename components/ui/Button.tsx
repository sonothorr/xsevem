
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'white';
  children: React.ReactNode;
  fullWidth?: boolean;
  withArrow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  fullWidth = false, 
  withArrow = false,
  className = '',
  ...props 
}) => {
  // Unificado: font-display (Syne), font-bold (700), tracking-tight
  const baseStyles = "inline-flex items-center justify-center px-10 py-5 text-sm font-bold transition-all duration-500 ease-out font-display tracking-tight group border border-transparent rounded-none uppercase select-none relative overflow-hidden";
  
  const variants = {
    primary: "bg-brand-cyan text-brand-black hover:bg-white hover:text-brand-black shadow-[0_10px_30px_rgba(34,211,238,0.1)] hover:shadow-[0_10px_40px_rgba(34,211,238,0.3)]",
    outline: "border-brand-cyan/50 text-brand-cyan hover:border-brand-cyan hover:bg-brand-cyan/5",
    ghost: "text-gray-500 hover:text-white",
    white: "bg-white text-brand-black hover:bg-brand-cyan shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(34,211,238,0.5)]"
  };

  const widthStyles = fullWidth ? "w-full" : "w-auto";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyles} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {withArrow && (
          <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />
        )}
      </span>
      
      {/* Efeito de brilho para variantes sólidas */}
      {(variant === 'primary' || variant === 'white') && (
        <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12 group-hover:left-[100%] transition-all duration-700 ease-in-out"></div>
      )}
    </button>
  );
};
