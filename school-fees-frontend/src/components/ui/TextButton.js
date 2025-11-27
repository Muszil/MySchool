// src/components/ui/TextButton.js
import React from 'react';

const TextButton = ({ 
  children, 
  variant = 'primary',
  disabled = false,
  onClick,
  className = '',
  ...props 
}) => {
  const variants = {
    primary: "text-blue-600 hover:text-blue-800",
    secondary: "text-gray-600 hover:text-gray-800", 
    danger: "text-red-600 hover:text-red-800",
    success: "text-green-600 hover:text-green-800"
  };

  const disabledClasses = "opacity-50 cursor-not-allowed";

  return (
    <button
      className={`
        inline-flex items-center font-medium transition-colors duration-200 focus:outline-none focus:underline
        ${variants[variant]}
        ${disabled ? disabledClasses : ''}
        ${className}
      `}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default TextButton;