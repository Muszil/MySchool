// src/components/ui/Button.js
import React from 'react';
import { borderRadius, componentSizes } from '../../utils/sizes';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  icon, 
  disabled = false,
  onClick,
  className = '',
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "text-white focus:ring-blue-500 shadow-lg hover:shadow-xl",
    secondary: "bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500",
    success: "bg-green-600 hover:bg-green-700 text-white focus:ring-green-500",
    danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500",
    ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
    text: "text-blue-30 hover:text-blue-10 bg-transparent hover:bg-transparent focus:ring-blue-200 underline hover:no-underline"
  };

  

  const disabledClasses = "opacity-50 cursor-not-allowed";

  return (
    <button
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${componentSizes[size].Button}
        ${borderRadius.md}
        ${disabled ? disabledClasses : 'transform hover:-translate-y-0.5'}
        ${className}
      `}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;