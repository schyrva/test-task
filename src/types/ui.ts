export type ButtonVariant =
  | "primary"
  | "secondary"
  | "text"
  | "outline"
  | "danger";
export type ButtonSize = "xs" | "sm" | "base" | "lg" | "xl";
export type ButtonIconPosition = "left" | "right";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: ButtonIconPosition;
  className?: string;
}

export type TextColor = "default" | "muted" | "error" | "success" | "primary";
export type TextWeight = "normal" | "medium" | "semibold" | "bold";
export type TextVariant = "tiny" | "small" | "body" | "lead" | "large";
export type TextAlign = "left" | "center" | "right";

export interface TextProps {
  children: React.ReactNode;
  variant?: TextVariant;
  color?: TextColor;
  weight?: TextWeight;
  className?: string;
  as?: React.ElementType;
}

export type HeadingLevel =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";
export type HeadingVariant = "primary" | "secondary";
export type HeadingWeight = "medium" | "semibold" | "bold";
export type HeadingAlign = TextAlign;

export interface HeadingProps {
  children: React.ReactNode;
  level?: HeadingLevel;
  variant?: HeadingVariant;
  weight?: HeadingWeight;
  align?: HeadingAlign;
  className?: string;
}

export type BadgeVariant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "dark"
  | "light";

export type BadgeSize = "sm" | "md";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  withIcon?: boolean;
  removable?: boolean;
  onRemove?: () => void;
}

export type CardElevation = "none" | "sm" | "md" | "lg" | "xl";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
  bordered?: boolean;
  elevation?: CardElevation;
}
