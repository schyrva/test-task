import { useEffect } from 'react';

/**
 * Хук для блокування/розблокування прокрутки сторінки
 * @param isLocked - флаг, який вказує, чи потрібно блокувати прокрутку
 */
export const useScrollLock = (isLocked: boolean): void => {
  useEffect(() => {
    if (!isLocked) return;

    // Зберігаємо поточне значення overflow і position body
    const originalStyle = window.getComputedStyle(document.body);
    const originalOverflow = originalStyle.overflow;

    // Блокуємо прокрутку
    document.body.style.overflow = 'hidden';

    // Функція очищення для відновлення оригінальних стилів
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isLocked]);
};
