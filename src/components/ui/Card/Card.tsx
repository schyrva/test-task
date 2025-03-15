import React from "react";
import classNames from "classnames";
import { CardProps } from "../../../types";
import { CARD_STYLES } from "../../../constants";

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  noPadding = false,
  bordered = false,
  elevation = "md",
}) => {
  const cardClasses = classNames(
    CARD_STYLES.BASE,
    CARD_STYLES.ELEVATIONS[elevation],
    !noPadding && CARD_STYLES.PADDING,
    bordered && CARD_STYLES.BORDER,
    className
  );

  return <div className={cardClasses}>{children}</div>;
};

export default Card;
