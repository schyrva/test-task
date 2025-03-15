import React from "react";
import classNames from "classnames";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
  bordered?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  noPadding = false,
  bordered = false,
}) => {
  const cardClasses = classNames(
    "rounded-lg shadow-md",
    !noPadding && "p-4",
    bordered && "border border-gray-200",
    className || "bg-white"
  );

  return <div className={cardClasses}>{children}</div>;
};

export default Card;
