import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, className = '', ...props }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="font-display font-bold text-black uppercase text-sm tracking-wide">
          {label}
        </label>
      )}
      <input
        className={`
          w-full bg-insignia-bg border-[3px] border-black p-4 
          font-mono text-black placeholder:text-gray-500 
          focus:outline-none focus:shadow-hard transition-all
          ${className}
        `}
        {...props}
      />
    </div>
  );
};
