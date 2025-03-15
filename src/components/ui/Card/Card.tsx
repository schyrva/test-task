import React from "react";
import classNames from "classnames";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
  bordered?: boolean;
  elevation?: "none" | "sm" | "md" | "lg" | "xl";
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  noPadding = false,
  bordered = false,
  elevation = "md",
}) => {
  const elevationStyles = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
  };

  const cardClasses = classNames(
    "rounded-lg",
    elevationStyles[elevation],
    !noPadding && "p-4",
    bordered && "border border-gray-200",
    className || "bg-white"
  );

  return <div className={cardClasses}>{children}</div>;
};

export default Card;
