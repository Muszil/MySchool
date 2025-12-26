// src/components/ui/PasswordInput.js
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { borderRadius, componentSizes } from '../../utils/sizes';

const PasswordInput = ({
  label,
  icon,
  iconColor = 'text-gray-400',
  error,
  helperText,
  size = 'md',
  className = '',
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

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
            {typeof icon === 'string' ? (
              <span className="text-xl">{icon}</span>
            ) : (
              <div className="text-xl">{icon}</div>
            )}
          </div>
        )}

        <input
          type={showPassword ? 'text' : 'password'}
          className={`
            w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all
            ${icon ? 'pl-10' : 'pl-4'}
            ${componentSizes[size].input || 'px-5 py-4 text-lg'}
            ${borderRadius.md}
            ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''}
            ${className}
          `}
          {...props}
        />

        {/* ปุ่มแสดง/ซ่อนรหัสผ่าน */}
        <button
          type="button"
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash className="text-xl" /> : <FaEye className="text-xl" />}
        </button>
      </div>

      {error && <p className="text-red-600 text-sm">{error}</p>}
      {helperText && !error && <p className="text-gray-500 text-sm">{helperText}</p>}
    </div>
  );
};

export default PasswordInput;