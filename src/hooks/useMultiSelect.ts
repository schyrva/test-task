import { useCallback } from "react";
import { SelectOptionType } from "../types";
import { isOptionSelected, toggleSelection } from "../utils/selectUtils";

interface UseMultiSelectProps {
  value: SelectOptionType[];
  onChange: (value: SelectOptionType[]) => void;
  maxSelections?: number;
}

/**
 * Hook for managing multi-select functionality
 */
export function useMultiSelect({
  value,
  onChange,
  maxSelections = Infinity,
}: UseMultiSelectProps) {
  const handleOptionClick = useCallback(
    (option: SelectOptionType) => {
      const newSelection = toggleSelection(option, value, maxSelections);
      onChange(newSelection);
    },
    [value, onChange, maxSelections]
  );

  const removeSelected = useCallback(
    (optionValue: number, e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      onChange(value.filter((item) => item.value !== optionValue));
    },
    [value, onChange]
  );

  const hasReachedMax = value.length >= maxSelections;

  return {
    selectedItems: value,
    handleOptionClick,
    removeSelected,
    hasReachedMax,
    isOptionSelected: (option: SelectOptionType) =>
      isOptionSelected(option, value),
  };
}
