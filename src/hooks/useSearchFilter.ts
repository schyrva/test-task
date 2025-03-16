import { useState, useCallback, useMemo } from 'react';

import { SelectOptionType } from '../types';
import { filterOptions } from '../utils/selectUtils';

export function useSearchFilter(options: SelectOptionType[]) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }, []);

  const filteredOptions = useMemo(() => {
    return filterOptions(options, searchValue);
  }, [searchValue, options]);

  const resetSearch = useCallback(() => {
    setSearchValue('');
  }, []);

  return {
    searchValue,
    setSearchValue,
    handleSearch,
    filteredOptions,
    resetSearch,
  };
}
