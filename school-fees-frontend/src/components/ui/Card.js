// src/components/ui/Card.js
import React from 'react';
import { paddings } from '../../utils/sizes';

const Card = ({ 
  children, 
  padding = 'md',
  hover = false,
  className = '',
  ...props 
}) => {  
    return (
    <div
      className={`
        bg-white rounded-xl shadow-lg border border-gray-100
        ${paddings[padding]}
        ${hover ? 'hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;