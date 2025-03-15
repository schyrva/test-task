/**
 * UI Component style constants
 */

// Button Styles
export const BUTTON_STYLES = {
  BASE: "inline-flex items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 font-medium transition-colors",

  VARIANTS: {
    primary:
      "bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500",
    secondary:
      "bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-500",
    danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
    text: "text-indigo-600 hover:text-indigo-800 bg-transparent hover:bg-indigo-50 focus:ring-indigo-500",
    outline:
      "border border-indigo-500 text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500 bg-transparent",
  },

  SIZES: {
    xs: "py-1 px-2 text-xs h-5",
    sm: "py-1.5 px-3 text-sm h-6",
    base: "py-2 px-4 text-sm h-8",
    lg: "py-2.5 px-5 text-base h-10",
    xl: "py-3 px-6 text-base h-12",
  },
};

// Typography Styles
export const TEXT_STYLES = {
  VARIANTS: {
    tiny: "text-xs", // h-5 (20px)
    small: "text-sm", // h-6 (24px)
    body: "text-base", // h-8 (32px)
    lead: "text-lg", // h-10 (40px)
    large: "text-xl", // h-12 (48px)
  },

  COLORS: {
    default: "text-gray-900",
    muted: "text-gray-500",
    error: "text-red-600",
    success: "text-green-600",
    primary: "text-indigo-600",
  },

  WEIGHTS: {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  },
};

// Heading Styles
export const HEADING_STYLES = {
  VARIANTS: {
    primary: "text-gray-900",
    secondary: "text-gray-700",
  },

  WEIGHTS: {
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  },

  SIZES: {
    h1: "text-3xl", // 30px
    h2: "text-2xl", // 24px
    h3: "text-xl", // 20px
    h4: "text-lg", // 18px
    h5: "text-base", // 16px
    h6: "text-sm", // 14px
  },

  ALIGN: {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  },
};

// Badge Styles
export const BADGE_STYLES = {
  BASE: "inline-flex items-center rounded-full font-medium leading-tight",

  VARIANTS: {
    primary: "bg-indigo-100 text-indigo-800",
    secondary: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    danger: "bg-red-100 text-red-800",
    warning: "bg-yellow-100 text-yellow-800",
    info: "bg-blue-100 text-blue-800",
    dark: "bg-gray-800 text-white",
    light: "bg-gray-100 text-gray-800",
  },

  SIZES: {
    sm: "text-xs px-2.5 py-0.5",
    md: "text-sm px-3 py-1",
  },
};

// Card Styles
export const CARD_STYLES = {
  BASE: "bg-white rounded-lg overflow-hidden",

  ELEVATIONS: {
    none: "",
    sm: "shadow-sm",
    md: "shadow",
    lg: "shadow-md",
    xl: "shadow-lg",
  },

  PADDING: "p-4",
  BORDER: "border border-gray-200",
};
