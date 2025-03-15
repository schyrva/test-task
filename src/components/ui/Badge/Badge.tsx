import React from 'react';
import classNames from 'classnames';

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light';
export type BadgeSize = 'sm' | 'md';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  withIcon?: boolean;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  withIcon = false,
}) => {
  const baseStyles = 'inline-flex items-center rounded-full font-medium';
  
  const variantStyles = {
    primary: 'bg-indigo-100 text-indigo-800',
    secondary: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    danger: 'bg-red-100 text-red-800',
    warning: 'bg-yellow-100 text-yellow-800',
    info: 'bg-blue-100 text-blue-800',
    dark: 'bg-gray-800 text-white',
    light: 'bg-gray-100 text-gray-800',
  };
  
  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
  };

  // Apply the 10px horizontal padding as shown in the design spec
  const paddingStyle = {
    padding: size === 'sm' ? '2px 10px' : '2px 10px',
  };
  
  const badgeClasses = classNames(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  return (
    <span className={badgeClasses} style={paddingStyle}>
      {withIcon && (
        <span className="mr-1">
          <svg className="h-2 w-2 fill-current" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="3" />
          </svg>
        </span>
      )}
      {children}
      {className.includes('removable') && (
        <span className="ml-1.5 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-500">
          ×
        </span>
      )}
    </span>
  );
};

export default Badge; 