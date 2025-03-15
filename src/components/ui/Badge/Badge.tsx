import React from "react";
import classNames from "classnames";

export type BadgeVariant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "dark"
  | "light";
export type BadgeSize = "sm" | "md";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  withIcon?: boolean;
  removable?: boolean;
  onRemove?: () => void;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  withIcon = false,
  removable = false,
  onRemove,
}) => {
  const baseStyles =
    "inline-flex items-center rounded-full font-medium leading-tight";

  const variantStyles = {
    primary: "bg-indigo-100 text-indigo-800",
    secondary: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    danger: "bg-red-100 text-red-800",
    warning: "bg-yellow-100 text-yellow-800",
    info: "bg-blue-100 text-blue-800",
    dark: "bg-gray-800 text-white",
    light: "bg-gray-100 text-gray-800",
  };

  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5",
    md: "text-sm px-3 py-1",
  };

  const badgeClasses = classNames(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onRemove) onRemove();
  };

  return (
    <span className={badgeClasses}>
      {withIcon && (
        <span className="mr-1.5">
          <svg className="h-2 w-2 fill-current" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="3" />
          </svg>
        </span>
      )}
      {children}
      {removable && (
        <span
          className="ml-1.5 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-500 cursor-pointer"
          onClick={handleRemove}
        >
          ×
        </span>
      )}
    </span>
  );
};

export default Badge;
