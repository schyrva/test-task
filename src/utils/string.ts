/**
 * Capitalizes the first letter of a string
 */
export const capitalizeFirstLetter = (text: string): string => {
  if (!text || typeof text !== "string") return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
};

/**
 * Formats a string to title case (capitalizes each word)
 */
export const formatTitleCase = (text: string): string => {
  if (!text || typeof text !== "string") return "";
  return text
    .split(" ")
    .map((word) => capitalizeFirstLetter(word))
    .join(" ");
};
