import { useState, useCallback, useMemo } from "react";
import { SelectOptionType } from "../components/Select/SelectOption";
import { filterOptions } from "../utils/selectUtils";

/**
 * Hook for filtering options based on search input
 */
export function useSearchFilter(options: SelectOptionType[]) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }, []);

  const filteredOptions = useMemo(() => {
    return filterOptions(options, searchValue);
  }, [searchValue, options]);

  const resetSearch = useCallback(() => {
    setSearchValue("");
  }, []);

  return {
    searchValue,
    setSearchValue,
    handleSearch,
    filteredOptions,
    resetSearch,
  };
}
