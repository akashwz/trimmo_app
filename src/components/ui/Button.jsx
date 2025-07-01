'use client';

import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  type = 'button',
  className = '',
  ...props
}) => {
  const variants = {
    primary: 'bg-global-9 text-global-1 hover:bg-global-7 focus:ring-global-6 hover:scale-105',
    secondary: 'bg-global-14 text-global-1 hover:bg-global-11 focus:ring-global-11 hover:scale-105'
  };

  const sizes = {
    sm: 'px-3 py-1 text-sm h-8',
    md: 'px-4 py-2 h-10 sm:h-11',
    lg: 'px-5 py-3 text-lg h-12 sm:h-14'
  };

  return (
    <div className="flex flex-row">
      <button
        type={type}
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
        className={`
          rounded-[22px]
          transition-all 
          duration-300
          ease-out
          focus:outline-none 
          focus:ring-2 
          focus:ring-opacity-50
          font-polysans
          font-semibold
          text-sm sm:text-base
          leading-5
          text-center
          flex
          items-center
          justify-center
          whitespace-nowrap
          ${variants[variant]} 
          ${sizes[size]} 
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:shadow-lg active:scale-95'} 
          ${className}
        `.trim().replace(/\s+/g, ' ')}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;