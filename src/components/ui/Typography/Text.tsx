import React from "react";
import classNames from "classnames";
import { TextProps } from "../../../types";
import { TEXT_STYLES } from "../../../constants";

const Text: React.FC<TextProps> = ({
  children,
  variant = "body",
  color = "default",
  weight = "normal",
  className = "",
  as: Component = "p",
}) => {
  const textClasses = classNames(
    TEXT_STYLES.VARIANTS[variant],
    TEXT_STYLES.COLORS[color],
    TEXT_STYLES.WEIGHTS[weight],
    className
  );

  return <Component className={textClasses}>{children}</Component>;
};

export default Text;
