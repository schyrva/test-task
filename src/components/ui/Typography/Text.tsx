import React from "react";
import classNames from "classnames";

type TextVariant = "body" | "lead" | "small" | "tiny" | "large";
type TextColor = "default" | "muted" | "error" | "success" | "primary";
type TextWeight = "normal" | "medium" | "semibold" | "bold";

interface TextProps {
  children: React.ReactNode;
  variant?: TextVariant;
  color?: TextColor;
  weight?: TextWeight;
  className?: string;
  as?: React.ElementType;
}

const Text: React.FC<TextProps> = ({
  children,
  variant = "body",
  color = "default",
  weight = "normal",
  className = "",
  as: Component = "p",
}) => {
  const variantStyles = {
    tiny: "text-xs", // h-5 (20px)
    small: "text-sm", // h-6 (24px)
    body: "text-base", // h-8 (32px)
    lead: "text-lg", // h-10 (40px)
    large: "text-xl", // h-12 (48px)
  };

  const colorStyles = {
    default: "text-gray-900",
    muted: "text-gray-500",
    error: "text-red-600",
    success: "text-green-600",
    primary: "text-indigo-600",
  };

  const weightStyles = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  const textClasses = classNames(
    variantStyles[variant],
    colorStyles[color],
    weightStyles[weight],
    className
  );

  return <Component className={textClasses}>{children}</Component>;
};

export default Text;
