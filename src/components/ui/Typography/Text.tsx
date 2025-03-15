import React from "react";
import classNames from "classnames";

type TextVariant = "body" | "lead" | "small" | "tiny";
type TextColor = "default" | "muted" | "error" | "success";

interface TextProps {
  children: React.ReactNode;
  variant?: TextVariant;
  color?: TextColor;
  className?: string;
}

const Text: React.FC<TextProps> = ({
  children,
  variant = "body",
  color = "default",
  className = "",
}) => {
  const variantStyles = {
    body: "text-base",
    lead: "text-lg",
    small: "text-sm",
    tiny: "text-xs",
  };

  const colorStyles = {
    default: "text-gray-900",
    muted: "text-gray-500",
    error: "text-red-600",
    success: "text-green-600",
  };

  const textClasses = classNames(
    variantStyles[variant],
    colorStyles[color],
    className
  );

  return <p className={textClasses}>{children}</p>;
};

export default Text;
