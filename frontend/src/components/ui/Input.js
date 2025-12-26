// src/components/ui/Input.js
import React from 'react';
import { borderRadius, componentSizes } from '../../utils/sizes';

const Input = ({
    label,
    icon,           // ✅ รับได้ทั้ง string (emoji) และ component (icon)
    iconColor = 'text-gray-400',
    error,
    helperText,
    size = 'md',
    className = '',
    ...props
}) => {
    return (
        <div className="space-y-2">
            {label && (
                <label className="block text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}

            <div className="relative">
                {icon && (
                    <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${iconColor}`}>
                        {/* ✅ ตรวจสอบว่า icon เป็น component หรือ string */}
                        {typeof icon === 'string' ? (
                            <span className="text-xl">{icon}</span>  // Emoji
                        ) : (
                            <div className="text-xl">{icon}</div>   // Icon component
                        )}
                    </div>
                )}

                <input
                    className={`
            w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all
            ${icon ? 'pl-10' : 'pl-4'}
            ${componentSizes[size].Input}
            ${borderRadius.md}
            ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''}
            ${className}
          `}
                    {...props}
                />
            </div>

            {error && (
                <p className="text-red-600 text-sm">{error}</p>
            )}

            {helperText && !error && (
                <p className="text-gray-500 text-sm">{helperText}</p>
            )}
        </div>
    );
};

export default Input;