export const capitalizeFirstLetter = (text: string): string => {
  if (!text || typeof text !== 'string') return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const formatTitleCase = (text: string): string => {
  if (!text || typeof text !== 'string') return '';
  return text
    .split(' ')
    .map((word) => capitalizeFirstLetter(word))
    .join(' ');
};
