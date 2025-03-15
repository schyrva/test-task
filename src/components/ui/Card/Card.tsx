import React from "react";
import classNames from "classnames";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  const cardClasses = classNames(
    "rounded-lg shadow-md",
    className || "bg-white"
  );

  return <div className={cardClasses}>{children}</div>;
};

export default Card;
