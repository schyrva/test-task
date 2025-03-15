import { useDropdown } from "./useDropdown";
import { useMultiSelect } from "./useMultiSelect";
import { useSearchFilter } from "./useSearchFilter";
import { SelectOptionType } from "../types";

interface UseSelectProps {
  options: SelectOptionType[];
  value: SelectOptionType[];
  onChange: (value: SelectOptionType[]) => void;
  maxSelections?: number;
  isSearchable?: boolean;
}

/**
 * Main hook that combines all select functionality
 */
export function useSelect({
  options,
  value,
  onChange,
  maxSelections = Infinity,
  isSearchable = true,
}: UseSelectProps) {
  // Combine our individual hooks
  const dropdown = useDropdown();
  const multiSelect = useMultiSelect({ value, onChange, maxSelections });
  const search = useSearchFilter(options);

  // Reset search when dropdown opens
  const toggleDropdown = () => {
    if (!dropdown.isOpen) {
      search.resetSearch();
    }
    dropdown.toggleDropdown();
  };

  return {
    // Dropdown state
    isOpen: dropdown.isOpen,
    dropdownRef: dropdown.dropdownRef,
    toggleDropdown,

    // Selection state
    selectedItems: multiSelect.selectedItems,
    handleOptionClick: multiSelect.handleOptionClick,
    removeSelected: multiSelect.removeSelected,
    hasReachedMax: multiSelect.hasReachedMax,

    // Search functionality
    searchValue: search.searchValue,
    handleSearch: search.handleSearch,
    filteredOptions: search.filteredOptions,

    // Convenience properties
    isSearchable,
  };
}
