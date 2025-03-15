import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

export type ButtonVariant = 'primary' | 'secondary' | 'text' | 'outline' | 'danger';
export type ButtonSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl';
export type ButtonIconPosition = 'left' | 'right';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
  icon?: ReactNode;
  iconPosition?: ButtonIconPosition;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'base',
  fullWidth = false,
  isLoading = false,
  icon,
  iconPosition = 'left',
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 font-medium transition-colors';
  
  const variantStyles = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-500',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
    text: 'text-indigo-600 hover:text-indigo-800 bg-transparent hover:bg-indigo-50 focus:ring-indigo-500',
    outline: 'border border-indigo-500 text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500 bg-transparent',
  };
  
  const sizeStyles = {
    xs: 'py-1 px-2 text-xs h-5',
    sm: 'py-1.5 px-3 text-sm h-6',
    base: 'py-2 px-4 text-sm h-8',
    lg: 'py-2.5 px-5 text-base h-10',
    xl: 'py-3 px-6 text-base h-12',
  };
  
  const isDisabled = disabled || isLoading;
  
  const buttonClasses = classNames(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth ? 'w-full' : '',
    isDisabled ? 'opacity-50 cursor-not-allowed' : '',
    className
  );

  return (
    <button
      type="button"
      disabled={isDisabled}
      className={buttonClasses}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      
      {icon && iconPosition === 'left' && !isLoading && (
        <span className="mr-2">{icon}</span>
      )}
      
      {children}
      
      {icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </button>
  );
};

export default Button; 