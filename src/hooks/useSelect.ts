import { SelectOptionType } from '../types';

import { useDropdown } from './useDropdown';
import { useMultiSelect } from './useMultiSelect';
import { useSearchFilter } from './useSearchFilter';

interface UseSelectProps {
  options: SelectOptionType[];
  value: SelectOptionType[];
  onChange: (value: SelectOptionType[]) => void;
  maxSelections?: number;
  isSearchable?: boolean;
}

export function useSelect({
  options,
  value,
  onChange,
  maxSelections = Infinity,
  isSearchable = true,
}: UseSelectProps) {
  const dropdown = useDropdown();
  const multiSelect = useMultiSelect({ value, onChange, maxSelections });
  const search = useSearchFilter(options);

  const toggleDropdown = () => {
    if (!dropdown.isOpen) {
      search.resetSearch();
    }
    dropdown.toggleDropdown();
  };

  return {
    isOpen: dropdown.isOpen,
    dropdownRef: dropdown.dropdownRef,
    toggleDropdown,

    selectedItems: multiSelect.selectedItems,
    handleOptionClick: multiSelect.handleOptionClick,
    removeSelected: multiSelect.removeSelected,
    hasReachedMax: multiSelect.hasReachedMax,

    searchValue: search.searchValue,
    handleSearch: search.handleSearch,
    filteredOptions: search.filteredOptions,

    isSearchable,
  };
}
