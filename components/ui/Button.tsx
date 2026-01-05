import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'cta';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "font-display font-black text-lg uppercase border-[3px] border-black transition-all duration-100 ease-in-out";
  const shadowStyles = "shadow-hard active:shadow-none active:translate-x-[6px] active:translate-y-[6px]";
  
  const variants = {
    primary: "bg-insignia-violet text-white hover:bg-violet-600",
    secondary: "bg-black text-white hover:bg-gray-900",
    accent: "bg-insignia-cyan text-black hover:bg-cyan-400",
    cta: "bg-insignia-yellow text-black hover:bg-yellow-300",
  };

  return (
    <button 
      className={`
        ${baseStyles} 
        ${shadowStyles} 
        ${variants[variant]} 
        ${fullWidth ? 'w-full' : ''} 
        py-4 px-8 
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};
