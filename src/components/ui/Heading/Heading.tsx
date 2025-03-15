import React from "react";
import classNames from "classnames";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingVariant = "primary" | "secondary";
type TextAlign = "left" | "center" | "right";
type HeadingWeight = "medium" | "semibold" | "bold";

interface HeadingProps {
  level: HeadingLevel;
  children: React.ReactNode;
  variant?: HeadingVariant;
  weight?: HeadingWeight;
  className?: string;
  align?: TextAlign;
}

const Heading: React.FC<HeadingProps> = ({
  level,
  children,
  variant = "primary",
  weight = "bold",
  className = "",
  align = "left",
}) => {
  const Tag = level as keyof JSX.IntrinsicElements;

  const variantStyles = {
    primary: "text-gray-900",
    secondary: "text-gray-700",
  };

  const weightStyles = {
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  const sizeStyles = {
    h1: "text-3xl", // 30px
    h2: "text-2xl", // 24px
    h3: "text-xl", // 20px
    h4: "text-lg", // 18px
    h5: "text-base", // 16px
    h6: "text-sm", // 14px
  };

  const alignStyles = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const headingClasses = classNames(
    variantStyles[variant],
    sizeStyles[level],
    weightStyles[weight],
    alignStyles[align],
    className
  );

  return <Tag className={headingClasses}>{children}</Tag>;
};

export default Heading;
