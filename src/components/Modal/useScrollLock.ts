import { useEffect } from "react";

/**
 * Custom hook to lock scrolling on the body when a modal is open
 * @param isLocked Whether the scroll should be locked
 */
export const useScrollLock = (isLocked: boolean): void => {
  useEffect(() => {
    if (isLocked) {
      // Save the current overflow style
      const originalOverflow = document.body.style.overflow;
      // Lock scroll on body
      document.body.style.overflow = "hidden";

      // Cleanup function to restore original overflow when component unmounts
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isLocked]);
};
