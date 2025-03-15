import React from "react";
import classNames from "classnames";
import { HeadingProps } from "../../../types";
import { HEADING_STYLES } from "../../../constants";

const Heading: React.FC<HeadingProps> = ({
  level = 1,
  children,
  variant = "primary",
  weight = "bold",
  align = "left",
  className = "",
}) => {
  const normalizedLevel =
    typeof level === "string" ? parseInt(level.replace("h", "")) || 1 : level;

  const Tag = `h${normalizedLevel}` as keyof JSX.IntrinsicElements;
  const sizeKey = `h${normalizedLevel}` as keyof typeof HEADING_STYLES.SIZES;

  const headingClasses = classNames(
    HEADING_STYLES.SIZES[sizeKey],
    HEADING_STYLES.VARIANTS[variant],
    HEADING_STYLES.WEIGHTS[weight],
    HEADING_STYLES.ALIGN[align],
    className
  );

  return <Tag className={headingClasses}>{children}</Tag>;
};

export default Heading;
