import React from "react";
import classNames from "classnames";
import { BadgeProps } from "../../../types";
import { BADGE_STYLES } from "../../../constants";

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  withIcon = false,
  removable = false,
  onRemove,
}) => {
  const badgeClasses = classNames(
    BADGE_STYLES.BASE,
    BADGE_STYLES.VARIANTS[variant],
    BADGE_STYLES.SIZES[size],
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
