import classNames from 'classnames';
import React from 'react';

import { CARD_STYLES } from '../../../constants';
import { CardProps } from '../../../types';

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  noPadding = false,
  bordered = false,
  elevation = 'md',
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
